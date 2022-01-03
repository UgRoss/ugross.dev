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
  <article className={classNames(className, 'first:mt-10 py-10 border-b-2 border-gray-200')}>
    <header>
      <h2 className="text-2xl text-gray-700 hover:text-gray-600">
        <Link to={url} asText={true} className="border-0 font-bold">
          {title}
        </Link>
      </h2>
    </header>
    <section className="prose dark:prose-invert">
      <p className="mb-2 mt-2">{excerpt}</p>
    </section>
    <footer>
      <Link to={url} className="border-0 text-blue-600 hover:underline">
        Read this article →
      </Link>
    </footer>
  </article>
);
