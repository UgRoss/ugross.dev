import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  computedFields: {
    url: { resolve: (post) => `/blog/${post.slug}`, type: 'string' },
  },
  fields: {
    date: { required: true, type: 'date' },
    description: { required: true, type: 'string' },
    id: { required: true, type: 'string' },
    img: { required: true, type: 'string' },
    lastUpdateDate: { required: false, type: 'date' },
    slug: { required: true, type: 'string' },
    tags: { of: { type: 'string' }, required: true, type: 'list' },
    title: { required: true, type: 'string' },
  },
  filePathPattern: `posts/**/*.md`,
  name: 'Post',
}));

export const TIL = defineDocumentType(() => ({
  computedFields: {
    url: { resolve: (item) => `/til/${item.slug}`, type: 'string' },
  },
  fields: {
    date: { required: true, type: 'date' },
    description: { required: true, type: 'string' },
    id: { required: true, type: 'string' },
    slug: { required: true, type: 'string' },
    tags: { of: { type: 'string' }, required: true, type: 'list' },
    title: { required: true, type: 'string' },
  },
  filePathPattern: `til/**/*.md`,
  name: 'TIL',
}));

export const Book = defineDocumentType(() => ({
  fields: {
    author: { required: true, type: 'string' },
    date: { required: true, type: 'date' },
    id: { required: true, type: 'string' },
    img: { required: true, type: 'string' },
    rating: { required: true, type: 'number' },
    slug: { required: true, type: 'string' },
    title: { required: true, type: 'string' },
    url: { required: true, type: 'string' },
  },
  filePathPattern: `books/**/*.md`,
  name: 'Book',
}));

export const Page = defineDocumentType(() => ({
  fields: {
    description: { required: true, type: 'string' },
    id: { required: true, type: 'string' },
    slug: { required: true, type: 'string' },
    title: { required: true, type: 'string' },
  },
  filePathPattern: `pages/**/*.md`,
  name: 'Page',
}));

export default makeSource({
  contentDirExclude: ['node_modules', '.git', 'package.json', 'package-lock.json', 'README.md'],
  contentDirPath: 'content',
  documentTypes: [Post, TIL, Book, Page],
});
