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
    id: "qt",
    position: "Software Engineer / Technical Lead",
    company: "QT Global Software Ltd",
    location: "Kigali, Rwanda",
    startDate: new Date("2025-09-01"),
    endDate: "Present",
    description: [
      "Leading a team of 4 developers implementing digital identity solutions for Rwanda's Smart Digital ID (SDID) project",
      "Coordinating technical development, API integrations and application delivery",
      "Building ABIS (Automated Biometric Identification System) microservices in Java and Spring Boot that turn face, fingerprint and iris captures into standard biometric templates",
      "Building React / Next.js portals for agents, service providers and citizens",
      "Coordinating integrations with external technical partners",
      "Automating deployments and code-quality checks across the platform",
    ],
    achievements: [
      "Delivered 2 SDID applications (Agent Portal and Service Provider Portal) to User Acceptance Testing (UAT) and integration with external systems.",
      "Built ABIS template-generation services for face, fingerprint and iris with ISO/IEC 19794 output and quality checks before enrollment.",
      "Streamlined platform deployments from over 1 hour to a single command.",
      "Integrated SonarQube checks with automated error notifications.",
      "Coordinated integrations with 4 external technical partners.",
    ],
    skills: ["Java", "Spring Boot", "React", "Next.js", "Typescript", "ABIS", "Biometrics", "Kafka", "PostgreSQL", "Docker", "Rest API", "SonarQube", "CI/CD"],
    logo: "/career/qt.svg",
  },
  {
    id: "TechClick",
    position: "Senior Full-stack engineer",
    company: "TechClick",
    location: "Kigali, Rwanda",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-08-31"),
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
    company: "FIXA Ltd",
    location: "Kigali, Rwanda",
    startDate: new Date("2022-04-01"),
    endDate: new Date("2025-10-31"),
    description: [
      "Led development of FIXA Pay's first version with product designers and engineers.",
      "Collaborated with the back-end team to maintain FIXA's API and supported new feature workflows",
      "Reviewed code and resolved bugs across company platforms",
      "Provided accurate task estimations and realistic project timelines",
      "Mentored junior developers and interns, fostering a culture of continuous learning",
      "Conducted code reviews and provided constructive feedback to team members",
    ],
    achievements: [
      "Led a cross-functional team of 4 developers (2 frontend, 1 backend, 1 mobile) building and enhancing FIXA Pay.",
      "FIXA Pay has processed over USD $5 million in payments through bank and mobile money integrations.",
      "Contributed to automating payroll calculations for informal-sector workers from attendance records.",
      "Reduced payroll processing time from over 3 days to approximately 1 hour.",
    ],
    skills: ["React", "Node.js", "AWS", "MYSQL", "Javascript"],
    companyUrl: "https://www.fixahr.com",
    logo: "/career/fixa.png",
  },
  {
    id: "savics",
    position: "Technical Lead (previously Sr. Software Engineer Consultant)",
    company: "SAVICS SRL",
    location: "Brussels, Belgium (Remote)",
    startDate: new Date("2019-12-01"),
    endDate: new Date("2023-12-31"),
    description: [
      "Led IT team as Tech Lead, fostering a productive work environment",
      "Reviewed code to ensure quality and adherence to standards",
      "Managed project timelines, ensuring on-time delivery.",
      "Maintained communication with the product manager to align goals.",
      "Contributed technical expertise to RFP preparation and project planning",
      "Mentored junior developers, enhancing team skills and knowledge",

    ],
    achievements: [
      "Led and mentored more than 10 developers across technical planning, estimation, code reviews and delivery for DataToCare and MediScout.",
      "Implemented healthcare interoperability solutions across 100+ facilities in Rwanda, Burundi, DRC, Cameroon and Benin.",
      "Automated OpenMRS-to-DHIS2 data exchange with an OpenHIM mediator, saving 2 hours of manual work per facility per week.",
      "Integrated DataToCare with DHIS2 in Rwanda and e-TB Manager in Cambodia.",
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
      "Contributed to Keyspoter, an AI research project using Mozilla DeepSpeech and Kinyarwanda datasets, reaching 80% speech-recognition accuracy.",
      "Developed integration services and contributed to model training for Mbaza, a nationwide COVID-19 platform for checking vaccination status via USSD.",
    ],
    skills: ["Javascript", "React"],
    companyUrl: "https://digitalumuganda.com",
    logo: "/career/du.svg",
  },
  {
    id: "hehe",
    position: "Software Engineer / Senior Software Developer",
    company: "DMM.HeHe",
    location: "Kigali, Rwanda",
    startDate: new Date("2017-03-01"),
    endDate: new Date("2019-11-30"),
    description: [
      "Built a web application for real-time vehicle monitoring using GPS technology",
      "Designed and modified HEHE-Mart storefront on the cs-cart platform for local retailers.",
      "Implemented features like online payment, stock management, delivery, and user tracking",
      "Conducted fellowship programs to train high school students in coding and software development",
    ],
    achievements: [
      "Developed frontend interfaces for a GPS fleet management platform tracking 200+ vehicles, improving tracking efficiency by an estimated 80%.",
      "Enhanced HEHE-Mart e-commerce interfaces, contributing to roughly 30% growth in online sales.",
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
