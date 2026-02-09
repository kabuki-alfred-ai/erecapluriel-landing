export interface Agency {
  id: string;
  name: string;
  city: string;
  x: number;
  y: number;
}

export interface Profile {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Expertise {
  id: string;
  title: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  location: string;
}