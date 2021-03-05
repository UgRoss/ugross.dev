import React from 'react';
import { Link } from '~/components/Link';

interface PostPreviewProps {
  url: string;
  title: string;
  excerpt: string;
  className?: string;
}

export const PostPreview: React.FC<PostPreviewProps> = ({ url, title, excerpt, className = '' }) => (
  <article className={`pt-md pb-md ${className}`}>
    <header>
      <h3>
        <Link to={url} asText={true}>
          {title}
        </Link>
      </h3>
    </header>
    <section>
      <p className="mb-xs">{excerpt}</p>
    </section>
    <footer>
      <Link to={url}>Read this article →</Link>
    </footer>
  </article>
);
