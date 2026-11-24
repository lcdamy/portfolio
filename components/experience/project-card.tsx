import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
  project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg">
      <div className="relative w-full aspect-video">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt={`${project.companyName} project cover`}
          fill
          sizes="(min-width: 1024px) 384px, 100vw"
        />
      </div>
      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="font-normal text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Button asChild variant={"default"} className="mt-2">
          <Link href={`/experience/${project.id}`}>
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Link>
        </Button>
      </div>
      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border">
        {project.type === "Personal Project" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
