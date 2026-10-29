import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/solutions",
    "/how-it-works",
    "/facility-partners",
    "/autonomous-mobility",
    "/media",
    "/contact",
    "/privacy",
    "/terms",
    "/settings",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: "2026-10-29",
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
