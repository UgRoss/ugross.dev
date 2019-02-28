import * as React from 'react';
import styled from 'styled-components';

import Link from '../components/Link';
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
          <Link color="#505050" underline={false} to={url}>
            {title}
          </Link>
        </h3>
        <p>
          <small>
            <time dateTime={pubDate || date}>{date}</time> •{' '}
          </small>
          <small>{formatReadingTime(timeToRead)}</small>
        </p>
      </header>
      <section className="content">
        <p>{excerpt}</p>
        <p>
          <Link color="#606f7b" to={url}>
            Read this article →
          </Link>
        </p>
      </section>
    </article>
  );
};

const StyledPostPreview = styled(PostPreview)`
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 2rem;
  h3 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 10px;
  }

  > div:first-child {
    margin-right: 10px;
  }

  footer {
    color: #9eabb3;
    span + span {
      margin-left: 10px;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ebf2f6;
  }
`;

export default StyledPostPreview;
