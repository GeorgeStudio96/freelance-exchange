export function calculate(a: number, b: number): number {
  return a + b;
}
calculate(10, 11);

export interface User {
  id: number;
  name: string;
  age: number;
  isFreelance: boolean;
}

export interface ButtonLinkSetting {
  link: string;
  textLink: string;
}

export interface Project {
  key: number;
  author: string;
  cost: number;
  projectDescription: string;
  projectPoster: string;
  linkToPage: string;
  projectId?: number;
  slug: string;
}
