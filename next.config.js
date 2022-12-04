/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["scontent.fmmx3-1.fna.fbcdn.net", "facebook.com"],
  },
};
