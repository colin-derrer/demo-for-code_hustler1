/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.pexels.com",
      },
    ],
  },
};

export default nextConfig;
