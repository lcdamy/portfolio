"use client";

import { Norican } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { usePendingPath } from "@/components/common/navigation-progress";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});


export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();
  // Highlight the clicked item right away, before the new page has loaded.
  const pendingPath = usePendingPath();
  const activePath = pendingPath ?? pathname;
  const isActive = (href: string) =>
    activePath === href || activePath.startsWith(`${href}/`);

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  const closeMobileMenu = React.useCallback(() => setShowMobileMenu(false), []);

  return (
    <div className="flex gap-6 md:gap-10">
      <div className="motion-safe:animate-fade-down">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className={cn(norican.className, "text-2xl")}>
            {siteConfig.authorName}
          </span>
        </Link>
      </div>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex items-center">
          {items?.map((item, index) => (
            <div
              key={index}
              className="motion-safe:animate-fade-down"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <Link
                href={item.disabled ? "#" : item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu((open) => !open)}
        aria-expanded={showMobileMenu}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items} onClose={closeMobileMenu}>
          {children}
        </MobileNav>
      )}
    </div>
  );
}
