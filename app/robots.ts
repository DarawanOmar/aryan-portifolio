import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://aryanbrhan.vercel.app/sitemap.xml",
    host: "https://aryanbrhan.vercel.app",
  };
}
