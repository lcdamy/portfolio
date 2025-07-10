import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
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
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "datatocare",
    companyName: "Savics SRL",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Connect your Labs. Connect your Data. Connect your Care.",
    websiteLink: "https://datatocare.org",
    techStack: ["Angular", "Javascript", "HTML 5", "CSS 3"],
    startDate: new Date("2019-12-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/experience/datatocare/logo.png",
    pagesInfoArr: [
      {
        title: "Data to Care screen shoots",
        description: "DataToCare is a fully customizable open-source suite of integrated applications that connects national laboratory networks by collecting diagnostic and patient data at the facility level, displaying real-time information on a dashboard to facilitate decision-making at the central level, and notifying test results to medical teams and patients.",
        imgArr: [
          "/experience/datatocare/card_1.png",
          "/experience/datatocare/card_2.png",
          "/experience/datatocare/card_3.png",
          "/experience/datatocare/card_4.png",
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "The DataToCare project is a comprehensive web application that I developed using Angular. The platform is designed to connect national laboratory networks by collecting diagnostic and patient data at the facility level, displaying real-time information on a dashboard to facilitate decision-making at the central level, and notifying test results to medical teams and patients.",
        "I was responsible for implementing the frontend design and functionality, ensuring a seamless user experience. The application includes multiple pages, each designed to highlight different features and functionalities of the DataToCare platform.",
        "Throughout the development process, I utilized Angular for building dynamic and responsive user interfaces. The use of HTML5 and CSS3 allowed for the creation of visually appealing and user-friendly components.",
        "The platform emphasizes data connectivity and real-time updates, ensuring that users can access critical information efficiently. The design is tailored to provide a user-friendly experience, with intuitive navigation and clear calls to action.",
      ],
      bullets: [
        "Developed a comprehensive web application using Angular.",
        "Implemented a modern and responsive user interface with HTML5 and CSS3.",
        "Focused on connecting national laboratory networks for data collection.",
        "Ensured seamless user experience with intuitive navigation.",
        "Emphasized real-time data updates and notifications for medical teams and patients.",
        "Utilized Angular for building dynamic and responsive components.",
        "Designed multiple pages to highlight different features of the platform.",
        "Collaborated with the team to deliver a high-quality product.",
      ],
    },
  },
  {
    id: "rci",
    companyName: "TechClick Rwanda",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Connecting experts to impactful opportunities in gender equality, sustainable development, and more. Empowering professionals to expand their reach and drive progress.",
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
    companyLogoImg: "/experience/rci/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing different pages and features",
        imgArr: [
          "/experience/rci/landing_1.png",
          "/experience/rci/landing_3.png",
          "/experience/rci/landing_5.png",
          "/experience/rci/landing_6.png",
          "/experience/rci/landing_2.png",
          "/experience/rci/landing_4.png",
        ],
      },
      {
        title: "Clients Dashboard",
        description:
          "Comprehensive client portal with project tracking, document management, and communication tools",
        imgArr: [
          "/experience/rci/cli_dashboard_1.png",
          "/experience/rci/cli_dashboard_2.png",
          "/experience/rci/cli_dashboard_3.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I was responsible for developing the backend of the project, where I utilized Express.js and PostgreSQL to build robust and scalable APIs.",
        "I also contributed to the frontend, collaborating with the team to implement features and ensure a seamless user experience.",
        "Throughout the project, we relied on Figma designs to guide our development process and maintain consistency in the user interface.",
      ],
      bullets: [
        "Built backend APIs using Express.js and PostgreSQL.",
        "Assisted in frontend development and feature implementation.",
        "Followed Figma designs to ensure UI consistency and quality.",
        "Collaborated with a team of developers to deliver a high-quality product.",
        "Ensured the application was responsive and user-friendly across devices.",
        "Implemented best practices for code quality and maintainability.",
        "Participated in code reviews and provided constructive feedback to team members.",
        "Utilized version control (Git) for efficient collaboration and code management.",
      ],
    },
  },
  {
    id: "adminpanel",
    companyName: "Fixa LTD",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "HR Management System for Casual worker Management, Attendance, Payroll, and more.",
    websiteLink: "https://adminpanel.fixarwanda.com",
    techStack: ["React", "Node.js", "MYSQL", "Typescript", "Tailwind CSS"],
    startDate: new Date("2021-08-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/experience/fixa/logo.png",
    pagesInfoArr: [
      {
        title: "AAdmin Panel Screenshots",
        description: "Fixa Admin Panel is a comprehensive HR management system designed to streamline casual worker management, attendance tracking, payroll processing, and more.",
        imgArr: [
          "/experience/fixa/app_1.png",
          "/experience/fixa/app_2.png",
          "/experience/fixa/app_3.png",
          "/experience/fixa/app_4.png",
          "/experience/fixa/app_5.png",
          "/experience/fixa/app_6.png",
          "/experience/fixa/app_7.png",
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "The Fixa Admin Panel is a comprehensive HR management system that I developed to streamline the management of casual workers. The platform provides features for attendance tracking, payroll processing, and various HR functionalities.",
        "I was responsible for implementing the frontend design and functionality using React, ensuring a user-friendly interface that allows administrators to efficiently manage worker data and processes.",
        "The application utilizes Node.js for the backend, with MySQL as the database for storing worker information and attendance records. The use of Typescript enhances code quality and maintainability.",
        "The design emphasizes usability, with intuitive navigation and clear calls to action, making it easy for administrators to access the features they need quickly.",
      ],
      bullets: [
        "Developed a comprehensive HR management system for casual worker management.",
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
      "EarthLink Business is your strategic partner in international business expansion. We provide comprehensive solutions to help companies overcome cross-border challenges, navigate complex markets, and unlock global growth opportunities.",
    websiteLink:
      "https://earthlinkgroup.com",
    techStack: ["Next.js", "Typescript", "Tailwind CSS"],
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-07-15"),
    companyLogoImg: "/experience/earthlinkgroup/logo.png",
    pagesInfoArr: [
      {
        title: "Different Pages",
        description:
          "Modern and responsive landing page showcasing different pages and features",
        imgArr: [
          "/experience/earthlinkgroup/app_1.png",
          "/experience/earthlinkgroup/app_2.png",
          "/experience/earthlinkgroup/app_3.png",
          "/experience/earthlinkgroup/app_4.png",
          "/experience/earthlinkgroup/app_5.png",
          "/experience/earthlinkgroup/app_6.png",
          "/experience/earthlinkgroup/app_7.png",
          "/experience/earthlinkgroup/app_8.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `The Earth Link Group project is a comprehensive web application that I developed using Next.js and Typescript. The project focuses on providing a modern and responsive user interface, showcasing various pages and features.`,
        `I was responsible for implementing the frontend design and functionality, ensuring a seamless user experience across different devices. The application includes multiple pages, each designed to highlight specific features and services offered by Earth Link Group.`,
        `Throughout the development process, I utilized Tailwind CSS to create a visually appealing and consistent design language. The use of Typescript allowed for better type safety and maintainability of the codebase.`,
        `The project emphasizes responsiveness, ensuring that users can access and navigate the application easily on both desktop and mobile devices. The design is tailored to provide a user-friendly experience, with intuitive navigation and clear calls to action.`,
      ],
      bullets: [
        "Developed a comprehensive web application using Next.js and Typescript.",
        "Implemented a modern and responsive user interface with Tailwind CSS.",
        "Showcased various pages and features of Earth Link Group.",
        "Ensured seamless user experience across different devices.",
        "Focused on type safety and maintainability using Typescript.",
        "Designed intuitive navigation and clear calls to action.",
        "Emphasized responsiveness for both desktop and mobile users.",
        "Collaborated with the team to deliver a high-quality product.",
      ],
    },
  },
  {
    id: "umurava",
    companyName: "umurava",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Build Work Experience through Skills Challenges Platform",
    websiteLink: "https://skillschallenges.umurava.africa",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Typescript"],
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-05-31"),
    companyLogoImg: "/experience/umurava/logo.png",
    pagesInfoArr: [
      {
        title: "Umurava challenge platform",
        description:
          "Modern and responsive challenge platform showcasing different pages and features",
        imgArr: [
          "/experience/umurava/blog_1.png",
          "/experience/umurava/blog_2.png",
          "/experience/umurava/blog_3.png",
          "/experience/umurava/blog_4.png",
          "/experience/umurava/blog_5.png",
          "/experience/umurava/blog_6.png",
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "The Umurava project is a skills challenges platform that I developed using Next.js and React. The platform is designed to help individuals build work experience through various skills challenges, providing a unique opportunity for users to enhance their skills and showcase their abilities.",
        "I was responsible for implementing the frontend design and functionality, ensuring a seamless user experience. The application includes multiple pages, each designed to highlight different skills challenges and provide users with the tools they need to participate effectively.",
        "Throughout the development process, I utilized MongoDB for data storage and management, allowing for efficient handling of user data and challenge information. The use of Typescript ensured better type safety and maintainability of the codebase.",
        "The platform emphasizes user engagement, with features such as challenge tracking, progress monitoring, and community interaction. The design is tailored to provide a user-friendly experience, with intuitive navigation and clear calls to action.",
      ],
      bullets: [
        "Developed a skills challenges platform using Next.js and React.",
        "Implemented a modern and responsive user interface.",
        "Focused on helping individuals build work experience through skills challenges.",
        "Ensured seamless user experience with intuitive navigation.",
        "Utilized MongoDB for efficient data storage and management.",
        "Emphasized user engagement with features like challenge tracking and progress monitoring.",
        "Maintained code quality and type safety using Typescript.",
        "Collaborated with the team to deliver a high-quality product.",
      ],
    },
  },
  {
    id: "Alight",
    companyName: "Alight",
    type: "Personal Project",
    category: ["Full Stack", "UI/UX"],
    shortDescription:
      "HR Management System for application tracking, employee management, and more.",
    githubLink: "https://github.com/lcdamy/frontend_alight_challenge",
    techStack: ["Next.js", "React", "Node.js", "Typescript", "MYSQL"],
    startDate: new Date("2025-07-01"),
    endDate: new Date("2022-07-31"),
    companyLogoImg: "/experience/alight/logo.png",
    pagesInfoArr: [
      {
        title: "Alight HR Management System",
        description: "A comprehensive HR management system for application tracking, employee management, and more.",
        imgArr: [
          "/experience/alight/app_1.png",
          "/experience/alight/app_2.png",
          "/experience/alight/app_3.png",
          "/experience/alight/app_4.png"
        ],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
        "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
        "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
        "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
      ],
      bullets: [
        "Implemented secure user authentication and authorization using Firebase",
        "Designed and developed an intuitive product browsing and shopping cart system",
        "Created a comprehensive admin panel for product and order management",
        "Integrated real-time data synchronization using Firebase Database",
        "Implemented state management using Redux for optimal performance",
        "Designed responsive UI components following mobile-first principles",
        "Incorporated smooth animations and transitions for enhanced user experience",
      ],
    },
  },
  {
    id: "qt",
    companyName: "QT Global Software LTD",
    type: "Personal Project",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Shortened URL service with user authentication, link management, and analytics.",
    websiteLink: "https://qt-challenge-frontend.vercel.app",
    githubLink: "https://github.com/lcdamy/qt_challenge_frontend",
    techStack: ["React", "Tailwind CSS", "Google Auth"],
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-02-15"),
    companyLogoImg: "/experience/qt/logo.png",
    pagesInfoArr: [
      {
        title: "Shortened URL Service",
        description:
          "A modern and responsive shortened URL service with user authentication, link management, and analytics.",
        imgArr: [
          "/experience/qt/app_1.png"
        ],
      },

    ],
    descriptionDetails: {
      paragraphs: [
        "The QT Global Software project is a shortened URL service that I developed using React and Tailwind CSS. The platform allows users to create shortened links, manage their links, and view analytics related to link usage.",
        "I was responsible for implementing the frontend design and functionality, ensuring a user-friendly interface that allows users to easily create and manage their shortened links.",
        "The application includes user authentication using Google Sign-In, providing secure access to sensitive routes and features. The design emphasizes usability, with intuitive navigation and clear calls to action.",
        "Throughout the development process, I focused on creating a responsive design that works seamlessly across different devices. The use of Tailwind CSS allowed for rapid styling and consistent design language.",
      ],
      bullets: [
        "Developed a shortened URL service using React and Tailwind CSS.",
        "Implemented user authentication with Google Sign-In for secure access.",
        "Designed a user-friendly interface for creating and managing shortened links.",
        "Emphasized usability with intuitive navigation and clear calls to action.",
        "Ensured responsive design for seamless use across devices.",
        "Utilized Tailwind CSS for rapid styling and consistent design language.",
        "Focused on providing analytics related to link usage for users.",
        "Collaborated with the team to deliver a high-quality product.",
      ],
    },
  },
  {
    id: "remwaste",
    companyName: "REM WASTE",
    type: "Personal Project",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed a user-friendly waste products for recycling",
    websiteLink: "https://remwaste-challenge.netlify.app",
    githubLink: "https://github.com/lcdamy/REMWASTE-CHALLENGE",
    techStack: ["HTML 5", "CSS 3", "React", "Tailwind CSS"],
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-06-15"),
    companyLogoImg: "/experience/remwaste/logo.png",
    pagesInfoArr: [
      {
        title: "Rem Waste new refined website",
        description: "Developed a user-friendly waste products for recycling website that allows users to easily navigate and find information about different types of waste products and their recycling processes.",
        imgArr: [
          "/experience/remwaste/app_1.png",
          "/experience/remwaste/app_2.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The REM WASTE project is a user-friendly website designed to provide information about waste products and their recycling processes. I developed this project using HTML5, CSS3, React, and Tailwind CSS.",
        "I was responsible for implementing the frontend design and functionality, ensuring a seamless user experience. The application includes multiple pages, each designed to highlight different types of waste products and their recycling methods.",
        "Throughout the development process, I focused on creating a responsive design that works seamlessly across different devices. The use of Tailwind CSS allowed for rapid styling and consistent design language.",
        "The design emphasizes usability, with intuitive navigation and clear calls to action, making it easy for users to find the information they need about waste recycling.",
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
      "Know Your Strengths, Unlock New Opportunities",
    websiteLink: "https://smart-skill-profiler.netlify.app",
    githubLink: "https://github.com/lcdamy/Smart-Skill-Profiler-Challenge",
    techStack: ["React", "Tailwind CSS", "Typescript"],
    startDate: new Date("2025-07-01"),
    endDate: new Date("2025-07-15"),
    companyLogoImg: "/experience/smart/logo.png",
    pagesInfoArr: [
      {
        title: "Smart Skill Profiler",
        description: "Submit your structured data and receive intelligent, instant feedback generated by advanced AI models. From form to feedback, instantly harness AI to turn your data intoaction",
        imgArr: [
          "/experience/smart/app_1.png",
          "/experience/smart/app_2.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Smart Skill Profiler project is a web application designed to help users identify their strengths and unlock new opportunities. I developed this project using React, Tailwind CSS, and Typescript.",
        "I was responsible for implementing the frontend design and functionality, ensuring a seamless user experience. The application includes multiple pages, each designed to guide users through the process of profiling their skills and receiving feedback.",
        "Throughout the development process, I focused on creating a responsive design that works seamlessly across different devices. The use of Tailwind CSS allowed for rapid styling and consistent design language.",
        "The design emphasizes usability, with intuitive navigation and clear calls to action, making it easy for users to understand their strengths and explore new opportunities.",
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
];

export const featuredExperiences = Experiences.slice(0, 3);
