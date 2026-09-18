export type PageId = 'home' | 'about' | 'projects' | 'experience' | 'skills' | 'contact';

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  highlights: string[];
  mockupType: 'gaming' | 'taskmanager' | 'portfolio';
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    description: string;
    icon: string;
  }[];
}

export interface Certification {
  number: string;
  title: string;
  institution: string;
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  coreResponsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  focus: string;
}

export interface NavItem {
  id: PageId;
  label: string;
}
