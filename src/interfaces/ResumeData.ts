export interface Skillset {
  title: string;
  proficiency: string;
}

export interface Skill {
  title: string;
}

export interface Experience {
  id: number;
  role: string;
  location: string;
  workStyle: string;
  jobType: string;
  responsibilities: string[];
  company: string;
}

export interface Education {
  title: string;
  university: string;
  branch: string;
  activities: string[];
  link: string;
}

export interface Certification {
  title: string;
  other: string;
  expiry: string;
  link: string;
}

export interface Publication {
  title: string;
  other: string;
  expiry: string;
  link: string;
}

export interface Volunteering {
  title: string;
  other: string;
  link: string;
}

export interface ContactDetails {
  address: string;
  email: string;
  phone: string;
  portfolioPage: string;
}

export interface Social {
  linkedIn: string;
  github: string;
}

export interface projectundertaken {
  tittle: string;
  info: string;
}

export interface ResumeData {
  name: string;
  oneLineDescription: string;
  skillset: Skillset[];
  softskills: Skill[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  publications: Publication[];
  contactDetails: ContactDetails;
  volunteering: Volunteering[];
  social: Social;
}
