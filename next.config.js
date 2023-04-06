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

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
