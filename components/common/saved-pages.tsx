"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const KNOWN_TITLES: Record<string, string> = {
  "/": "Home",
  "/skills": "Skills",
  "/experience": "Experience",
  "/career": "Career",
  "/contact": "Contact",
};

function titleFor(path: string) {
  if (KNOWN_TITLES[path]) return KNOWN_TITLES[path];
  const parts = path.split("/").filter(Boolean);
  const section = KNOWN_TITLES[`/${parts[0]}`] ?? parts[0];
  const name = decodeURIComponent(parts[parts.length - 1] ?? "").replace(/[-_]/g, " ");
  return `${section}: ${name}`;
}

// Lists the pages the service worker has saved, so visitors can keep browsing.
export function SavedPages() {
  const [paths, setPaths] = useState<string[] | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!("caches" in window)) return setPaths([]);
      const names = (await caches.keys()).filter((n) => n.startsWith("pages-"));
      const found = new Set<string>();
      for (const name of names) {
        const cache = await caches.open(name);
        for (const request of await cache.keys()) {
          const path = new URL(request.url).pathname;
          if (path !== "/offline") found.add(path);
        }
      }
      setPaths(Array.from(found).sort());
    };
    load().catch(() => setPaths([]));
  }, []);

  return (
    <div className="space-y-6">
      <Button onClick={() => window.location.reload()}>Try again</Button>
      {paths && paths.length > 0 && (
        <div className="space-y-3">
          <h2 className="font-heading text-2xl">Available offline</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {paths.map((path) => (
              <li key={path}>
                {/* Full page load so the service worker can serve it. */}
                <Link
                  href={path}
                  prefetch={false}
                  className="block rounded-md border px-4 py-3 capitalize hover:bg-muted"
                >
                  {titleFor(path)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
