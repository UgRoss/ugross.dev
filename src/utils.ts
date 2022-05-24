import dayjs from 'dayjs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** Detect if the user has requested the system use a light or dark color theme */
export const supportsDarkMode = (): boolean =>
  window && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const formatDate = (date: string) => dayjs(date).format('D MMMM, YYYY');

export const serializeMDX = (mdxContent: string): Promise<MDXRemoteSerializeResult> =>
  serialize(mdxContent, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeAutolinkHeadings],
    },
  });

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);
