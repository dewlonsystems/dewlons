// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

// Load Inter font with optimal settings
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Base metadata (will be overridden by individual pages)
export const metadata: Metadata = {
  title: {
    default: "Dewlon Systems | Custom Software & Web Development in Nairobi, Kenya",
    template: "%s | Dewlon Systems",
  },
  description:
    "Nairobi's top-rated software development company. Custom web apps, mobile apps, enterprise software, and IT consulting for businesses in Kenya, Uganda & Tanzania. Offices in Nairobi, Kisii & Kakamega.",
  keywords: [
    "software development company Nairobi",
    "custom software developers Kenya",
    "web development agency East Africa",
    "mobile app developers Nairobi",
    "enterprise software solutions Kenya",
    "IT consulting firm Nairobi",
    "cloud solutions provider Kenya",
    "M-Pesa integration experts",
    "local software company Imara Daima",
    "affordable custom software Kenya",
    "government software developers Kenya",
    "agritech software developers East Africa",
    "healthcare software solutions Kenya",
    "fintech app development Nairobi",
    "technical training and knowledge transfer Kenya",
  ],
  authors: [{ name: "Dewlon Systems", url: "https://dewlons.com" }],
  creator: "Dewlon Systems",
  publisher: "Dewlon Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Open Graph / Social
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://dewlons.com",
    title: "Dewlon Systems | Custom Software & Web Development in Nairobi, Kenya",
    description:
      "Nairobi's top-rated software development company. Custom web apps, mobile apps, enterprise software, and IT consulting for businesses in Kenya, Uganda & Tanzania.",
    siteName: "Dewlon Systems",
    images: [
      {
        url: "https://dewlons.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dewlon Systems – Custom Software Development in Nairobi, Kenya",
      },
    ],
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Dewlon Systems | Custom Software & Web Development in Nairobi, Kenya",
    description:
      "Nairobi's top-rated software development company. Custom web apps, mobile apps, enterprise software, and IT consulting for businesses in Kenya, Uganda & Tanzania.",
    images: ["https://dewlons.com/og-image.jpg"],
    creator: "@dewlonsystems",
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Canonical
  alternates: {
    canonical: "https://dewlons.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Dewlon Systems",
            "url": "https://dewlons.com",
            "logo": "https://dewlons.com/logo.png",
            "image": "https://dewlons.com/og-image.jpg",
            "description":
              "Custom software development, web design, mobile apps, and IT consulting for businesses in Nairobi, Kenya and East Africa.",
            "telephone": "+254728722746",
            "email": "info@dewlons.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Imara Daima",
              "addressLocality": "Nairobi",
              "postalCode": "00100",
              "addressCountry": "KE",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -1.286389,
              "longitude": 36.817223,
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00",
            },
            "sameAs": [
              "https://www.facebook.com/dewlonsystems",
              "https://www.linkedin.com/company/dewlon-systems",
              "https://twitter.com/dewlonsystems",
            ],
            "areaServed": ["KE", "UG", "TZ", "RW"],
            "serviceArea": {
              "@type": "Place",
              "name": "Nairobi, Kisii, Kakamega, Kenya",
            },
          })}
        </script>

        {/* Local Business Schema (for Google Maps) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dewlon Systems",
            "image": "https://dewlons.com/og-image.jpg",
            "url": "https://dewlons.com",
            "telephone": "+254728722746",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Imara Daima",
              "addressLocality": "Nairobi",
              "addressRegion": "Nairobi County",
              "postalCode": "00100",
              "addressCountry": "KE",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -1.286389,
              "longitude": 36.817223,
            },
            "openingHours": "Mo-Fr 08:00-18:00",
            "priceRange": "$$",
            "servesCuisine": null,
          })}
        </script>
      </head>
      <body className="font-sans bg-white text-gray-900">
        {/* Sticky Contact Bar - always visible */}
        <div className="bg-[var(--color-primary)] text-white text-sm py-2 px-4 sticky top-0 z-50 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6">
              <span className="flex items-center gap-1 whitespace-nowrap">
                <FiPhone className="text-white flex-shrink-0" />
                <a href="tel:+254728722746" className="hover:underline">+254 728 722 746</a>
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap">
                <FiMail className="text-white flex-shrink-0" />
                <a href="mailto:info@dewlons.com" className="hover:underline">info@dewlons.com</a>
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FiMapPin className="text-white flex-shrink-0" />
              <span>Nairobi • Kisii • Kakamega</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}