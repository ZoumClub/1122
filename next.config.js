/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'www.car-logos.org',
      'igbpxesaulnzqaiqdjol.supabase.co'
    ],
  },
  // Enable static exports
  trailingSlash: true,
  // Improve build performance
  swcMinify: true,
  // Configure compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configure headers for caching
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;