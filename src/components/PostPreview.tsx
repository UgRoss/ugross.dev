import * as React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import { formatReadingTime } from '../utils';

interface IProps {
  url: string;
  title: string;
  date: string;
  pubDate?: string;
  excerpt: string;
  className?: string;
  timeToRead?: number;
}

const PostPreview: React.FunctionComponent<IProps> = ({
  url,
  title,
  date,
  pubDate,
  excerpt,
  className,
  timeToRead,
}) => {
  return (
    <article className={className}>
      <header>
        <h3>
          <Link to={url}>{title}</Link>
        </h3>
        <p>
          <small>
            <time dateTime={pubDate || date}>{date}</time>
            <span> • </span>
          </small>
          <small>{formatReadingTime(timeToRead)}</small>
        </p>
      </header>
      <section className="content">
        <p>{excerpt}</p>
      </section>
      <footer>
        <Link to={url}>Read this article →</Link>
      </footer>
    </article>
  );
};

const StyledPostPreview = styled(PostPreview)`
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 2rem;

  h3 {
    margin-bottom: 5px;
    color: var(--titleColor);
  }

  a {
    color: var(--titleLinkColor);
  }

  p {
    margin-bottom: 10px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--separatorColor);
  }
`;

export default StyledPostPreview;
