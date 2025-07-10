import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {skills.map((skill, id) => (
      <div
        key={id}
        className="flex flex-col items-center justify-center rounded-lg border bg-background p-4"
      >
        <skill.icon size={36} />
        <h3 className="mt-2 font-medium text-center">{skill.name}</h3>
      </div>
      ))}
    </div>
  );
}
