import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Brhan ",
  description:
    "Hi, I'm Aryan Brhan, a freelance motion and graphic designer based in Iraq. I specialize in creating engaging visual content that tells compelling stories.",
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
  themeColor: "#ffffff",
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

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
