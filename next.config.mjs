/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/3001/api/:path*',
        destination: '/api/:path*',
      },
    ];
  } 
};

export default nextConfig;
