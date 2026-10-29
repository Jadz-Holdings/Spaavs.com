export const siteConfig = {
  name: "SPAAVS",
  legalName: "SPAAVS — Smart Parking & Autonomous Vehicle Services",
  descriptor: "Smart Parking & Autonomous Vehicle Services",
  tagline: "Beyond Parking. Intelligent Mobility. Autonomous Infrastructure.",
  taglineParts: [
    "Beyond Parking",
    "Intelligent Mobility",
    "Autonomous Infrastructure",
  ] as const,
  parent: "Jadz Holdings LLC",
  status: "In Development",
  handle: "@spaavs",
  url: "https://spaavs.com",
  contact: {
    phone: "(571) 628-2444",
    phoneHref: "tel:+15716282444",
    email: "info@jadzholdings.com",
    emailHref: "mailto:info@jadzholdings.com",
    /** Public mailing address — confirm before treating as verified HQ. */
    addressLines: [
      "750 3rd St. NW, #304",
      "Washington, DC 20001",
      "United States",
    ],
    addressNote:
      "Business mailing address. Not a staffed walk-in office or headquarters lobby.",
  },
  /**
   * Intended @spaavs profile URLs. Confirm ownership before treating as verified.
   * Set `enabled: false` to hide a network until confirmed.
   */
  social: [
    {
      id: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/@spaavs",
      enabled: true,
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/spaavs",
      enabled: true,
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/spaavs",
      enabled: true,
    },
    {
      id: "tiktok",
      label: "TikTok",
      href: "https://www.tiktok.com/@spaavs",
      enabled: true,
    },
    {
      id: "x",
      label: "X",
      href: "https://x.com/spaavs",
      enabled: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/spaavs",
      enabled: true,
    },
  ] as const,
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About SPAAVS" },
    { href: "/solutions", label: "Solutions" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/facility-partners", label: "Facility Partners" },
    { href: "/autonomous-mobility", label: "Autonomous Mobility" },
    { href: "/media", label: "Media & Updates" },
    { href: "/contact", label: "Contact" },
  ] as const,
  inquiryCategories: [
    "Parking Facility Partnership",
    "Fleet Services",
    "EV Charging Partnership",
    "Vehicle-Service Provider",
    "Autonomous Mobility Partnership",
    "Technology Integration",
    "Investment or Strategic Partnership",
    "Media Inquiry",
    "General Inquiry",
  ] as const,
  facilityTypes: [
    "Parking garage",
    "Surface lot",
    "Shopping center",
    "Residential community",
    "Commercial property",
    "Fleet / depot facility",
    "Airport / transit",
    "Other",
  ] as const,
} as const;

export type ThemeId = "tiffany" | "mono" | "dark";

export const themes: {
  id: ThemeId;
  label: string;
  description: string;
}[] = [
  {
    id: "tiffany",
    label: "Tiffany Blue/Green Chrome",
    description: "Default public theme with selective Tiffany accents.",
  },
  {
    id: "mono",
    label: "White, Gray & Black Chrome",
    description: "Monochrome corporate theme with graphite accents.",
  },
  {
    id: "dark",
    label: "Dark Chrome",
    description: "Optional dark chrome theme for low-light viewing.",
  },
];
