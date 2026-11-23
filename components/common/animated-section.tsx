"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  id?: string;
}

const hiddenOffset = {
  up: "motion-safe:translate-y-12",
  down: "motion-safe:-translate-y-12",
  left: "motion-safe:translate-x-12",
  right: "motion-safe:-translate-x-12",
};

// Reveals its content once it scrolls into view, using a tiny
// IntersectionObserver and CSS transitions instead of an animation library.
export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  id,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : cn("motion-safe:opacity-0", hiddenOffset[direction]),
        className
      )}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
};
