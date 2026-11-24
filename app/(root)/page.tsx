import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ProjectCard from "@/components/experience/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import peterImg from "@/public/peter-img.jpg";

export const metadata: Metadata = {
  title: {
    absolute: "Pierre Damien Murindangabo Cyuzuzo | Full Stack Developer",
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pierre Damien Murindangabo Cyuzuzo",
    alternateName: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
  };


  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="flex min-h-[calc(100svh-5rem)] items-center py-10 md:py-16">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image
            src={peterImg}
            height={100}
            width={100}
            sizes="(min-width: 640px) 256px, 60vw"
            className="bg-primary rounded-full mb-0 md:mb-2 w-[60%] max-w-[16rem] aspect-square shrink-0 object-cover object-top border-8 border-primary"
            alt="lcdamy - Full Stack Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Pierre Damien Murindangabo Cyuzuzo
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.1}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            Full Stack Developer
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              I’m a full-stack developer specializing in modern web apps with React, TypeScript, and scalable backends.
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.2}>
              <Link
                href={"https://github.com/lcdamy"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="View lcdamy's GitHub profile"
              >
                <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.3}>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label="View Pierre Damien's LinkedIn profile"
              >
                <Icons.linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.4}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label="Contact lcdamy"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> Contact
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={0.5}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        className="container space-y-6 bg-muted py-10"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredExperiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant experiences.
                    </p>
                </div> */}
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
