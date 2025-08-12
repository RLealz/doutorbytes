import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const routes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/services/hardware-repair",
    "/services/data-recovery",
    "/services/network-setup",
    "/services/upgrades",
    "/services/virus-removal",
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }))
}