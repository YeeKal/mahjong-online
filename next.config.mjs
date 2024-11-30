/** @type {import('next').NextConfig} */
const nextConfig = {
    // nv: {
    //     BASE_URL: process.env.BASE_URL || 'http://10.8.106.60:3000',
    //   },
      images: {
        remotePatterns: [{
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'seo-heist.s3.amazonaws.com',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'github.com',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'ansubkhan.com',
          port: '',
          pathname: '/**'
        }, {
          protocol: 'https',
          hostname: 'utfs.io',
          port: '',
          pathname: '/**'
        },{
          protocol: 'https',
          hostname: 'cdn.mahjongonline.cc',
          port: '',
          pathname: '/**'
        }]
      }
};

export default nextConfig;
