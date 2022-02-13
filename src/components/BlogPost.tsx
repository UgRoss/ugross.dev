import React from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Hero } from '~/components/Hero';
import { Tag } from '~/components/Tag';

interface BlogPostProps {
  title: string;
  /** Date to use inside <time> tag */
  pubDate: string;
  /** Date to display to user */
  date: string;
  author: string;
  authorLink: string;
  tags?: { name: string; url: string }[];
  body: string;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  children,
  title,
  pubDate,
  date,
  author,
  authorLink,
  tags = [],
  body,
  className,
  ...props
}) => (
  <div className={className} {...props}>
    <Hero>
      <div className="container text-center">
        <section className="text-muted dark:text-muted-dark text-sm">
          {`Written by `}
          <Link to={authorLink} className="border-0">{author}</Link>
          {` on `}
          <time dateTime={pubDate}>{date}</time>
        </section>
        <h1 className="text-5xl mt-5 mb-7 font-extrabold dark:text-gray-200">{title}</h1>
        <section className="flex flex-wrap justify-center gap-2">
          {tags.map(({ name, url }) => (
            <Tag href={url} key={name}>
              {name}
            </Tag>
          ))}
        </section>
      </div>
    </Hero>
    <div className="container mt-10">
      <div className="prose dark:prose-invert">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      {children}
    </div>
  </div>
);

export { BlogPost };
