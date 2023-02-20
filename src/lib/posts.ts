import type { Post, TIL } from 'contentlayer/generated';
import { allPosts, allTILs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

type MDXRecord = Post | TIL;

function sortRecordsByDate(items: Array<Post | TIL>): Array<Post | TIL> {
  return items.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}

function getRecent(items: Array<Post | TIL>) {
  const sortedItems = sortRecordsByDate(items);

  return function (numOfRecentPosts: number): Array<Post | TIL> {
    return sortedItems.slice(0, numOfRecentPosts);
  };
}

export const getRecentPosts = getRecent(allPosts);
export const getRecentTILs = getRecent(allTILs);

export const getAllPosts = (): Post[] => sortRecordsByDate(allPosts);
export const getAllTILs = (): TIL[] => sortRecordsByDate(allTILs);

export const getPostByUrl = (postUrl: string): MDXRecord | undefined =>
  allPosts.find(({ url }) => url === postUrl);
export const getTILByUrl = (postUrl: string): MDXRecord | undefined =>
  allTILs.find(({ url }) => url === postUrl);
