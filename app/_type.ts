export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactMethod {
  type: "telegram" | "whatsapp";
  label: string;
  value: string;
  icon: string;
}

export interface WorkExample {
  title: string;
  description: string;
  imageUrl: string;
}

export interface PortfolioData {
  name: string;
  jobTitle: string;
  profileImage: string;
  socialLinks: SocialLink[];
  contactMethods: ContactMethod[];
  jobs: {
    title: string;
    company: string;
    duration: string;
  }[];
}
