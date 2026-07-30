import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#B9824B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "BrandPack Studio | Premium Custom Packaging",
    template: "%s | BrandPack Studio",
  },
  description:
    "Design premium custom packaging with real-time 3D preview, artwork upload, and bulk quote support. Eco-friendly materials for restaurants, e-commerce, bakeries & more.",
  keywords: [
    "custom packaging",
    "branded packaging",
    "packaging design studio",
    "3D packaging preview",
    "custom mailer boxes",
    "kraft paper bags",
    "food packaging",
    "eco-friendly packaging",
    "bulk packaging quote",
    "print on demand packaging",
    "restaurant packaging",
    "e-commerce packaging",
  ],
  authors: [{ name: "BrandPack Studio" }],
  creator: "BrandPack Studio",
  publisher: "BrandPack Studio",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brandpackstudio.com",
    siteName: "BrandPack Studio",
    title: "BrandPack Studio | Premium Custom Packaging",
    description:
      "Design premium custom packaging with real-time 3D preview, artwork upload, and bulk quote support.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BrandPack Studio — Premium Custom Packaging",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandPack Studio | Premium Custom Packaging",
    description:
      "Design, preview, and order custom branded packaging online.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://brandpackstudio.com"),
  alternates: {
    canonical: "/",
  },
};

// Structured data for Organization (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BrandPack Studio",
  url: "https://brandpackstudio.com",
  logo: "https://brandpackstudio.com/logo.png",
  description:
    "Premium custom packaging platform with 3D preview, artwork upload, and bulk quote support.",
  sameAs: [
    "https://instagram.com/brandpackstudio",
    "https://linkedin.com/company/brandpackstudio",
    "https://twitter.com/brandpackstudio",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-99999-99999",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}

        {/* Google Analytics 4 (GA4) — Replace G-XXXXXXXXXX with real ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Google Tag Manager (GTM) — Replace GTM-XXXXXXX with real ID */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}

