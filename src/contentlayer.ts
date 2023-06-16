import type { Post, TIL } from 'contentlayer/generated';
import { allPosts, allTILs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

function sortRecordsByDate<T extends Post | TIL>(items: Array<T>): Array<T> {
  return items.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}

function getRecent<T extends Post | TIL>(items: Array<T>) {
  const sortedItems = sortRecordsByDate(items);

  return function (numOfRecentPosts: number): Array<T> {
    return sortedItems.slice(0, numOfRecentPosts);
  };
}

export const getRecentPosts = getRecent(allPosts);
export const getRecentTILs = getRecent(allTILs);

export const getAllPosts = () => sortRecordsByDate(allPosts);
export const getAllTILs = () => sortRecordsByDate(allTILs);

export const getPostByUrl = (postSlug: string): Post | undefined =>
  allPosts.find(({ slug }) => slug === postSlug);
export const getTILByUrl = (tilSlug: string): TIL | undefined =>
  allTILs.find(({ slug }) => slug === tilSlug);
