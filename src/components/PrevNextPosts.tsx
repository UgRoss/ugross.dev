import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface ISimplifiedArticle {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

interface IProps {
  prev: ISimplifiedArticle;
  next: ISimplifiedArticle;
}

/**
 * @name PrevNextPosts
 * Render prev and next posts items for a blog post
 * @render react
 * @example
 * <PrevNextPosts
 *   prev={ { fields: {slug: '/post-1'}, frontmatter: {title: 'Hello'} } }
 * />
 */
const PrevNextPosts = ({ prev, next }: IProps) => {
  /** Just return nothing if both posts are missing */
  if (!prev && !next) {
    return null;
  }

  return (
    <Wrapper>
      {prev && (
        <Link to={prev.fields.slug} rel="prev" className="with-underline">
          {`← ${prev.frontmatter.title}`}
        </Link>
      )}
      {next && (
        <Link
          to={next.fields.slug}
          rel="next"
          style={{ marginLeft: 'auto' }}
          className="with-underline"
        >
          {`${next.frontmatter.title} →`}
        </Link>
      )}
    </Wrapper>
  );
};

export default PrevNextPosts;
