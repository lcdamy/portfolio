"use client";

import { useEffect } from "react";

import { routesConfig } from "@/config/routes";

// Development only: `next dev` compiles each page the first time it is
// visited, which makes the first click on a menu item feel stuck for a few
// seconds. This quietly requests the menu pages in the background once the
// current page is idle, so they are already compiled when clicked.
// In production every page is pre-built, so this renders nothing.
export function DevRouteWarmup() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const paths: string[] = [
      "/",
      ...routesConfig.mainNav.map((item: { href: string }) => item.href),
    ].filter((path) => path !== window.location.pathname);

    let cancelled = false;
    const warm = async () => {
      for (const path of paths) {
        if (cancelled) return;
        try {
          await fetch(path, { cache: "no-store" });
        } catch {
          // Ignore: warming is best-effort.
        }
      }
    };

    const idle =
      (window as any).requestIdleCallback ??
      ((cb: () => void) => window.setTimeout(cb, 1500));
    const handle = idle(() => void warm());

    return () => {
      cancelled = true;
      (window as any).cancelIdleCallback?.(handle);
    };
  }, []);

  return null;
}
