/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer';
import addMdx from '@next/mdx';

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  swcMinify: true,
};

const withMdx = addMdx({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default withContentlayer(withMdx(nextConfig));
