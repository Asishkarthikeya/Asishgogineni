export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
}

export interface Skill {
  name: string;
  description: string;
  category: 'ai' | 'dev' | 'cloud' | 'data' | 'soft';
  color: string;
  glow: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  logo?: string;
}

export interface Award {
  icon: string;
  title: string;
  source: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  github?: string;
  demo?: string;
  link?: string;
}

export interface Publication {
  title: string;
  journal: string;
  date: string;
  authors: string;
  link: string;
  image: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  monogram: string;
  roles: string[];
  bio: string;
  heroBio: string;
  email: string;
  cvLink: string;
  avatar: string;
  profilePhoto: string;
  socialLinks: SocialLink[];
  stats: Stat[];
  googleScholar: string;
}
