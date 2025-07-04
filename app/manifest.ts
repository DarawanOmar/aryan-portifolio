import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aryan Brhan - Motion & Graphic Designer",
    short_name: "Aryan Brhan",
    description:
      "Hi, I'm Aryan Brhan, a freelance motion and graphic designer based in Iraq. I specialize in creating engaging visual content that tells compelling stories.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait-primary",
    scope: "/",
    id: "/",
    icons: [
      {
        src: "/icon1.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon1.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon1.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon1.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["design", "portfolio", "creative"],
    lang: "en",
    dir: "ltr",
  };
}
