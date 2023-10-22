import {
  allBooks as allBooksUnsorted,
  allPages,
  allPosts as allPostsUnsorted,
  allTILs as allTILsUnsorted,
} from 'contentlayer/generated';
import { ContentfulContentService } from '~/services/ContentfulContentService';

export const books = new ContentfulContentService(allBooksUnsorted);
export const posts = new ContentfulContentService(allPostsUnsorted);
export const tilPosts = new ContentfulContentService(allTILsUnsorted);
export const pages = new ContentfulContentService(allPages);
