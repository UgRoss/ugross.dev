import React, { FC, ReactElement } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils';
import { IconType } from 'react-icons';

interface TilPreviewProps {
  title: string;
  emoji: string;
  url: string;
  tags: string[];
  date: string;
}

export const TilPreview = ({ title, emoji, url, tags = [], date }: TilPreviewProps) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  }).format(new Date(date));

  return (
    <article>
      <a
        href={url}
        className="grid w-full grid-cols-[auto_1fr_auto_auto] items-center justify-between gap-2 rounded-lg py-2 px-2 transition hover:bg-slate-100 dark:hover:bg-slate-800 sm:gap-3"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200 p-1 dark:bg-slate-600">
          <span>{emoji}</span>
        </div>
        <h3 className="truncate text-sm font-semibold dark:text-white">{title}</h3>

        {tags.map((tag) => (
          <a
            key={tag}
            href={`/til/tags/${tag}`}
            className="mr-2 rounded border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 hover:bg-blue-200 dark:bg-gray-700 dark:text-blue-400"
          >
            {tag}
          </a>
        ))}

        <time
          dateTime={date}
          className="hidden text-right text-xs dark:text-gray-200 sm:inline-block"
        >
          {formattedDate}
        </time>
      </a>
    </article>
  );
};
