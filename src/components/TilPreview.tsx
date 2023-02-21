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
        className="grid grid-cols-[auto_1fr_auto_auto] gap-2 sm:gap-3 justify-between items-center transition w-full py-2 px-2 hover:bg-slate-100 rounded-lg"
      >
        <div className="p-1 bg-slate-200 rounded-lg w-7 h-7 flex items-center justify-center">
          <span>{emoji}</span>
        </div>
        <h3 className="text-sm font-semibold truncate">{title}</h3>

        {tags.map((tag) => (
          <a
            key={tag}
            href={`/til/tags/${tag}`}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
          >
            {tag}
          </a>
        ))}

        <time dateTime={date} className="text-xs hidden sm:inline-block text-right">
          {formattedDate}
        </time>
      </a>
    </article>
  );
};
