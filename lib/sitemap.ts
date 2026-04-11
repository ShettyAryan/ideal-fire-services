import { SITE_URL, absoluteUrl } from './seo'

/** Paths we want indexed (projects listing and project detail URLs omitted for now). */
export const INDEXABLE_PATHS = ['/', '/about', '/services', '/contact'] as const

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function buildSitemapXml(): string {
  const lastmod = new Date().toISOString().slice(0, 10)
  const body = INDEXABLE_PATHS.map((path) => {
    const loc = absoluteUrl(path)
    const priority = path === '/' ? '1.0' : '0.8'
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`
}

export function buildRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
}
