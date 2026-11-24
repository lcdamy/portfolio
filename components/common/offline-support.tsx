"use client";

import { WifiOff } from "lucide-react";
import { useEffect, useState } from "react";

// Registers the service worker (public/sw.js) that keeps visited pages
// available without internet, and shows a small notice while offline.
export function OfflineSupport() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    if (process.env.NODE_ENV === "production") {
      const register = () =>
        navigator.serviceWorker.register("/sw.js").catch((error) => {
          console.error("Service worker registration failed", error);
        });
      // Register after the page has loaded so it never slows the first visit.
      if (document.readyState === "complete") register();
      else window.addEventListener("load", register, { once: true });
    } else {
      // In development, remove any worker left over from a production build
      // so cached files never hide your latest changes.
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => registrations.forEach((r) => r.unregister()))
        .catch(() => undefined);
    }
  }, []);

  useEffect(() => {
    const update = () => setOffline(!navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  if (!offline) return null;

  return (
    <div
      role="status"
      className="fixed bottom-4 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-2 rounded-full border bg-background/95 px-4 py-2 text-sm text-muted-foreground shadow-lg backdrop-blur"
    >
      <WifiOff className="h-4 w-4" />
      You&apos;re offline. Showing the saved version of this site.
    </div>
  );
}
