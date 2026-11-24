/*
 * Offline support for the portfolio.
 *
 * - Pages (HTML): network first, so visitors always get the latest version
 *   when online; if the network is unavailable, the last saved copy is used,
 *   and pages never visited before fall back to /offline.
 * - Build assets (/_next/static): cache first. Their file names change with
 *   every deploy, so a cached copy is always correct.
 * - Images, icons, fonts and other files: served from the cache straight
 *   away and refreshed in the background.
 *
 * Bump CACHE_VERSION to throw away every saved file on the next visit.
 */
const CACHE_VERSION = "v1";
const PAGES_CACHE = `pages-${CACHE_VERSION}`;
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const ASSETS_CACHE = `assets-${CACHE_VERSION}`;
const OFFLINE_URL = "/offline";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGES_CACHE)
      .then((cache) => cache.add(new Request(OFFLINE_URL, { cache: "reload" })))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  const keep = [PAGES_CACHE, STATIC_CACHE, ASSETS_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => !keep.includes(key)).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

function isRscRequest(request, url) {
  return request.headers.get("RSC") === "1" || url.searchParams.has("_rsc");
}

async function networkFirstPage(request) {
  const cache = await caches.open(PAGES_CACHE);
  try {
    const response = await fetch(request);
    if (response.ok && response.type === "basic") {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const saved =
      (await cache.match(request, { ignoreSearch: true })) ||
      (await cache.match(OFFLINE_URL));
    if (saved) return saved;
    throw error;
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const saved = await cache.match(request);
  if (saved) return saved;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const saved = await cache.match(request);
  const refresh = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => undefined);
  return saved || (await refresh) || Response.error();
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  // Leave other sites (analytics, LinkedIn, GitHub, ...) alone.
  if (url.origin !== self.location.origin) return;
  // Don't touch API calls or the service worker file itself.
  if (url.pathname.startsWith("/api/") || url.pathname === "/sw.js") return;
  // Client-side navigation data: always go to the network. If it fails
  // offline, Next.js falls back to a full page load, which is served below.
  if (isRscRequest(request, url)) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request));
    return;
  }

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  event.respondWith(staleWhileRevalidate(request, ASSETS_CACHE));
});
