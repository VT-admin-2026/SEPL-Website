import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { getStructuredDataGraph } from "@/lib/structured-data";
import { seoMetadata, SITE_URL } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seoMetadata.title,
  description: seoMetadata.description,
  keywords: [
    "Suvidhinath Electronics",
    "SEPL",
    "electrical infrastructure",
    "power distribution",
    "renewable energy",
    "solar solutions",
    "engineering",
    "government contractor",
    "rural electrification",
    "Maharashtra",
    "turnkey projects",
    "MSEDCL",
    "PWD contractor",
  ],
  authors: [{ name: seoMetadata.organizationName }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: seoMetadata.locale,
    url: SITE_URL,
    siteName: seoMetadata.organizationName,
    title: seoMetadata.title,
    description: seoMetadata.description,
    images: [
      {
        url: seoMetadata.logoPath,
        alt: `${seoMetadata.organizationName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoMetadata.title,
    description: seoMetadata.description,
    images: [seoMetadata.logoPath],
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
  const structuredData = getStructuredDataGraph();

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
