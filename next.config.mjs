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
      {
        protocol: 'https',
        hostname: 'okami-storage.daviribeiro.com',
        port: '',
        pathname: '/user-avatars-images/**',
      },
    ],
  },
}

export default nextConfig
