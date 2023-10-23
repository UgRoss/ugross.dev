import { compareDesc } from 'date-fns';

export const compareByDate = (a: { date: string }, b: { date: string }) =>
  compareDesc(new Date(a.date), new Date(b.date));
