/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Change 'your-repo-name' to your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/dexin.de' : '',
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
}

export default nextConfig
