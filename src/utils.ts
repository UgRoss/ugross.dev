import dayjs from 'dayjs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';

/** Detect if the user has requested the system use a light or dark color theme */
export const supportsDarkMode = (): boolean =>
  window && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const formatDate = (date: string) => dayjs(date).format('D MMMM, YYYY');

export const serializeMDX = (mdxContent: string): Promise<MDXRemoteSerializeResult> =>
  serialize(mdxContent, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, [remarkToc, { maxDepth: 4, tight: true }]],
      rehypePlugins: [rehypeSlug, rehypeExternalLinks],
    },
  });

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
