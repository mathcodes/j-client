/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}
// configure "cdn.pixabay.com" under images in your `next.config.js`
module.exports = {
  images: {
    domains: ['cdn.pixabay.com', 'raw.githubusercontent.com'],
  },
}
