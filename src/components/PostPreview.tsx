import React from 'react';
import classNames from 'classnames';
import { Link } from '~/components/Link';

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
      'first:mt-10 py-10 border-b border-gray-200 dark:border-gray-700'
    )}
  >
    <header>
      <h2 className="mb-4 text-2xl text-gray-900 tracking-tight font-bold dark:text-gray-200">
        <Link to={url} asText={true} className="border-0 font-bold">
          {title}
        </Link>
      </h2>
    </header>
    <section className="mb-6 prose dark:prose-invert">
      <p>{excerpt}</p>
    </section>
    <footer>
      <Link to={url} className="border-0 text-blue-600 hover:underline">
        Read this article →
      </Link>
    </footer>
  </article>
);
