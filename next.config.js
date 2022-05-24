/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = withPWA({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: IS_DEV,
  },
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com', 'ugross.dev'],
  },
});
