import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

// CSS-only fade-in: renders on the server and animates on first paint,
// without waiting for JavaScript.
export const AnimatedText = ({
  children,
  delay = 0,
  className = "",
  as: Component = "div",
}: AnimatedTextProps) => {
  return (
    <Component
      className={cn("motion-safe:animate-fade-up", className)}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Component>
  );
};
