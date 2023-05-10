import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '~/utils';
import { IconType } from 'react-icons';
import { Card } from './ui/Card';
import { Badge, badgeVariants } from './ui/Badge';

interface TilPreviewProps {
  title: string;
  description?: string;
  emoji: string;
  url: string;
  tags: string[];
  date: string;
}

const TodayILearnedPreview = ({
  title,
  description,
  emoji,
  url,
  tags = [],
  date,
}: TilPreviewProps) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  }).format(new Date(date));

  return (
    <Card className="group p-1">
      <a
        href={url}
        className="grid w-full grid-cols-[auto_1fr_auto_auto] items-center justify-between gap-2 rounded-lg px-2 py-1 sm:gap-3"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 p-1 dark:bg-slate-600">
          <span>{emoji}</span>
        </div>
        <div>
          <h3 className="truncate text-sm font-semibold dark:text-white">{title}</h3>
          <p className="text-xs text-neutral-400 transition-all duration-300 group-hover:text-neutral-800">
            {description}
          </p>
        </div>

        {tags.map((tag) => (
          <Link
            href={`/stack/${tag}`}
            className={badgeVariants({ variant: 'secondary' })}
            key={tag}
          >
            {tag}
          </Link>
        ))}

        <time dateTime={date} className="hidden text-right text-xs dark:text-gray-200">
          {formattedDate}
        </time>
      </a>
    </Card>
  );
};

export default TodayILearnedPreview;
