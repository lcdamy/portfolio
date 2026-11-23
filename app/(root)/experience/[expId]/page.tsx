import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ExperienceDescription from "@/components/experience/exp-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";
import peterImg from "@/public/peter-img.jpg";

interface ExperiencePageProps {
  params: {
    expId: string;
  };
}

export function generateStaticParams() {
  return Experiences.map((exp) => ({ expId: exp.id }));
}

export function generateMetadata({ params }: ExperiencePageProps): Metadata {
  const exp = Experiences.find((val) => val.id === params.expId);
  if (!exp) return {};

  return {
    title: exp.companyName,
    description: exp.shortDescription,
    alternates: {
      canonical: `${siteConfig.url}/experience/${exp.id}`,
    },
    openGraph: {
      title: exp.companyName,
      description: exp.shortDescription,
      url: `${siteConfig.url}/experience/${exp.id}`,
    },
  };
}

export default function Experience({ params }: ExperiencePageProps) {
  const exp = Experiences.find((val) => val.id === params.expId);
  if (!exp) {
    notFound();
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/experience"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Experience
      </Link>
      <div>
        <time
          dateTime={new Date(exp.startDate).toISOString()}
          className="block text-sm text-muted-foreground"
        >
          {formatDateFromObj(exp.startDate)}
        </time>
        <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {exp.companyName}
          <div className="flex items-center">
            {exp.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={exp.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {exp.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link href={exp.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={exp.category} />
        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={peterImg}
              alt="Pierre Damien Murindangabo Cyuzuzo"
              width={42}
              height={42}
              className="rounded-full bg-background"
            />

            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{"Pierre Damien Murindangabo Cyuzuzo"}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Image
        src={exp.companyLogoImg}
        alt={exp.companyName}
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />

      {exp.links && exp.links.length > 0 && (
        <div className="mb-7 ">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
            Live Systems
          </h2>
          <ul className="space-y-2">
            {exp.links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary underline-offset-4 hover:underline"
                >
                  <Icons.externalLink className="mr-2 h-4 w-4" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Tech Stack
        </h2>
        <ChipContainer textArr={exp.techStack} />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Description
        </h2>
        {/* {<exp.descriptionComponent />} */}
        <ExperienceDescription
          paragraphs={exp.descriptionDetails.paragraphs}
          bullets={exp.descriptionDetails.bullets}
        />
      </div>

      {exp.pagesInfoArr.length > 0 && (
        <div className="mb-7 ">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">
            Page Info
          </h2>
          {exp.pagesInfoArr.map((page, ind) => (
            <div key={ind}>
              <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3">
                <Icons.star className="h-5 w-5 mr-2" /> {page.title}
              </h3>
              <div>
                <p>{page.description}</p>
                {page.imgArr.map((img, ind) => (
                  <Image
                    src={img}
                    key={ind}
                    alt={`${exp.companyName} - ${page.title} screenshot ${ind + 1}`}
                    width={720}
                    height={405}
                    className="my-4 rounded-md border bg-muted transition-colors"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/experience"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Experience
        </Link>
      </div>
    </article>
  );
}
