import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface PostPreviewProps {
  url: string;
  title: string;
  excerpt: string;
  className?: string;
}

export const PostPreview: React.FC<PostPreviewProps> = ({
  url,
  title,
  excerpt,
  className = '',
}) => (
  <article
    className={classNames(
      className,
      'py-10 rounded-md dark:border-gray-700  mb-2 relative',
      'border-b border-gray-200 dark:border-gray-700 last:border-0'
    )}
  >
    <header>
      <h2 className="mb-3 text-xl text-gray-900 tracking-tight dark:text-gray-200">
        <Link href={url}>
          <a className="border-0 font-semibold">{title}</a>
        </Link>
      </h2>
    </header>
    <section className="prose dark:prose-invert dark:prose-dark">
      <p>{excerpt}</p>
    </section>
    <footer className="mt-3 prose dark:prose-invert dark:prose-dark">
      <Link href={url}>Read this article →</Link>
    </footer>
  </article>
);
