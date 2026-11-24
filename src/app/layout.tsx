import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/lib/theme";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const socialSameAs = siteConfig.social
  .filter((s) => s.enabled)
  .map((s) => s.href);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SPAAVS | Intelligent Mobility Infrastructure",
    template: "%s | SPAAVS",
  },
  description:
    "SPAAVS is developing intelligent parking infrastructure for human-driven vehicles, autonomous fleets, and integrated vehicle services.",
  applicationName: "SPAAVS",
  keywords: [
    "SPAAVS",
    "Smart Parking & Autonomous Vehicle Services",
    "smart parking technology",
    "intelligent mobility infrastructure",
    "parking facility partnerships",
    "SPAAVS Smart Parking Facilities",
    "SPAAVS Autonomous-ready Facilities",
    "Overnight Fleet Bases",
    "Rapid Turnaround Hubs",
  ],
  authors: [{ name: "SPAAVS" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "SPAAVS",
    title: "SPAAVS | Intelligent Mobility Infrastructure",
    description:
      "Intelligent parking infrastructure for human-driven vehicles, autonomous fleets, and integrated vehicle services.",
    images: [
      {
        url: "/brand/og-spaavs.png",
        width: 1200,
        height: 630,
        alt: "SPAAVS — Beyond Parking. Intelligent Mobility. Autonomous Infrastructure.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPAAVS | Intelligent Mobility Infrastructure",
    description:
      "Intelligent parking infrastructure for human-driven vehicles, autonomous fleets, and integrated vehicle services.",
    images: ["/brand/og-spaavs.png"],
  },
  icons: {
    icon: [{ url: "/brand/favicon.png", type: "image/png" }],
    apple: [{ url: "/brand/apple-touch-icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SPAAVS",
  alternateName: "Smart Parking & Autonomous Vehicle Services",
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/spaavs-wordmark-clean.png`,
  description:
    "SPAAVS is developing intelligent parking infrastructure for human-driven vehicles, autonomous fleets, and integrated vehicle services.",
  parentOrganization: {
    "@type": "Organization",
    name: siteConfig.parent,
  },
  telephone: "+1-771-271-9967",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${siteConfig.url}/contact`,
  },
  sameAs: socialSameAs,
  address: {
    "@type": "PostalAddress",
    streetAddress: "750 3rd St. NW, #304",
    addressLocality: "Washington",
    addressRegion: "DC",
    postalCode: "20001",
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="tiffany"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
