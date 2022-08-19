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
      'relative mb-2 rounded-md py-10 dark:border-gray-700',
      'border-b border-gray-200 last:border-0 dark:border-gray-700'
    )}
  >
    <header>
      <h2 className="mb-3 text-xl tracking-tight text-black dark:text-gray-200">
        <Link href={url}>
          <a className="border-0 font-semibold transition-colors hover:text-primary">{title}</a>
        </Link>
      </h2>
    </header>
    <section className="dark:prose-dark prose dark:prose-invert">
      <p>{excerpt}</p>
    </section>
    <footer className="dark:prose-dark prose mt-3 dark:prose-invert">
      <Link href={url}>Read this article →</Link>
    </footer>
  </article>
);
