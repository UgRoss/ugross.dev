import * as React from 'react';
import styled from 'styled-components';
import TimeToRead from '~/components/TimeToRead';

interface IProps {
  /** Article Title */
  title: string;
  /** Date to use inside <time> tag */
  pubDate: string;
  /** Date to display to user */
  date: string;
  /** Time in minutes to read */
  timeToRead: number;
  /** Article HTML Content */
  html: string;
  children: React.ReactElement | React.ReactElement[];
  className?: string;
}

const PostWrapper = styled.article`
  h1 {
    text-align: center;
    color: var(--titleColor);
    font-weight: 800;
  }

  section {
    color: var(--mutedColor);
    text-align: center;
    small {
      margin: 0 5px;
    }
  }

  .content {
    margin-top: 2rem;
  }
`;

const BlogPost: React.FC<IProps> = ({ children, title, pubDate, date, timeToRead, html, ...props }) => {
  return (
    <PostWrapper {...props}>
      <header>
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
      </header>
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      {children}
    </PostWrapper>
  );
};

export default BlogPost;
