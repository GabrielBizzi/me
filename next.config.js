/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "imgur.com",
      "media.licdn.com",
    ],
  },
};

module.exports = nextConfig;
