"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// Gives instant feedback when an internal link is clicked: a thin progress
// bar at the top of the page, plus the destination path so the menu can
// highlight it immediately, before the new page has finished loading.

const PendingPathContext = createContext<string | null>(null);

export function usePendingPath() {
  return useContext(PendingPathContext);
}

function internalPathFromClick(event: MouseEvent): string | null {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return null;
  }
  const anchor = (event.target as Element | null)?.closest?.("a");
  if (!anchor || !anchor.href) return null;
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  // Same page (or only a #hash change): no navigation to wait for.
  if (url.pathname === window.location.pathname) return null;
  return url.pathname;
}

export function NavigationProgress({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  // Start on internal link clicks (capture phase, so it runs first).
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const path = internalPathFromClick(event);
      if (!path) return;
      clearTimers();
      setPendingPath(path);
      setVisible(true);
      setProgress(15);
      // Creep towards 90% while waiting; the jump to 100% happens on arrival.
      timers.current.push(window.setTimeout(() => setProgress(45), 100));
      timers.current.push(window.setTimeout(() => setProgress(70), 600));
      timers.current.push(window.setTimeout(() => setProgress(90), 2000));
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Finish when the new page is shown (also covers back/forward).
  useEffect(() => {
    setPendingPath(null);
    if (!visible) return;
    clearTimers();
    setProgress(100);
    timers.current.push(
      window.setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => clearTimers, []);

  return (
    <PendingPathContext.Provider value={pendingPath}>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5"
      >
        <div
          className="h-full bg-primary shadow-[0_0_8px_hsl(var(--primary))] transition-[width,opacity] duration-300 ease-out"
          style={{ width: `${progress}%`, opacity: visible ? 1 : 0 }}
        />
      </div>
      {children}
    </PendingPathContext.Provider>
  );
}
