import { ReactNode } from "react";

interface ClientPageWrapperProps {
  children: ReactNode;
}

// CSS-only page fade-in (no client JavaScript needed).
export const ClientPageWrapper = ({ children }: ClientPageWrapperProps) => {
  return <div className="w-full motion-safe:animate-fade-up">{children}</div>;
};
