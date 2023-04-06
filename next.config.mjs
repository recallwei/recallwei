import mdx from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    mdxRs: true
  },
  eslint: {
    dirs: ['app', 'components', 'hooks', 'utils']
  }
}

const withMDX = mdx()
export default withMDX(nextConfig)
