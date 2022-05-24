import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Hero } from '~/components/Hero';
import { Tag } from '~/components/Tag';

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
          <section className="text-muted text-sm">
            {`Written by `}
            <Link href={authorLink}>
              <a className="border-0">{author}</a>
            </Link>
            {` on `}
            <time dateTime={pubDate}>{date}</time>
          </section>
        )}
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
    <article className="container mt-5 relative">
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
      <div className="prose dark:prose-invert">
        <MDXRemote {...mdxSourceContent} />
      </div>
      {children}
    </article>
  </div>
);

export { BlogPost };
