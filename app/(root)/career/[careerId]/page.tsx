import { Metadata } from "next";
import { notFound } from "next/navigation";

import CareerDetail from "@/components/career/career-detail";
import { careerExperiences } from "@/config/career";
import { siteConfig } from "@/config/site";

interface CareerDetailPageProps {
  params: {
    careerId: string;
  };
}

export function generateStaticParams() {
  return careerExperiences.map((career) => ({ careerId: career.id }));
}

export function generateMetadata({ params }: CareerDetailPageProps): Metadata {
  const career = careerExperiences.find((c) => c.id === params.careerId);
  if (!career) return {};

  const title = `${career.position} at ${career.company}`;
  const description = career.description[0] ?? title;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/career/${career.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/career/${career.id}`,
    },
  };
}

export default function CareerDetailPage({ params }: CareerDetailPageProps) {
  const career = careerExperiences.find((c) => c.id === params.careerId);
  if (!career) {
    notFound();
  }

  return <CareerDetail career={career} />;
}
