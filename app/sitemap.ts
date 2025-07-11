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
  ];
}
