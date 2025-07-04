// // file: app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aryan Brhan - Motion & Graphic Designer",
    short_name: "Aryan Brhan",
    description:
      "Hi, I'm Aryan Brhan, a freelance motion and graphic designer based in Iraq. I specialize in creating engaging visual content that tells compelling stories.",
    start_url: "https://aryanbrhan.vercel.app",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait-primary",
    scope: "https://aryanbrhan.vercel.app",
    id: "https://aryanbrhan.vercel.app",
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "icon512_maskable.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "icon512_rounded.png",
        type: "image/png",
      },
    ],
    categories: ["design", "portfolio", "creative"],
    lang: "en",
    dir: "ltr",
  };
}
