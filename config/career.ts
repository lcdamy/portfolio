import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "TechClick",
    position: "Senior Full-stack engineer",
    company: "TechClick",
    location: "Kigali, Rwanda",
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    description: [
      "Collaborated with product designers and engineers to implement the HR system for the Rwanda Cooperative Initiative",
      "Deployed infrastructure using Terraform (IaC)",
      "Implemented Docker containerization and Kubernetes orchestration",
      "Built CI/CD pipelines with GitHub Actions and Jenkins",
      "Developed unit tests to ensure code reliability",
    ],
    achievements: [
      "Led the development of a comprehensive HR system for the Rwanda Cooperative Initiative, enhancing operational efficiency.",
      "Deployed infrastructure using Terraform (IaC), improving deployment speed by 50%.",
      "Implemented Docker containerization and Kubernetes orchestration, reducing server costs by 30%.",
      "Built CI/CD pipelines with GitHub Actions and Jenkins, increasing deployment frequency by 40%.",
      "Developed unit tests to ensure code reliability, achieving 95% test coverage.",
    ],
    skills: ["Typescript", "React", "express.js", "Node.js", "MongoDB", "AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
    companyUrl: "https://techclick.rw",
    logo: "/career/techclick.png",
  },
  {
    id: "fixa",
    position: "Senior software engineer",
    company: "Fixa ltd",
    location: "Kigali, Rwanda",
    startDate: new Date("2022-04-01"),
    endDate: new Date("2024-10-01"),
    description: [
      "Led development of FIXA Pay's first version with product designers and engineers.",
      "Collaborated with the back-end team to maintain FIXA's API and supported new feature workflows",
      "Reviewed code and resolved bugs across company platforms",
      "Provided accurate task estimations and realistic project timelines",
      "Mentored junior developers and interns, fostering a culture of continuous learning",
      "Conducted code reviews and provided constructive feedback to team members",
    ],
    achievements: [
      "Led development of FIXA Pay's first version, enhancing payment processing efficiency.",
      "Collaborated with the back-end team to maintain FIXA's API, improving system reliability.",
      "Reviewed code and resolved bugs across company platforms, reducing bug reports by 25%.",
      "Provided accurate task estimations and realistic project timelines, improving project delivery by 20%.",
      "Mentored junior developers and interns, fostering a culture of continuous learning and growth.",
      "Conducted code reviews and provided constructive feedback to team members, enhancing code quality.",
    ],
    skills: ["React", "Node.js", "AWS", "MYSQL", "Javascript"],
    companyUrl: "https://www.fixahr.com",
    logo: "/career/fixa.png",
  },
  {
    id: "savics",
    position: "Technical Lead",
    company: "SAVICS SRL",
    location: "Brussels, Belgium (Remote)",
    startDate: new Date("2019-12-01"),
    endDate: new Date("2023-08-01"),
    description: [
      "Led IT team as Tech Lead, fostering a productive work environment",
      "Reviewed code to ensure quality and adherence to standards",
      "Managed project timelines, ensuring on-time delivery.",
      "Maintained communication with the product manager to align goals.",
      "Contributed technical expertise to RFP preparation and project planning",
      "Mentored junior developers, enhancing team skills and knowledge",

    ],
    achievements: [
      "Led IT team as Tech Lead, fostering a productive work environment and improving team morale.",
      "Reviewed code to ensure quality and adherence to standards, resulting in a 30% reduction in bugs.",
      "Managed project timelines, ensuring on-time delivery and client satisfaction.",
      "Maintained communication with the product manager to align goals, enhancing project clarity.",
      "Contributed technical expertise to RFP preparation and project planning, winning key contracts.",
      "Mentored junior developers, enhancing team skills and knowledge, leading to improved performance.",
    ],
    skills: [
      "React",
      "Angular",
      "Rest API",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Docker",
      "DHIS2",
      "OpenHIE",
      "OpenMRS",
      "OpenMR",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Git",
    ],
    companyUrl: "https://savics.org",
    logo: "/career/savics.png",
  },
  {
    id: "du",
    position: "JavaScript developer",
    company: "Digital Umuganda",
    location: "Kigali, Rwanda",
    startDate: new Date("2021-02-01"),
    endDate: new Date("2022-03-01"),
    description: [
      "Developed and maintained Keyspoter UI, utilizing Mozilla Deepspeech AI for audio-to-text translation and word search in audio files ",
      "Collaborated on Mbaza, a chatbot AI answering COVID-19 queries",
      "Built a backend system to connect the chatbot with Zammad for seamless data retrieval.",
      "Trained the model to enable the chatbot to understand Kinyarwanda queries",
    ],
    achievements: [
      "Developed and maintained Keyspoter UI, enhancing user experience with audio-to-text translation.",
      "Collaborated on Mbaza, a chatbot AI answering COVID-19 queries, improving public access to information.",
      "Built a backend system to connect the chatbot with Zammad for seamless data retrieval, increasing efficiency.",
      "Trained the model to enable the chatbot to understand Kinyarwanda queries, expanding its usability.",
    ],
    skills: ["Javascript", "React"],
    companyUrl: "https://digitalumuganda.com",
    logo: "/career/du.svg",
  },
  {
    id: "hehe",
    position: "Software Engineer",
    company: "DMM.HeHe",
    location: "Kigali, Rwanda",
    startDate: new Date("2016-11-01"),
    endDate: new Date("2019-11-30"),
    description: [
      "Built a web application for real-time vehicle monitoring using GPS technology",
      "Designed and modified HEHE-Mart storefront on the cs-cart platform for local retailers.",
      "Implemented features like online payment, stock management, delivery, and user tracking",
      "Conducted fellowship programs to train high school students in coding and software development",
    ],
    achievements: [
      "Built a web application for real-time vehicle monitoring using GPS technology, enhancing fleet management.",
      "Designed and modified HEHE-Mart storefront on the cs-cart platform for local retailers, improving online sales.",
      "Implemented features like online payment, stock management, delivery, and user tracking, streamlining operations.",
      "Conducted fellowship programs to train high school students in coding and software development, fostering future talent.",
    ],
    skills: ["PHP", "Laravel", "MySQL", "Rabbit MQ"],
    companyUrl: "https://www.f6s.com/company/hehelabs",
    logo: "/career/hehe.jpg",
  },
  {
    id: "baho",
    position: "IT Support and system admin",
    company: "Baho International Hospital",
    location: "Kigali, Rwanda",
    startDate: new Date("2015-06-01"),
    endDate: new Date("2016-02-01"),
    description: [
      "Led the development of a Hospitalization Module in OpenMR to track bed availability, patient stays, and generate financial reports ",
      "Installed a comprehensive CCTV surveillance system across the hospital premises to enhance security",
    ],
    achievements: [
      "Led the development of a Hospitalization Module in OpenMR to track bed availability, patient stays, and generate financial reports, improving hospital management.",
      "Installed a comprehensive CCTV surveillance system across the hospital premises to enhance security, ensuring patient and staff safety.",
    ],
    skills: ["PHP", "MySQL", "OpenMR"],
    companyUrl: "https://bahointernationalhospital.com/index.php",
    logo: "/career/baho.png",
  },
];
