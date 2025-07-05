// file: app/sitemap.ts
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // UPDATED: Added more comprehensive sitemap structure
  const baseUrl = "https://aryanbrhan.vercel.app";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly", // ADDED: How often the page changes
      priority: 1, // ADDED: Priority (0.0 to 1.0)
      images: [
        "https://aryanbrhan.vercel.app/og-image.png",
        "https://aryanbrhan.vercel.app/ara.jpg",
      ],
    },
    // ADD MORE PAGES: When you add more pages, add them here
    // Example:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/portfolio`,
    //   lastModified: currentDate,
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/contact`,
    //   lastModified: currentDate,
    //   changeFrequency: "yearly",
    //   priority: 0.7,
    // },
  ];
}
