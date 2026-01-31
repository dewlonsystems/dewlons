// src/app/sitemap.ts
export default function sitemap() {
  const baseUrl = "https://dewlons.com";
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/services",
    "/blog",
    "/privacy-policy",
    "/terms",
  ];

  const servicePages = [
    "custom-software-development",
    "website-design-development",
    "mobile-app-development",
    "enterprise-software-solutions",
    "cloud-solutions",
    "api-development-integration",
    "software-maintenance-support",
    "ui-ux-design-prototyping",
    "quality-assurance-testing",
    "devops-automation",
    "seo-digital-marketing-support",
    "it-consulting-digital-transformation",
    "technical-training-knowledge-transfer",
  ].map(slug => `/services/${slug}`);

  const blogPages = [
    "custom-web-app-2026",
    "seo-nairobi-2026",
    "mobile-trends-east-africa",
  ].map(slug => `/blog/${slug}`);

  const routes = [...staticPages, ...servicePages, ...blogPages].map(
    route => `${baseUrl}${route}`
  );

  return routes.map(url => ({
    url,
    lastModified: new Date().toISOString().split("T")[0],
  }));
}