import type { MetadataRoute } from 'next'
export const dynamic = "force-dynamic";
export const revalidate = 3600; // Revalidate every hour
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'http://idps.vn'
  const routes = ['', '#about', '#solutions', '#events', '#partners', '#contact']

  return routes.map((path) => ({
    url: `${base}/${path}`.replace('/#', '#'),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))
}




