import { Icons } from "@/components/common/icons";

export type SkillCategory =
  | "Languages & Frameworks"
  | "Architecture & Integration"
  | "Databases & Messaging"
  | "DevOps & Cloud"
  | "Leadership & Delivery";

export const skillCategories: SkillCategory[] = [
  "Languages & Frameworks",
  "Architecture & Integration",
  "Databases & Messaging",
  "DevOps & Cloud",
  "Leadership & Delivery",
];

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
  category: SkillCategory;
}

export const skillsUnsorted: skillsInterface[] = [
  // Languages & Frameworks
  {
    name: "Java",
    description:
      "Build robust, high-performance backend services and biometric processing pipelines.",
    rating: 4,
    icon: Icons.java,
    category: "Languages & Frameworks",
  },
  {
    name: "Spring Boot",
    description:
      "Develop production-ready microservices, REST APIs and secure API gateways.",
    rating: 4,
    icon: Icons.springboot,
    category: "Languages & Frameworks",
  },
  {
    name: "Typescript",
    description:
      "Write type-safe JavaScript for maintainable frontends and backends.",
    rating: 5,
    icon: Icons.typescript,
    category: "Languages & Frameworks",
  },
  {
    name: "Javascript",
    description:
      "Build interactive web applications and Node.js services.",
    rating: 5,
    icon: Icons.javascript,
    category: "Languages & Frameworks",
  },
  {
    name: "PHP",
    description: "Build server-rendered web applications and e-commerce sites.",
    rating: 3,
    icon: Icons.php,
    category: "Languages & Frameworks",
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
    category: "Languages & Frameworks",
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
    category: "Languages & Frameworks",
  },
  {
    name: "Angular",
    description:
      "Build structured single-page applications with components and dependency injection.",
    rating: 3,
    icon: Icons.angular,
    category: "Languages & Frameworks",
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server to build fast, scalable network services.",
    rating: 5,
    icon: Icons.nodejs,
    category: "Languages & Frameworks",
  },
  {
    name: "Nest.js",
    description:
      "Create scalable and modular applications with a progressive Node.js framework.",
    rating: 4,
    icon: Icons.nestjs,
    category: "Languages & Frameworks",
  },
  {
    name: "express.js",
    description: "Build lightweight REST APIs and web servers on Node.js.",
    rating: 5,
    icon: Icons.express,
    category: "Languages & Frameworks",
  },
  {
    name: "Tailwind CSS",
    description: "Style responsive interfaces quickly with utility-first CSS.",
    rating: 5,
    icon: Icons.tailwindcss,
    category: "Languages & Frameworks",
  },
  {
    name: "Redux",
    description: "Manage predictable application state in React apps.",
    rating: 4,
    icon: Icons.redux,
    category: "Languages & Frameworks",
  },
  {
    name: "Material UI",
    description: "Build consistent interfaces with a ready-made React component library.",
    rating: 4,
    icon: Icons.mui,
    category: "Languages & Frameworks",
  },
  {
    name: "HTML 5",
    description: "Structure accessible, semantic web pages.",
    rating: 4,
    icon: Icons.html5,
    category: "Languages & Frameworks",
  },
  {
    name: "CSS 3",
    description: "Lay out and style responsive web pages.",
    rating: 4,
    icon: Icons.css3,
    category: "Languages & Frameworks",
  },
  {
    name: "Bootstrap",
    description: "Prototype responsive layouts with a component-based CSS framework.",
    rating: 2,
    icon: Icons.bootstrap,
    category: "Languages & Frameworks",
  },

  // Architecture & Integration
  {
    name: "REST APIs",
    description: "Design and build well-structured, versioned HTTP APIs.",
    rating: 5,
    icon: Icons.api,
    category: "Architecture & Integration",
  },
  {
    name: "OAuth 2.0 / OIDC",
    description:
      "Secure applications and APIs with OAuth 2.0 flows, OpenID Connect and resource servers.",
    rating: 4,
    icon: Icons.oauth,
    category: "Architecture & Integration",
  },
  {
    name: "JWT & Authorization",
    description:
      "Implement token-based authentication, client assertions and role-based authorization.",
    rating: 4,
    icon: Icons.jwt,
    category: "Architecture & Integration",
  },
  {
    name: "ABIS / Biometrics",
    description:
      "Build Automated Biometric Identification System services for face, fingerprint and iris templates.",
    rating: 4,
    icon: Icons.biometrics,
    category: "Architecture & Integration",
  },
  {
    name: "Middleware",
    description:
      "Build integration layers that connect systems reliably, with tracing and error handling.",
    rating: 4,
    icon: Icons.middleware,
    category: "Architecture & Integration",
  },
  {
    name: "Health Interoperability",
    description:
      "Integrate health information systems such as OpenMRS, DHIS2 and OpenHIM.",
    rating: 4,
    icon: Icons.interoperability,
    category: "Architecture & Integration",
  },
  {
    name: "Event-driven Integration",
    description:
      "Connect services asynchronously with message brokers and event streams.",
    rating: 4,
    icon: Icons.kafka,
    category: "Architecture & Integration",
  },
  {
    name: "OpenAPI / Swagger",
    description: "Document and share API contracts with OpenAPI specifications.",
    rating: 4,
    icon: Icons.swagger,
    category: "Architecture & Integration",
  },
  {
    name: "Socket.io",
    description: "Add real-time, bidirectional communication to web apps.",
    rating: 3,
    icon: Icons.socketio,
    category: "Architecture & Integration",
  },

  // Databases & Messaging
  {
    name: "PostgreSQL",
    description: "Model and query relational data with migrations and strong consistency.",
    rating: 4,
    icon: Icons.postgresql,
    category: "Databases & Messaging",
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
    category: "Databases & Messaging",
  },
  {
    name: "MongoDB",
    description: "Store and query flexible document data at scale.",
    rating: 5,
    icon: Icons.mongodb,
    category: "Databases & Messaging",
  },
  {
    name: "SQLite",
    description: "Embed lightweight relational storage in desktop and mobile apps.",
    rating: 3,
    icon: Icons.sqlite,
    category: "Databases & Messaging",
  },
  {
    name: "Redis",
    description: "Speed up applications with caching, sessions and pub/sub.",
    rating: 3,
    icon: Icons.redis,
    category: "Databases & Messaging",
  },
  {
    name: "RabbitMQ",
    description: "Decouple services with reliable message queues.",
    rating: 3,
    icon: Icons.rabbitmq,
    category: "Databases & Messaging",
  },
  {
    name: "Kafka",
    description:
      "Design event-driven integrations with reliable, traceable asynchronous messaging.",
    rating: 3,
    icon: Icons.kafka,
    category: "Databases & Messaging",
  },

  // DevOps & Cloud
  {
    name: "Docker",
    description: "Package and run services consistently with containers and Compose.",
    rating: 4,
    icon: Icons.docker,
    category: "DevOps & Cloud",
  },
  {
    name: "Kubernetes",
    description: "Deploy, scale and orchestrate containerized services.",
    rating: 3,
    icon: Icons.kubernetes,
    category: "DevOps & Cloud",
  },
  {
    name: "Jenkins",
    description: "Automate build, test and deployment pipelines.",
    rating: 4,
    icon: Icons.jenkins,
    category: "DevOps & Cloud",
  },
  {
    name: "GitHub Actions",
    description: "Run CI/CD workflows directly from GitHub repositories.",
    rating: 4,
    icon: Icons.githubactions,
    category: "DevOps & Cloud",
  },
  {
    name: "GitLab CI/CD",
    description: "Build, test and ship code with GitLab pipelines and container registries.",
    rating: 4,
    icon: Icons.gitlab,
    category: "DevOps & Cloud",
  },
  {
    name: "Terraform",
    description: "Provision cloud infrastructure as code.",
    rating: 3,
    icon: Icons.terraform,
    category: "DevOps & Cloud",
  },
  {
    name: "SonarQube",
    description: "Enforce code quality gates with automated static analysis.",
    rating: 4,
    icon: Icons.sonarqube,
    category: "DevOps & Cloud",
  },
  {
    name: "Observability",
    description:
      "Monitor services with Grafana dashboards, centralized logs and distributed tracing.",
    rating: 3,
    icon: Icons.grafana,
    category: "DevOps & Cloud",
  },
  {
    name: "AWS",
    description: "Host and scale applications on Amazon Web Services.",
    rating: 3,
    icon: Icons.amazonaws,
    category: "DevOps & Cloud",
  },
  {
    name: "Netlify",
    description:
      "Deploy and host modern web apps with continuous deployment and serverless functions.",
    rating: 4,
    icon: Icons.netlify,
    category: "DevOps & Cloud",
  },

  // Leadership & Delivery
  {
    name: "Team Leadership",
    description: "Lead and mentor developers, run code reviews and coordinate QA.",
    rating: 5,
    icon: Icons.team,
    category: "Leadership & Delivery",
  },
  {
    name: "Planning & Estimation",
    description: "Turn requirements into technical plans, estimates and delivery timelines.",
    rating: 5,
    icon: Icons.checklist,
    category: "Leadership & Delivery",
  },
  {
    name: "Stakeholder Communication",
    description:
      "Analyze requirements, write technical proposals and work directly with clients.",
    rating: 4,
    icon: Icons.messages,
    category: "Leadership & Delivery",
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const skillsByCategory = skillCategories.map((category) => ({
  category,
  skills: skills.filter((skill) => skill.category === category),
}));

// Shown on the home page, in this order.
const featuredSkillNames = [
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
  "Node.js",
  "Docker",
];

export const featuredSkills = featuredSkillNames
  .map((name) => skills.find((skill) => skill.name === name))
  .filter((skill): skill is skillsInterface => Boolean(skill));
