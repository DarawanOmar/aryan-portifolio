import type { Metadata } from "next";
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
        <link rel="preload" as="image" href="/ara.jpg" />
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
          </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: "Aryan Brhan ",
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
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://aryanbrhan.vercel.app"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    nosnippet: false,
    noarchive: false,
  },
  alternates: {
    canonical: "https://aryanbrhan.vercel.app",
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/feed.atom",
    },
  },
  generator: "Next.js",

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    height: "device-height",
    interactiveWidget: "resizes-content",
    minimumScale: 1,
    viewportFit: "cover",
    maximumScale: 1,
    userScalable: false,
  },
  appleWebApp: {
    capable: true,
    title: "Aryan Brhan",
    statusBarStyle: "default",
    startupImage: ["/apple-icon.png"],
  },
};
