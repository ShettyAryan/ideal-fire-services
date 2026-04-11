import Head from 'next/head'
import { SITE_NAME, DEFAULT_OG_IMAGE, absoluteUrl, ensureAbsoluteImage } from '../lib/seo'

export type SeoProps = {
  /** Short page title; becomes "Title | Ideal Fire Services" unless useTitleAsIs is set */
  title: string
  description: string
  /** Path only, e.g. /about or /projects/3 */
  path: string
  /** Open Graph / Twitter image (relative or absolute) */
  image?: string
  /** Comma-separated keywords */
  keywords?: string
  ogType?: 'website' | 'article'
  /** Use `title` as the full document title (no suffix) */
  useTitleAsIs?: boolean
  noindex?: boolean
  /** Structured data (JSON-LD), e.g. Organization on the home page */
  jsonLd?: Record<string, unknown>
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords,
  ogType = 'website',
  useTitleAsIs = false,
  noindex = false,
  jsonLd,
}: SeoProps) {
  const documentTitle = useTitleAsIs ? title : `${title} | ${SITE_NAME}`
  const canonical = absoluteUrl(path)
  const ogImage = ensureAbsoluteImage(image)

  return (
    <Head>
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}

      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="author" content={SITE_NAME} />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai" />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ) : null}
    </Head>
  )
}
