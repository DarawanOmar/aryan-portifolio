import { PortfolioData } from "./_type";

export const portfolioData: PortfolioData = {
  name: "Aryan Brhan",
  jobTitle: "Freelance |  Motion & Graphic Designer",
  profileImage: "/ara.jpg",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/alexthompson",
      icon: "linkedin",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/alexthompson",
      icon: "instagram",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/alexthompson",
      icon: "facebook",
    },

    {
      name: "Threads",
      url: "https://threads.net/@alexthompson",
      icon: "at-sign",
    },
  ],
  contactMethods: [
    {
      type: "telegram",
      label: "Telegram",
      value: "@alexthompson",
      icon: "send",
    },
    {
      type: "whatsapp",
      label: "WhatsApp",
      value: "alex@example.com",
      icon: "message-circle",
    },
  ],
  experience:
    "Passionate full-stack developer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud architecture. I love creating intuitive user experiences and solving complex technical challenges.",
  jobs: [
    {
      title: "Motion Designer",
      company: "Sulikim",
      duration: "2025-present",
    },
    {
      title: "Motion Designer  & Graphic Designer",
      company: "NRT TV",
      duration: "2022-2025",
    },
    {
      title: "Freelance Vedio Editor ",
      company: "NRT Arabic",
      duration: "2022-2025",
    },
  ],
};
