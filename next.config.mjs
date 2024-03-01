/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'okami-storage.s3.amazonaws.com',
        port: '',
        pathname: '/work-images/**',
      },
    ],
  },
}

export default nextConfig
