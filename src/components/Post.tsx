import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { TimeToRead } from '~/components/TimeToRead';

interface PostProps {
  title: string;
  /** Date to use inside <time> tag */
  pubDate: string;
  /** Date to display to user */
  date: string;
  /** Time to read in minutes */
  timeToRead: number;
  body: string;
  children: React.ReactElement | React.ReactElement[];
  className?: string;
}

export const Post: React.FC<PostProps> = ({
  children,
  title,
  pubDate,
  date,
  timeToRead,
  body,
  className = '',
  ...props
}) => {
  return (
    <div className={`BlogPost ${className}`} {...props}>
      <header>
        <div className="container">
          <h1>{title}</h1>
          <section>
            <small>
              <time dateTime={pubDate}>{date}</time>
            </small>
            <span> • </span>
            <small>
              <TimeToRead minutes={timeToRead} />
            </small>
          </section>
        </div>
      </header>
      <div className="container">
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        {children}
      </div>
    </div>
  );
};
