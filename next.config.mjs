/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'png.pngtree.com',
      //   port: '',
      //   pathname: '**',
      // },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
