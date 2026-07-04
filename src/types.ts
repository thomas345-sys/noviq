export interface Service {
  id: string;
  title: string;
  category: string;
  image: string;
  shortDesc: string;
  deliveryTime: string;
  overview: string;
  features: string[];
  benefits: string[];
  software: string[];
  timeline: string;
  fileFormats: string[];
  technologies: string[];
  pricing: string;
}

export interface Project {
  id: string;
  title: string;
  category: string; // websites, mobile, architecture, furniture, automotive, mechanical, branding, academic
  thumbnail: string;
  images: string[];
  overview: string;
  clientIndustry: string;
  technologies: string[];
  timeline: string;
  deliverables: string[];
  hasBeforeAfter?: boolean;
  beforeImg?: string;
  afterImg?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  flag: string; // Country flag Emoji or short text
  countryName: string;
  rating: number;
  servicePurchased: string;
  review: string;
  fullReview: string;
  projectSpecs?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface FeatureCard {
  iconName: string;
  title: string;
  description: string;
}
