export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[]; // level 0-100
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  stats: string; // e.g., "Top 1%", "2000+ Rating"
  url: string;
  icon: string; // Using Lucide icon names or generic identifiers
  color: string;
}

export interface RoadmapItem {
  id: number;
  title: string;
  status: 'completed' | 'pending' | 'upcoming';
  description: string;
  techStack: string[];
  date: string; // Completion date or ETA
  features: string[];
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export interface AboutStats {
  label: string;
  value: string;
  icon: string;
  detailTitle?: string;
  details?: {
    headers: string[];
    rows: string[][];
  };
}