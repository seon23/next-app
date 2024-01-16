/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },

    ],
  },
};

module.exports = nextConfig;
