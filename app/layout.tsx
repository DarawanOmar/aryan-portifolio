// file: app/layout.tsx
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import { ActiveThemeProvider } from "@/components/theme/active-theme";

const source_code = Dancing_Script({
  variable: "--font-source-code",
  subsets: ["latin"],
  weight: [],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get("active_theme")?.value;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/ara.webp" />
        <meta
          name="google-site-verification"
          content="7jWsdk-UQYRUKlU5r7euYc2qOBkCYFr9wHVsV-Z3ti8"
        />

        {/* ADD THIS: Additional SEO meta tags */}
        <meta name="author" content="Aryan Brhan" />
        <meta name="copyright" content="Aryan Brhan" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aryan Brhan",
              jobTitle: "Motion & Graphic Designer",
              description:
                "Freelance motion and graphic designer based in Iraq, specializing in creating engaging visual content that tells compelling stories.",
              url: "https://aryanbrhan.vercel.app",
              image: "https://aryanbrhan.vercel.app/ara.webp",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Iraq",
              },
              knowsAbout: [
                "Motion Graphics",
                "Graphic Design",
                "Video Editing",
                "Visual Design",
                "Creative Direction",
              ],
              alumniOf: "Motion & Graphic Design",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body
        className={cn(
          `${source_code.variable} font-source-code`,
          activeThemeValue ? `theme-${activeThemeValue}` : ""
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ActiveThemeProvider initialTheme={activeThemeValue}>
            {children}
            <SpeedInsights />
          </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: "Aryan Brhan | Motion & Graphic Designer",
  description:
    "Hi, I'm Aryan Brhan, a freelance motion and graphic designer based in Iraq. I specialize in creating engaging visual content that tells compelling stories.",

  keywords: [
    "Aryan Brhan",
    "aryanbrhan",
    "Motion Designer",
    "Graphic Designer",
    "Freelance Designer",
    "Creative Portfolio",
    "Design Portfolio",
    "Motion Graphics",
    "Graphic Design",
    "Iraq Designer", // ADDED: Location-based keyword
    "Kurdish Designer", // ADDED: If applicable
    "Middle East Designer", // ADDED: Regional keyword
  ],

  referrer: "origin-when-cross-origin",
  authors: [
    {
      name: "Aryan Brhan",
      url: "https://aryanbrhan.vercel.app",
    },
  ],
  creator: "Aryan Brhan",
  publisher: "Aryan Brhan",
  applicationName: "Aryan Brhan Portfolio",

  openGraph: {
    title: "Aryan Brhan | Motion & Graphic Designer",
    description:
      "Hi, I'm Aryan Brhan, a freelance motion and graphic designer based in Iraq. I specialize in creating engaging visual content that tells compelling stories.",
    url: "https://aryanbrhan.vercel.app",
    siteName: "Aryan Brhan",
    images: [
      {
        url: "https://aryanbrhan.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aryan Brhan - Motion & Graphic Designer",
      },
      {
        url: "https://aryanbrhan.vercel.app/ara.webp", // Fallback image
        width: 960,
        height: 960,
        alt: "Aryan Brhan Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Brhan | Motion & Graphic Designer",
    description:
      "Hi, I'm Aryan Brhan, a freelance motion and graphic designer based in Iraq. I specialize in creating engaging visual content that tells compelling stories.",
    images: ["https://aryanbrhan.vercel.app/og-image.png"],
    creator: "@aryan_brhan",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://aryanbrhan.vercel.app"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    nosnippet: false,
    noarchive: false,
    googleBot: {
      // ADDED: Specific Google bot instructions
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "standard",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aryanbrhan.vercel.app",
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/feed.atom",
    },
  },
  generator: "Next.js",
  // ADDED: Additional metadata for better SEO
  category: "Design", // ADDED: Category for better classification
  classification: "Portfolio", // ADDED: Classification
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  appleWebApp: {
    capable: true,
    title: "Aryan Brhan",
    statusBarStyle: "default",
    startupImage: ["/apple-icon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  height: "device-height",
  interactiveWidget: "resizes-content",
  minimumScale: 1,
  viewportFit: "cover",
  maximumScale: 5, // Changed from 1 to 5 for accessibility
  userScalable: true, // Changed from false to true for accessibility
  colorScheme: "light dark",
};
