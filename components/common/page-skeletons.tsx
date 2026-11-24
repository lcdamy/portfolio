import { ReactNode } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { skillsByCategory } from "@/config/skills";

// Loading placeholders that mirror the real page layouts (same containers,
// grids and spacing), so the page doesn't jump when the content arrives.

function LoadingRegion({ children }: { children: ReactNode }) {
  return (
    <div role="status" aria-label="Loading page" className="motion-safe:animate-fade-in">
      {children}
      <span className="sr-only">Loading…</span>
    </div>
  );
}

// Mirrors PageContainer + PageHeader (title, description, divider, mx-6 body).
function PageShellSkeleton({ children }: { children: ReactNode }) {
  return (
    <LoadingRegion>
      <div className="mt-5 space-y-4">
        <Skeleton className="h-10 w-48 lg:h-12 lg:w-64" />
        <Skeleton className="h-7 w-full max-w-md" />
      </div>
      <hr className="my-6" />
      <div className="mx-6">{children}</div>
    </LoadingRegion>
  );
}

function ChipsSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-8 w-16" />
      ))}
    </div>
  );
}

// Mirrors components/experience/project-card.tsx
function ProjectCardSkeleton() {
  return (
    <div className="relative max-w-sm rounded-lg border border-border bg-background p-6">
      <Skeleton className="aspect-video w-full rounded-lg" />
      <div className="space-y-3 pt-5">
        <Skeleton className="h-8 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <ChipsSkeleton />
        <Skeleton className="mt-2 h-10 w-32" />
      </div>
      <Skeleton className="absolute bottom-4 right-4 h-10 w-10 rounded-full" />
    </div>
  );
}

export function HomeSkeleton() {
  return (
    <LoadingRegion>
      <section className="flex min-h-[calc(100svh-5rem)] items-center py-10 md:py-16">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Skeleton className="mb-0 aspect-square w-[60%] max-w-[16rem] rounded-full md:mb-2" />
          <div className="mt-5 flex w-full flex-col items-center gap-2">
            <Skeleton className="h-8 w-4/5 max-w-[40rem] sm:h-11 md:h-14 lg:h-[68px]" />
            <Skeleton className="h-8 w-3/5 max-w-[30rem] sm:h-11 md:h-14 lg:h-[68px]" />
          </div>
          <Skeleton className="h-6 w-48 lg:h-8" />
          <div className="mt-4 flex w-full max-w-[42rem] flex-col items-center gap-1">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-1/2" />
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:space-x-4">
            <Skeleton className="h-11 w-32" />
            <Skeleton className="h-11 w-36" />
            <Skeleton className="h-11 w-36" />
          </div>
        </div>
      </section>
    </LoadingRegion>
  );
}

