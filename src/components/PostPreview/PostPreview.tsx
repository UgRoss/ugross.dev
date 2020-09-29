import * as React from 'react';
import { Link } from 'gatsby';
import { TimeToRead } from '~/components/TimeToRead';
import './PostPreview.scss';

interface PostPreviewProps {
  url: string;
  title: string;
  date: string;
  pubDate?: string;
  excerpt: string;
  className?: string;
  timeToRead?: number;
}

export const PostPreview: React.FC<PostPreviewProps> = ({
  url,
  title,
  date,
  pubDate,
  excerpt,
  className = '',
  timeToRead,
}) => {
  return (
    <div className={`PostPreview ${className}`}>
      <article className="container">
        <header>
          <h3 className="PostPreview__title">
            <Link to={url} className="unstyled">
              {title}
            </Link>
          </h3>
          <p className="PostPreview__meta">
            <time dateTime={pubDate || date}>{date}</time>
            <span className="separator">{' • '}</span>
            <TimeToRead minutes={timeToRead} />
          </p>
        </header>
        <section>
          <p>{excerpt}</p>
        </section>
        <footer>
          <Link to={url} className="button button--tint button--with-active-color">
            Read this article →
          </Link>
        </footer>
      </article>
    </div>
  );
};
