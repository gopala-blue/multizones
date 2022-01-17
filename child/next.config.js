/** @type {import('next').NextConfig} */
const isProd = process.enc.NODE_ENV === 'production'
const nextConfig = {
  //reactStrictMode: true,
   assetPrefix: isProd? 'https://mz-child.vercel.app' :'http://localhost:3001' 
}

module.exports = nextConfig
