import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://huzaifasani.dev"),
  title: "Huzaifa Sani | Flutter Developer & Mobile App Engineer",
  description:
    "Official Portfolio of Huzaifa Sani (হুজাইফা সানী) — Flutter Developer specializing in high-performance Android & iOS applications, Clean Architecture, GetX, Firebase, and production-grade mobile engineering.",
  keywords: [
    "Huzaifa Sani",
    "হুজাইফা সানী",
    "Flutter Developer",
    "Mobile App Developer",
    "Android Developer",
    "iOS Developer",
    "Dart Developer",
    "GetX Specialist",
    "Clean Architecture",
    "Dhaka Bangladesh Developer",
    "Sparktech Agency",
    "Privae App",
    "BeautyRun",
    "Sparky Tools",
  ],
  authors: [{ name: "Huzaifa Sani", url: "https://github.com/huzaifa-sani" }],
  creator: "Huzaifa Sani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huzaifasani.dev",
    siteName: "Huzaifa Sani // Flutter Developer Portfolio",
    title: "Huzaifa Sani | Flutter Developer & Mobile App Engineer",
    description:
      "Delivering 8+ mobile projects with 4 live applications on Google Play Store & Apple App Store. Proficient in Flutter, Dart, Clean Architecture, and GetX.",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Huzaifa Sani - Mobile Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huzaifa Sani | Flutter Developer",
    description: "Cross-platform mobile architect building high-impact iOS and Android applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased min-h-screen selection:bg-emerald-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
