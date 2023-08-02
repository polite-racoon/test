/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: false,
  // compiler: {
  //   removeConsole: process.env.NODE_ENV !== "development",
  // },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'firebasestorage.googleapis.com',
      'placekitten.com',
    ],
  },
  output: 'standalone',
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA(nextConfig);
