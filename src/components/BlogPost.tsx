import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { TimeToRead } from '~/components/TimeToRead';
import Hero from '~/components/Hero';

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
  timeToRead = timeToRead ?? 5;

  return (
    <div className={className} style={{ marginTop: '2rem' }} {...props}>
      <Hero as="header">
        <div className="container">
          <h1 className="font-extrabold mt-0">{title}</h1>
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
      </Hero>
      <div className="BlogPost__content container">
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        {children}
      </div>
    </div>
  );
};

export default BlogPost;
