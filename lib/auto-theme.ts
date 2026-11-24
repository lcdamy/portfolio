// Time-of-day theme: light during the day, dark at night, based on the
// visitor's local clock (which follows the time zone of where they are).

export const THEME_STORAGE_KEY = "theme";
// "1" = follow the time of day, "0" = keep the theme the visitor picked.
// (Renamed from "theme-auto" so browsers that stored an early value start fresh.)
export const AUTO_STORAGE_KEY = "theme-time-auto";

// Local hours (24h). Light from DAY_START_HOUR until NIGHT_START_HOUR.
export const DAY_START_HOUR = 7;
export const NIGHT_START_HOUR = 18;

export function themeForTime(date: Date = new Date()): "light" | "dark" {
  const hour = date.getHours();
  return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? "light" : "dark";
}

export function isAutoThemeEnabled(): boolean {
  try {
    return localStorage.getItem(AUTO_STORAGE_KEY) !== "0";
  } catch {
    return true;
  }
}

export function setAutoThemeEnabled(enabled: boolean) {
  try {
    localStorage.setItem(AUTO_STORAGE_KEY, enabled ? "1" : "0");
  } catch {
    // Storage unavailable (private mode, blocked cookies): nothing to persist.
  }
}

// Runs in <head> before the page paints, so the right theme is applied with
// no flash. It writes the time-based theme where next-themes reads it.
// Auto mode is the default. Only a visitor who previously picked one of the
// special themes (retro, cyberpunk, ...) keeps it; an old light/dark/system
// value is replaced by the time-of-day theme.
export const autoThemeScript = `(function(){try{
var a=localStorage.getItem("${AUTO_STORAGE_KEY}"),t=localStorage.getItem("${THEME_STORAGE_KEY}");
if(a===null&&t&&t!=="light"&&t!=="dark"&&t!=="system"){localStorage.setItem("${AUTO_STORAGE_KEY}","0");return;}
if(a==="0")return;
var h=new Date().getHours();
localStorage.setItem("${THEME_STORAGE_KEY}",h>=${DAY_START_HOUR}&&h<${NIGHT_START_HOUR}?"light":"dark");
}catch(e){}})();`;
