import type { MetadataRoute } from 'next'
export const dynamic = "force-dynamic";
export const revalidate = 3600; // Revalidate every hour
export default function robots(): MetadataRoute.Robots {
  const base = 'http://idps.vn'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
    ],
    sitemap: [`${base}/sitemap.xml`],
    host: base,
  }
}


