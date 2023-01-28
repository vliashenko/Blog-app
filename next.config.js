/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['media.graphcms.com','media.graphassets.com'],
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}
