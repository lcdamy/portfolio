"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

import { isAutoThemeEnabled, themeForTime } from "@/lib/auto-theme";

// Keeps the theme in sync with the time of day while auto mode is on,
// e.g. when the page stays open past sunset or the tab is reopened later.
export function AutoTheme() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const sync = () => {
      if (!isAutoThemeEnabled()) return;
      const next = themeForTime();
      if (theme !== next) setTheme(next);
    };

    sync();
    const interval = window.setInterval(sync, 60_000);
    document.addEventListener("visibilitychange", sync);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [theme, setTheme]);

  return null;
}
