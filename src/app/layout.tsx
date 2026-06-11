import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://joemar-ceneza.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joemar Ceneza - Full-Stack Developer",
    template: "%s | Joemar Ceneza",
  },
  description: "Full-Stack Developer building web apps with Next.js, React, and Node.js. View projects, skills, and ways to get in touch.",
  openGraph: {
    title: "Joemar Ceneza - Full-Stack Developer",
    description: "Full-Stack Developer building web apps with Next.js, React, and Node.js.",
    url: siteUrl,
    siteName: "Joemar Ceneza",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joemar Ceneza - Full-Stack Developer",
    description: "Full-Stack Developer building web apps with Next.js, React, and Node.js.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joemar Ceneza",
  jobTitle: "Full-Stack Developer",
  url: siteUrl,
  email: "mailto:joemar.ceneza@gmail.com",
  sameAs: ["https://github.com/joemar-ceneza", "https://www.linkedin.com/in/joemarceneza/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
