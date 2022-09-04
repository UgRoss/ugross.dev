/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const withMDX = require('@next/mdx');
const runtimeCaching = require('next-pwa/cache');

const IS_DEV = process.env.NODE_ENV === 'development';
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';
`;

const withProviders = (config) => withPWA(config);

module.exports = {
  async headers() {
    if (IS_DEV) {
      return [];
    }

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  },
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    domains: ['media.graphassets.com', 'ugross.dev'],
    path: '',
  },
};
