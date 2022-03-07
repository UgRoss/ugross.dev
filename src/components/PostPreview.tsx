import React from 'react';
import { Link } from 'gatsby';
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
  <article className={classNames(className, 'py-10 border-b border-gray-200 dark:border-gray-700')}>
    <header>
      <h2 className="mb-4 text-2xl text-gray-900 tracking-tight font-bold dark:text-gray-200">
        <Link to={url} className="border-0 font-bold">
          {title}
        </Link>
      </h2>
    </header>
    <section className="mb-6 prose dark:prose-invert">
      <p>{excerpt}</p>
    </section>
    <footer className="prose dark:prose-invert">
      <Link to={url}>
        Read this article →
      </Link>
    </footer>
  </article>
);
