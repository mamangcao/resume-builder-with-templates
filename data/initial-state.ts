import { ResumeData } from "@/types/resume";
import { generateId } from "@/lib/utils";

export const INITIAL_DATA: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    website: "",
    location: "",
    summary: "",
  },
  education: [],
  experience: [],
  projects: [],
  skills: [],
};

export const SAMPLE_DATA: ResumeData = {
  personalInfo: {
    fullName: "Khayri D. Xebec",
    email: "khayri@mamangcao.com",
    phone: "(555) 123-4567",
    linkedin: "linkedin.com/in/khayri",
    github: "github.com/khayri",
    website: "khayri.dev",
    location: "Lanao del Norte, Philippines",
    summary:
      "An enthusiastic Full-Stack Web Developer with hands-on experience building web applications. Passionate about improving my skills in both front-end and back-end development.",
  },
  education: [
    {
      id: generateId(),
      school: "Mindanao State University - Iligan Institute of Technology",
      degree: "BS in Information Technology",
      location: "Lanao del Norte, PH",
      startDate: "2018",
      endDate: "2022",
      gpa: "1.9",
    },
  ],
  experience: [
    {
      id: generateId(),
      company: "BlueWave Systems",
      position: "Frontend Engineer",
      location: "New York, NY",
      startDate: "2024",
      endDate: "Present",
      description:
        "Developed UI components for a large SaaS dashboard.\nOptimized rendering performance across multiple modules.",
    },
    {
      id: generateId(),
      company: "NovaCore Labs",
      position: "Backend Developer",
      location: "Remote",
      startDate: "2023",
      endDate: "2024",
      description:
        "Implemented microservices using Node.js.\nImproved API reliability and reduced server costs by 20%.",
    },
    {
      id: generateId(),
      company: "SkyBridge Technologies",
      position: "Full-Stack Engineer",
      location: "San Francisco, CA",
      startDate: "2022",
      endDate: "2023",
      description:
        "Built end-to-end features for an enterprise platform.\nIntegrated CI/CD pipelines and automated testing.",
    },
  ],
  projects: [
    {
      id: generateId(),
      name: "OpenSource UI Lib",
      technologies: "React, TypeScript, Tailwind",
      link: "github.com/khayri/ui-lib",
      description: "A lightweight, accessible component library...",
    },
    {
      id: generateId(),
      name: "Realtime Chat App",
      technologies: "Next.js, TypeScript, Socket.IO, Redis",
      link: "github.com/khayri/realtime-chat",
      description:
        "A scalable chat application with typing indicators, presence system, and message persistence.",
    },
    {
      id: generateId(),
      name: "DevOps Automation Scripts",
      technologies: "Python, Docker, Bash",
      link: "github.com/khayri/devops-scripts",
      description:
        "A collection of automation scripts for CI/CD pipelines, container builds, and deployment workflows.",
    },
    {
      id: generateId(),
      name: "Portfolio Generator",
      technologies: "React, MDX, Tailwind, Vite",
      link: "github.com/khayri/portfolio-gen",
      description:
        "A customizable developer portfolio generator supporting MDX pages and dynamic theming.",
    },
  ],
  skills: [
    {
      id: generateId(),
      name: "Languages",
      skills: "TypeScript, JavaScript (ES6+), Python, SQL",
    },
    {
      id: generateId(),
      name: "Frameworks & Libraries",
      skills: "React, Next.js, Node.js, Express, Django",
    },
    {
      id: generateId(),
      name: "Tools & Platforms",
      skills: "Git, Docker, AWS, CI/CD, Linux",
    },
  ],
};
