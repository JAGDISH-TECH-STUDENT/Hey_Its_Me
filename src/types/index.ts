export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    education: string;
    projects: string;
    blog: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    greeting: string;
    prefix: string;
    roles: string[];
    viewWork: string;
    contactMe: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    techStack: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    phone: string;
    location: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  projects: {
    title: string;
    launchApp: string;
    viewLive: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    tools: string;
  };
  blog: {
    title: string;
    readMore: string;
  };
  experience: {
    title: string;
  };
  education: {
    title: string;
  };
  testimonials: {
    title: string;
  };
}
