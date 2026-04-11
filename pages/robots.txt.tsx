import type { GetServerSideProps } from 'next'
import { buildRobotsTxt } from '../lib/sitemap'

/** Served at /robots.txt */
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const body = buildRobotsTxt()
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.end(body)
  return { props: {} }
}

export default function RobotsTxt() {
  return null
}
