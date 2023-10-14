import {
  allBooks as allBooksUnsorted,
  allPosts as allPostsUnsorted,
  allTILs as allTILsUnsorted,
} from 'contentlayer/generated';
import { compareByDate } from '~/app/utils';

export { allPages } from 'contentlayer/generated';

export const allBooks = allBooksUnsorted.sort(compareByDate);
export const allPosts = allPostsUnsorted.sort(compareByDate);
export const allTILs = allTILsUnsorted.sort(compareByDate);

export function getRecentPosts(numberOfRecentPosts: number) {
  return allPosts.slice(0, numberOfRecentPosts);
}

export function getRecentTILs(numberOfRecentTILs: number) {
  return allTILs.slice(0, numberOfRecentTILs);
}
