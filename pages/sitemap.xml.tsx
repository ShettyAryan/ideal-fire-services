import type { GetServerSideProps } from 'next'
import { buildSitemapXml } from '../lib/sitemap'

/**
 * Served at /sitemap.xml (Pages Router file name).
 * Uses NEXT_PUBLIC_SITE_URL when set; see lib/seo.ts.
 */
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml = buildSitemapXml()
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.end(xml)
  return { props: {} }
}

export default function SitemapXml() {
  return null
}
