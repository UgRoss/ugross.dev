import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Hero } from '~/components/Hero';
import { Tag } from '~/components/ui/Tag';

interface BlogPostProps {
  title: string;
  /** Date to use inside <time> tag */
  pubDate: string;
  /** Date to display to user */
  date: string;
  author?: string;
  authorLink?: string;
  tags?: { name: string; url: string }[];
  coverImage?: { url: string; width?: number | null; height?: number | null };
  mdxSourceContent: MDXRemoteSerializeResult;
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
  mdxSourceContent,
  coverImage,
  className,
  ...props
}) => (
  <div className={className} {...props}>
    <Hero>
      <div className="container text-center">
        {author && authorLink && (
          <section className="text-sm text-muted">
            {`Written by `}
            <Link href={authorLink}>
              <a className="border-0">{author}</a>
            </Link>
            {` on `}
            <time dateTime={pubDate}>{date}</time>
          </section>
        )}
        <h1 className="mt-5 text-4xl font-bold text-black dark:text-white">{title}</h1>
        <section className="mt-6 flex flex-wrap justify-center gap-2">
          {tags.map(({ name, url }) => (
            <Tag href={url} key={name}>
              {name}
            </Tag>
          ))}
        </section>
      </div>
    </Hero>
    <article className="container relative mt-5">
      {coverImage && (
        <div className="mb-5">
          <Image
            src={coverImage.url}
            alt="Picture of the author"
            layout="responsive"
            width={coverImage.width || 0}
            height={coverImage.height || 0}
          />
        </div>
      )}
      <div className="dark:prose-dark prose dark:prose-invert">
        <MDXRemote {...mdxSourceContent} />
      </div>
      {children}
    </article>
  </div>
);

export { BlogPost };
