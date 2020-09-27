import * as React from 'react';
import classNames from 'classnames';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { TimeToRead } from '~/components/TimeToRead';
import './BlogPost.scss';

interface BlogPostProps {
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

export const BlogPost: React.FC<BlogPostProps> = ({
  children,
  title,
  pubDate,
  date,
  timeToRead,
  body,
  className,
  ...props
}) => {
  const postClassName = classNames('BlogPost', className);

  return (
    <div className={postClassName} {...props}>
      <header>
        <div className="container">
          <h1>{title}</h1>
          <section>
            <small>
              <time dateTime={pubDate}>{date}</time>
            </small>
            <span>{' • '}</span>
            <small>
              <TimeToRead minutes={timeToRead} />
            </small>
          </section>
        </div>
      </header>
      <div className="BlogPost__content container">
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        {children}
      </div>
    </div>
  );
};
