/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    disableStaticImages: true,
    // Dummy画像のドメインを許可するように
    domains: ['static-cdn.jtvnw.net'],
  },
};
