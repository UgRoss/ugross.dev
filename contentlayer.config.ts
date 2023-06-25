import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import slugify from 'slugify';
// Remark & Rehype plugins
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';

const slugifyOptions = {
  trim: true,
  lower: true,
  remove: /[*+~()'"!:@]/g,
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Post short description',
      required: true,
    },
    image: {
      type: 'string',
      description: 'Post image url',
      required: false,
    },
    updated: {
      type: 'date',
      description: 'Date of the latest of edits of the post',
      required: false,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => slugify(post.title, slugifyOptions),
    },
    img: {
      type: 'string',
      resolve: (post) =>
        post.image ? `/content-images${post.image.replace('./', '/')}` : undefined,
    },
  },
}));

export const TodayILearned = defineDocumentType(() => ({
  name: 'TIL',
  filePathPattern: 'TIL/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Title of the TIL record',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Short description',
      required: true,
    },
    image: {
      type: 'string',
      description: 'TIL image url',
      required: false,
    },
    updated: {
      type: 'date',
      description: 'Date of the latest update',
      required: false,
    },
    date: {
      type: 'date',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    emoji: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => slugify(post.title, slugifyOptions),
    },
    categorySlug: {
      type: 'string',
      resolve: (post) => slugify(post.category, slugifyOptions),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, TodayILearned],
  mdx: {
    remarkPlugins: [remarkGfm, [remarkToc, { maxDepth: 4, tight: true }]],
    rehypePlugins: [rehypeSlug, rehypeExternalLinks],
  },
});