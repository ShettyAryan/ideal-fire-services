/**
 * Central SEO configuration. Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.yourdomain.com).
 */
export const SITE_NAME = 'Ideal Fire Services'

export const SITE_URL =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')) ||
  'https://idealfireservices.vercel.app'

/** Default share image (absolute URL) */
export const DEFAULT_OG_IMAGE =
  'https://res.cloudinary.com/dsvgadc5d/image/upload/v1775908502/idealfireservicelogo_blgoqz.svg'

/**
 * Square PNG (48×48) for browsers + Google Search favicon.
 * Google recommends favicons larger than 48×48 for visibility in results.
 */
export const FAVICON_GOOGLE_PNG =
  'https://res.cloudinary.com/dsvgadc5d/image/upload/w_48,h_48,c_fit,f_png,q_auto/v1775908502/idealfireservicelogo_blgoqz.png'

export const DEFAULT_DESCRIPTION =
  'Mumbai fire safety experts since 1991: hydrants, sprinklers, fire alarms, extinguishers, AMC, audits, and Maharashtra Fire Department compliance. Licensed MFS/LA/RF-124/RD 127.'

export const BUSINESS_ADDRESS = {
  streetAddress: '204A, B Wing, Sumit Samarth Arcade, Aarey Road, Goregaon West',
  addressLocality: 'Mumbai',
  postalCode: '400104',
  addressRegion: 'Maharashtra',
  addressCountry: 'IN',
}

export function absoluteUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${p}`
}

export function ensureAbsoluteImage(url: string): string {
  if (!url) return DEFAULT_OG_IMAGE
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return absoluteUrl(url.startsWith('/') ? url : `/${url}`)
}

/** JSON-LD for the business (used on the home page). */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    logo: DEFAULT_OG_IMAGE,
    telephone: ['+919820612528', '+919619969323'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_ADDRESS.streetAddress,
      addressLocality: BUSINESS_ADDRESS.addressLocality,
      addressRegion: BUSINESS_ADDRESS.addressRegion,
      postalCode: BUSINESS_ADDRESS.postalCode,
      addressCountry: BUSINESS_ADDRESS.addressCountry,
    },
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
    },
    priceRange: '$$',
    additionalType: 'https://schema.org/FireProtectionService',
  }
}