export function SkillsSkeleton() {
  // Same tiles per category as the real Skills page; long names wrap
  // onto two lines there, so their placeholder is two lines tall too.
  const groups = skillsByCategory.map((group) =>
    group.skills.map((skill) => skill.name.length > 15)
  );
  return (
    <PageShellSkeleton>
      <div className="space-y-10">
        {groups.map((tiles, g) => (
          <section key={g} className="space-y-4">
            <Skeleton className="h-[30px] w-60" />
            <div className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {tiles.map((twoLines, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center rounded-lg border bg-background p-4"
                >
                  <Skeleton className="h-9 w-9 rounded-md" />
                  <Skeleton
                    className={`mt-2 w-20 ${twoLines ? "h-12" : "h-6"}`}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShellSkeleton>
  );
}

export function ExperienceSkeleton() {
  return (
    <PageShellSkeleton>
      <Skeleton className="h-10 w-full max-w-[30rem]" />
      <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </PageShellSkeleton>
  );
}

export function CareerSkeleton() {
  return (
    <PageShellSkeleton>
      <div className="container mx-auto max-w-5xl px-2 py-4 sm:px-4 sm:py-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="relative mb-8 flex">
            <Skeleton className="h-8 w-8 shrink-0 rounded-full sm:h-16 sm:w-16" />
            <div className="ml-3 flex-1 rounded-lg border border-border bg-card p-3 sm:ml-6 sm:p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-56 sm:h-7 sm:w-72" />
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-3 w-28" />
                </div>
                <Skeleton className="h-5 w-24 rounded-full" />
              </div>
              {i === 0 && (
                <div className="mt-3 space-y-2 border-t border-border pt-3 sm:mt-4 sm:pt-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="mt-4 h-4 w-28" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageShellSkeleton>
  );
}

export function ContactSkeleton() {
  const fields = ["h-10", "h-10", "h-20"];
  return (
    <PageShellSkeleton>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 space-y-8">
          {fields.map((height, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className={`${height} w-full`} />
            </div>
          ))}
          <Skeleton className="h-10 w-20" />
        </div>
        <div className="flex flex-1 justify-center">
          {/* Mirrors components/contact/github-redirect-card.tsx */}
          <div className="mt-5 h-fit w-full max-w-sm rounded-lg border">
            <div className="flex flex-col items-center p-8">
              <Skeleton className="mb-6 h-12 w-12 rounded-full" />
              <Skeleton className="h-10 w-44" />
              <Skeleton className="mb-4 mt-2 h-7 w-60" />
              <div className="mb-6 w-full space-y-1">
                <Skeleton className="mx-auto h-6 w-52" />
                <Skeleton className="mx-auto h-6 w-44" />
                <Skeleton className="mx-auto h-6 w-48" />
              </div>
              <Skeleton className="mb-5 h-10 w-10 rounded-full" />
            </div>
            <div className="px-8 pb-8">
              <Skeleton className="h-[52px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </PageShellSkeleton>
  );
}

// Mirrors app/(root)/experience/[expId]/page.tsx
export function ExperienceDetailSkeleton() {
  return (
    <LoadingRegion>
      <article className="container relative max-w-3xl py-6 lg:py-10">
        <Skeleton className="h-5 w-28" />
        <Skeleton className="mt-2 h-10 w-2/3 lg:h-12" />
        <div className="mt-3">
          <ChipsSkeleton />
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <Skeleton className="h-[42px] w-[42px] rounded-full" />
          <div className="space-y-1">
            <Skeleton className="h-4 w-56" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
        <Skeleton className="my-8 aspect-video w-full" />
        <div className="mb-7 space-y-2">
          <Skeleton className="h-9 w-40" />
          <ChipsSkeleton count={6} />
        </div>
        <div className="mb-7 space-y-2">
          <Skeleton className="h-9 w-44" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </article>
    </LoadingRegion>
  );
}

// Mirrors components/career/career-detail.tsx
export function CareerDetailSkeleton() {
  return (
    <LoadingRegion>
      <article className="container relative max-w-3xl px-3 py-4 sm:px-4 sm:py-6 md:px-6 lg:py-10">
        <Skeleton className="mb-3 h-8 w-20 sm:mb-4 xl:hidden" />
        <div className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8">
          <div className="mb-4 flex justify-center sm:justify-start">
            <Skeleton className="h-5 w-28 rounded-full" />
          </div>
          <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4 md:mb-0">
            <Skeleton className="h-16 w-16 shrink-0 rounded-full sm:h-20 sm:w-20" />
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <Skeleton className="h-7 w-64 md:h-9 md:w-80" />
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <div className="mb-4 flex gap-2 border-b border-border pb-2 sm:mb-6">
              <Skeleton className="h-7 w-20" />
              <Skeleton className="h-7 w-28" />
              <Skeleton className="h-7 w-16" />
            </div>
            {/* Summary bullet list (usually 4-6 points, some wrapping) */}
            <div className="space-y-3">
              {["w-full", "w-11/12", "w-full", "w-4/5", "w-full", "w-2/3", "w-11/12", "w-full", "w-3/4", "w-5/6", "w-1/2"].map(
                (width, i) => (
                  <Skeleton key={i} className={`h-4 ${width}`} />
                )
              )}
            </div>
          </div>
        </div>
      </article>
    </LoadingRegion>
  );
}
