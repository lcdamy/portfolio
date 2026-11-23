import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { pagesConfig } from "@/config/pages";
import { skillsByCategory } from "@/config/skills";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default function SkillsPage() {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <div className="space-y-10">
        {skillsByCategory.map(({ category, skills }) => (
          <section key={category} className="space-y-4">
            <h2 className="font-heading text-2xl leading-tight">{category}</h2>
            <SkillsCard skills={skills} />
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
