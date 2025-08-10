/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'okami-storage.daviribeiro.com',
        port: '',
        pathname: '/work-images/**',
      },
    ],
  },
}

export default nextConfig
