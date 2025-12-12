/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  basePath: process.env.NODE_ENV === 'production' ? '/dexin.de' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dexin.de' : '',
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
}

export default nextConfig
