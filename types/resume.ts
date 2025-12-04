export type TemplateType = "harvard" | "modern";

export type SectionName = "education" | "experience" | "projects" | "skills";

export interface SocialLink {
  id: string; // Added ID for list rendering
  platform: string;
  url: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  technologies: string;
  link?: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string; // Comma separated string
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
  location: string;
  summary: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
}
