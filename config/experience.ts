import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface ExternalLinkInterface {
  label: string;
  url: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  links?: ExternalLinkInterface[];
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "sdid",
    companyName: "QT Global Software Ltd",
    type: "Professional",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "National digital identity platform for Rwanda: ABIS biometric services and portals for agents and service providers.",
    techStack: ["Java", "Spring Boot", "React", "Next.js", "Typescript", "ABIS", "Biometrics", "Kafka", "PostgreSQL", "Docker", "SonarQube", "CI/CD"],
    startDate: new Date("2025-09-01"),
    endDate: new Date(),
    companyLogoImg: "/experience/sdid/cover.svg",
    links: [
      {
        label: "SDID Consent Portal (UAT)",
        url: "https://uat-consent-portal.sdid.nida.gov.rw/login",
      },
      {
        label: "SDID Parent Portal (UAT)",
        url: "https://uat-parent-portal.sdid.nida.gov.rw/login",
      },
    ],
    pagesInfoArr: [
      {
        title: "SDID Consent Portal",
        description:
          "A service portal where organizations manage consent agreements, track user-assisted consent from request to expiry, subscribe to notifications and run assisted eKYC identity verification.",
        imgArr: [
          "/experience/sdid/consent_home.webp",
          "/experience/sdid/consent_agreements.webp",
          "/experience/sdid/consent_agreement_detail.webp",
          "/experience/sdid/assisted_consent.webp",
        ],
      },
      {
        title: "SDID Identity & Consent Management",
        description:
          "Operational portals for searching and managing digital identities by SDIN or application ID, handling requests, and administering data policies and consent. Personal data in these screenshots has been blurred.",
        imgArr: [
          "/experience/sdid/sdid_portals_home.webp",
          "/experience/sdid/sdin_search.webp",
          "/experience/sdid/sdid_record.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Rwanda's Smart Digital ID (SDID) project provides digital identity services for citizens and residents. At QT Global Software Ltd, I lead a team of 4 developers implementing the SDID applications, coordinating technical development, API integrations and application delivery.",
        "On the frontend, the work spans React / Next.js portals, including the Agent Portal, the Service Provider Portal, the Consent Portal and the Parent Portal. On the backend, it covers Java / Spring Boot middleware and the ABIS (Automated Biometric Identification System) services that process citizens' biometrics during enrollment.",
        "The ABIS layer is split into dedicated face, fingerprint and iris microservices. Each one converts raw captures into standardized ISO/IEC 19794 templates and checks image quality before a record is accepted, so only usable biometrics reach identification and verification.",
      ],
      bullets: [
        "Delivered the Agent Portal and the Service Provider Portal to User Acceptance Testing (UAT) and integration with external systems.",
        "Built ABIS template-generation microservices for face, fingerprint and iris using Java 21, Spring Boot and a biometric SDK, with batch processing and quality thresholds.",
        "Built Spring Boot enrollment middleware that relays enrollment requests over Kafka with end-to-end trace propagation.",
        "Developed React / Next.js portals with authentication and multi-language support.",
        "Built consent management features: consent agreements with purposes, attributes and retention, user-assisted consent tracking, and data policies.",
        "Streamlined platform deployments from over 1 hour to a single command.",
        "Integrated SonarQube checks with automated error notifications.",
        "Coordinated integrations with 4 external technical partners.",
        "Led technical planning, estimation and code reviews for the development team.",
      ],
    },
  },
  {
    id: "datatocare",
    companyName: "Savics SRL",
    type: "Professional",
    category: ["Backend", "Frontend", "UI/UX"],
    shortDescription:
      "Connects national laboratory networks: collects test data, shows live dashboards and notifies results.",
    websiteLink: "https://datatocare.org",
    techStack: ["Angular", "Javascript", "HTML 5", "CSS 3", "Java", "Javafx", "Kotlin"],
    startDate: new Date("2019-12-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/experience/datatocare/cover.svg",
    pagesInfoArr: [
      {
        title: "Data to Care screen shoots",
        description: "Some of the screenshoot that show Web part",
        imgArr: [
          "/experience/datatocare/logo.webp",
          "/experience/datatocare/card_1.webp",
          "/experience/datatocare/card_2.webp",
          "/experience/datatocare/card_3.webp",
          "/experience/datatocare/card_4.webp",
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "DataToCare is a fully customizable open-source suite of integrated applications (mobile, desktop, web) that connects national laboratory networks by collecting diagnostic and patient data at the facility level, displaying real-time information on a dashboard to facilitate decision-making at the central level, and notifying test results to medical teams and patients.",
        "DataToCare is a comprehensive platform designed to streamline laboratory workflows and enhance public health surveillance. It captures patient and diagnostic data, integrates with various laboratory devices, and presents actionable insights through intuitive dashboards."
      ],
      bullets: [
        "Improved existing functionalities in the Desktop application, enhancing performance and user experience.",
        "Customized and added new features to the Web application based on client-specific requirements",
        "Contributed to Mediscout, a web and mobile app developed by Savics for community-level surveillance, risk assessment, and activity coordination",
        "Worked on OpenMRS and DHIS2 integrations, incorporating disease-specific modules such as Tuberculosis and HIV to support comprehensive health data management"
      ],
    },
  },
  {
    id: "rci",
    companyName: "TechClick Rwanda",
    type: "Professional",
    category: ["Backend", "Frontend", "UI/UX"],
    shortDescription:
      "ExpertConnect matches professionals with high-impact opportunities in gender equality and sustainable development.",
    websiteLink: "https://rci.uat.techclick.rw",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Rest API",
      "Nest.js",
      "Typescript",
      "express.js"
    ],
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-07-31"),
    companyLogoImg: "/experience/rci/cover.svg",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing different pages and features",
        imgArr: [
          "/experience/rci/logo.webp",
          "/experience/rci/landing_1.webp",
          "/experience/rci/landing_3.webp",
          "/experience/rci/landing_5.webp",
          "/experience/rci/landing_6.webp",
          "/experience/rci/landing_2.webp",
          "/experience/rci/landing_4.webp",
          "/experience/rci/cli_dashboard_1.webp",
          "/experience/rci/cli_dashboard_2.webp",
          "/experience/rci/cli_dashboard_3.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ExpertConnect is a digital platform designed to connect professionals with high-impact opportunities in areas such as gender equality, sustainable development, and other global challenges. By bridging the gap between expertise and action, the platform empowers users to expand their influence and contribute meaningfully to progress.",
        "Connecting experts to impactful opportunities in gender equality, sustainable development, and more. Empowering professionals to expand their reach and drive progress."
      ],
      bullets: [
        "I was responsible for developing the backend of the project, where I utilized Express.js and PostgreSQL to build robust and scalable APIs.",
        "I also contributed to the frontend, collaborating with the team to implement features and ensure a seamless user experience.",
        "Throughout the project, we relied on Figma designs to guide our development process and maintain consistency in the user interface.",
      ],
    },
  },
  {
    id: "adminpanel",
    companyName: "Fixa LTD",
    type: "Professional",
    category: ["Backend", "Frontend", "UI/UX"],
    shortDescription:
      "HR system for casual workers, covering attendance tracking, payroll processing and workforce records.",
    websiteLink: "https://adminpanel.fixarwanda.com",
    techStack: ["React", "Node.js", "MYSQL", "Typescript", "Tailwind CSS"],
    startDate: new Date("2021-08-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/experience/fixa/cover.svg",
    pagesInfoArr: [
      {
        title: "Admin Panel Screenshots",
        description: "Fixa Admin Panel is a comprehensive HR management system designed to streamline casual worker management, attendance tracking, payroll processing, and more.",
        imgArr: [
          "/experience/fixa/logo.webp",
          "/experience/fixa/app_1.webp",
          "/experience/fixa/app_2.webp",
          "/experience/fixa/app_3.webp",
          "/experience/fixa/app_4.webp",
          "/experience/fixa/app_5.webp",
          "/experience/fixa/app_6.webp",
          "/experience/fixa/app_7.webp",
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "The Fixa Admin Panel is a full-featured HR management system designed to simplify and optimize the administration of casual workers. It offers tools for attendance tracking, payroll processing, and other essential HR operations, enabling organizations to manage workforce data with precision and ease."
      ],
      bullets: [
        "Implemented attendance tracking and payroll processing features.",
        "Utilized React for frontend development, ensuring a user-friendly interface.",
        "Employed Node.js for backend development and MySQL for data storage.",
        "Enhanced code quality and maintainability using Typescript.",
        "Designed intuitive navigation and clear calls to action for ease of use.",
        "Focused on streamlining HR processes and improving efficiency.",
        "Collaborated with the team to deliver a high-quality product.",
      ],
    },
  },
  {
    id: "earthlinkgroup",
    companyName: "Earth Link Group",
    type: "Professional",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Company website for EarthLink Business, a firm that helps companies expand into international markets.",
    websiteLink:
      "https://earthlinkgroup.com",
    techStack: ["Next.js", "Typescript", "Tailwind CSS"],
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-07-15"),
    companyLogoImg: "/experience/earthlinkgroup/cover.svg",
    pagesInfoArr: [
      {
        title: "Different Pages",
        description:
          "Modern and responsive landing page showcasing different pages and features",
        imgArr: [
          "/experience/earthlinkgroup/logo.webp",
          "/experience/earthlinkgroup/app_1.webp",
          "/experience/earthlinkgroup/app_2.webp",
          "/experience/earthlinkgroup/app_3.webp",
          "/experience/earthlinkgroup/app_4.webp",
          "/experience/earthlinkgroup/app_5.webp",
          "/experience/earthlinkgroup/app_6.webp",
          "/experience/earthlinkgroup/app_7.webp",
          "/experience/earthlinkgroup/app_8.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `The Earth Link Group project is a comprehensive web that I developed using Next.js and Typescript`
      ],
      bullets: [
        "Implemented a modern and responsive user interface with Tailwind CSS.",
        "Showcased various pages and features of Earth Link Group.",
        "Ensured seamless user experience across different devices.",
        "Focused on type safety and maintainability using Typescript.",
        "Emphasized responsiveness for both desktop and mobile users."
      ],
    },
  },
  {
    id: "umurava",
    companyName: "umurava",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Platform where people build real work experience by completing skills challenges and showcasing results.",
    websiteLink: "https://skillschallenges.umurava.africa",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Typescript"],
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-05-31"),
    companyLogoImg: "/experience/umurava/cover.svg",
    pagesInfoArr: [
      {
        title: "Umurava challenge platform",
        description:
          "Modern and responsive challenge platform showcasing different pages and features",
        imgArr: [
          "/experience/umurava/logo.webp",
          "/experience/umurava/blog_1.webp",
          "/experience/umurava/blog_2.webp",
          "/experience/umurava/blog_3.webp",
          "/experience/umurava/blog_4.webp",
          "/experience/umurava/blog_5.webp",
          "/experience/umurava/blog_6.webp",
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "The Umurava project is a skills challenges platform that I developed using Next.js and React. The platform is designed to help individuals build work experience through various skills challenges, providing a unique opportunity for users to enhance their skills and showcase their abilities.",
        "The platform emphasizes user engagement, with features such as challenge tracking, progress monitoring, and community interaction. The design is tailored to provide a user-friendly experience, with intuitive navigation and clear calls to action.",
      ],
      bullets: [
        "Implemented the backend architecture and core functionality to ensure a seamless user experience.",
        "Developed the platform using Next.js and React, combining server-side rendering with dynamic frontend capabilities.",
        "Built a modern and responsive UI for optimal usability across devices",
        "Utilized MongoDB for efficient and scalable data storage and management",
        "Focused on empowering users to build work experience through structured skills challenges",
      ],
    },
  },
  {
    id: "Alight",
    companyName: "Alight",
    type: "Personal Project",
    category: ["Full Stack", "UI/UX"],
    shortDescription:
      "Recruitment platform where applicants submit profiles and the Alight HR team reviews and selects candidates.",
    githubLink: "https://github.com/lcdamy/frontend_alight_challenge",
    techStack: ["Next.js", "React", "Node.js", "Typescript", "MYSQL"],
    startDate: new Date("2025-07-01"),
    endDate: new Date("2022-07-31"),
    companyLogoImg: "/experience/alight/cover.svg",
    pagesInfoArr: [
      {
        title: "Alight HR Management System",
        description: "A comprehensive HR management system for application tracking, employee management, and more.",
        imgArr: [
          "/experience/alight/logo.webp",
          "/experience/alight/app_1.webp",
          "/experience/alight/app_2.webp",
          "/experience/alight/app_3.webp",
          "/experience/alight/app_4.webp"
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "The Light HR System is a streamlined recruitment platform designed to support the Alight HR team in managing candidate applications efficiently. It enables applicants to submit their profiles and allows HR managers to review, filter, and select the most suitable candidates—all within a centralized and user-friendly interface.",
      ],
      bullets: [
        "Designed and developed the entire system independently, handling both frontend and backend architecture",
        "Built a scalable and secure backend using NestJS, implementing APIs for candidate management and application workflows",
        "Developed a responsive and intuitive user interface with Next.js, ensuring smooth navigation for both applicants and HR managers",
        "Utilized PostgreSQL for structured and reliable data storage, managing candidate records and recruitment statuses",
        "Delivered a complete solution tailored to the HR team's needs, streamlining the recruitment process and improving operational efficiency"
      ],
    },
  },
  {
    id: "qt",
    companyName: "QT Global Software LTD",
    type: "Personal Project",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "URL shortener with Google sign-in, where users create short links, manage them and track click analytics.",
    websiteLink: "https://qt-challenge-frontend.vercel.app",
    githubLink: "https://github.com/lcdamy/qt_challenge_frontend",
    techStack: ["React", "Tailwind CSS", "Google Auth"],
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-02-15"),
    companyLogoImg: "/experience/qt/cover.svg",
    pagesInfoArr: [
      {
        title: "Shortened URL Service",
        description:
          "A modern and responsive shortened URL service with user authentication, link management, and analytics.",
        imgArr: [
          "/experience/qt/logo.webp",
          "/experience/qt/app_1.webp"
        ],
      },

    ],
    descriptionDetails: {
      paragraphs: [
        "The QT Global Software project is a shortened URL service that I developed using React and Tailwind CSS. The platform allows users to create shortened links, manage their links, and view analytics related to link usage.",
      ],
      bullets: [
        "Developed a shortened URL service using React and Tailwind CSS.",
        "Implemented user authentication with Google Sign-In for secure access.",
        "Designed a user-friendly interface for creating and managing shortened links.",
        "Emphasized usability with intuitive navigation and clear calls to action.",
        "Ensured responsive design for seamless use across devices.",
        "Utilized Tailwind CSS for rapid styling and consistent design language.",
        "Focused on providing analytics related to link usage for users."
      ],
    },
  },
  {
    id: "remwaste",
    companyName: "REM WASTE",
    type: "Personal Project",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Redesigned website for REM Waste that explains different waste products and how each type is recycled.",
    websiteLink: "https://remwaste-challenge.netlify.app",
    githubLink: "https://github.com/lcdamy/REMWASTE-CHALLENGE",
    techStack: ["HTML 5", "CSS 3", "React", "Tailwind CSS"],
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-06-15"),
    companyLogoImg: "/experience/remwaste/cover.svg",
    pagesInfoArr: [
      {
        title: "Rem Waste new refined website",
        description: "Developed a user-friendly waste products for recycling website that allows users to easily navigate and find information about different types of waste products and their recycling processes.",
        imgArr: [
          "/experience/remwaste/logo.webp",
          "/experience/remwaste/app_1.webp",
          "/experience/remwaste/app_2.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The REM WASTE project is a user-friendly e-commerce website designed to provide information about waste products.",
      ],
      bullets: [
        "Developed a user-friendly website for waste products and recycling information.",
        "Implemented responsive design using HTML5, CSS3, React, and Tailwind CSS.",
        "Ensured seamless user experience with intuitive navigation and clear calls to action.",
        "Focused on providing detailed information about different types of waste products.",
        "Utilized Tailwind CSS for rapid styling and consistent design language.",
        "Designed multiple pages to highlight various recycling processes.",
        "Collaborated with the team to deliver a high-quality product.",
      ],
    },
  },
  {
    id: "smart",
    companyName: "Muula",
    type: "Personal Project",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Web app where users submit data about their skills and get instant AI-generated feedback on their strengths.",
    websiteLink: "https://smart-skill-profiler.netlify.app",
    githubLink: "https://github.com/lcdamy/Smart-Skill-Profiler-Challenge",
    techStack: ["React", "Tailwind CSS", "Typescript"],
    startDate: new Date("2025-07-01"),
    endDate: new Date("2025-07-15"),
    companyLogoImg: "/experience/smart/cover.svg",
    pagesInfoArr: [
      {
        title: "Smart Skill Profiler",
        description: "Submit your structured data and receive intelligent, instant feedback generated by advanced AI models. From form to feedback, instantly harness AI to turn your data into action",
        imgArr: [
          "/experience/smart/logo.webp",
          "/experience/smart/app_1.webp",
          "/experience/smart/app_2.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Smart Skill Profiler project is a web application designed to help users identify their strengths and unlock new opportunities. I developed this project using React, Tailwind CSS, and Typescript."
      ],
      bullets: [
        "Developed a web application to help users identify their strengths and unlock new opportunities.",
        "Implemented responsive design using React, Tailwind CSS, and Typescript.",
        "Ensured seamless user experience with intuitive navigation and clear calls to action.",
        "Focused on guiding users through the skill profiling process.",
        "Utilized Tailwind CSS for rapid styling and consistent design language.",
        "Designed multiple pages to enhance user engagement and understanding.",
        "Collaborated with the team to deliver a high-quality product.",
      ],
    },
  },
  {
    id: "isco",
    companyName: "ISCO",
    type: "Personal Project",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Job board that helps job seekers find and apply for jobs matching their skills and interests.",
    websiteLink: "https://frontend-job-board-system.netlify.app",
    githubLink: "https://github.com/lcdamy/frontend_Job_Board_System",
    techStack: ["React", "Tailwind CSS", "Typescript"],
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-08-15"),
    companyLogoImg: "/experience/isco/cover.svg",
    pagesInfoArr: [
      {
        title: "isco Job Board",
        description: "A platform for job seekers to find and apply for jobs that match their skills and interests.",
        imgArr: [
          "/experience/isco/logo.webp",
          "/experience/isco/app_1.webp",
          "/experience/isco/app_2.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The isco Job Board project is a web application designed to help job seekers find and apply for jobs that match their skills and interests. I developed this project using React, Tailwind CSS, and Typescript."
      ],
      bullets: [
        "Developed a web application to help job seekers find and apply for jobs that match their skills and interests.",
        "Implemented responsive design using React, Tailwind CSS, and Typescript.",
        "Ensured seamless user experience with intuitive navigation and clear calls to action.",
        "Focused on providing detailed job listings and application processes.",
        "Utilized Tailwind CSS for rapid styling and consistent design language.",
        "Designed multiple pages to enhance user engagement and understanding.",
        "Collaborated with the team to deliver a high-quality product.",
      ],
    },
  },
  {
    id: "innovate",
    companyName: "TechClick",
    type: "Professional",
    category: ["Frontend", "UI/UX"],
    shortDescription:
      "Platform that connects local and international investors with Rwanda's most promising innovations.",
    websiteLink: "https://innovate.uat2.techclick.rw/en",
    techStack: ["React", "Tailwind CSS", "Typescript"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-09-01"),
    companyLogoImg: "/experience/innovate/cover.svg",
    pagesInfoArr: [
      {
        title: "Innovate Platform",
        description: "Screenshots showcasing the Innovate platform's web interface.",
        imgArr: [
          "/experience/innovate/logo.webp",
          "/experience/innovate/app_1.webp",
          "/experience/innovate/app_2.webp",
          "/experience/innovate/app_3.webp",
          "/experience/innovate/app_4.webp",
          "/experience/innovate/app_5.webp",
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "Innovate is a platform that connects local and international investors with Rwanda's most promising innovations. It aims to facilitate funding opportunities and support the growth of innovative projects in the region.",
        "Innovate provides a comprehensive ecosystem for startups and entrepreneurs to showcase their ideas, connect with potential investors, and access resources to help them succeed."
      ],
      bullets: [
        "Connected local and international investors with promising Rwandan innovations.",
        "Facilitated funding opportunities for startups and entrepreneurs.",
        "Showcased innovative projects through a user-friendly platform.",
        "Provided resources and support for project growth and development.",
      ],
    },
  },

];

export const featuredExperiences = Experiences.slice(0, 3);
