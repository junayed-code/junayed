/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // This config allows cloudinary to serve their service in this project
      // as a cloud image host platform
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
