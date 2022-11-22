// @ts-check
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
  },
};

module.exports = withContentlayer(nextConfig);
