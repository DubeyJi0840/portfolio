export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Mobile' | 'Web' | 'Full-Stack' | 'API';
  description: string;
  architecture: string[];
  metrics: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  employmentType: string;
  period: string;
  location: string;
  highlights: string[];
  techStack: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  badge?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  location: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; highlight?: boolean }[];
}
