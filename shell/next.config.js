/** @type {import('next').NextConfig} */
const { LOCAL_URL} = process.env;
const nextConfig = {
  //reactStrictMode: true,
  async rewrites() {
    console.log('Local: ', LOCAL_URL)
    console.log(await fetch(`${LOCAL_URL}/specialChild`))
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      // {
      //   source: '/child',
      //   destination: `${LOCAL_URL}`,
      // },
       {
        source: '/specialChild',
        destination: `${LOCAL_URL}/specialChild`,
      },
    ]
  }
}

module.exports = nextConfig
