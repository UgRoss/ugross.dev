import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface SimplifiedArticle {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

interface Props {
  prev: SimplifiedArticle;
  next: SimplifiedArticle;
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
const PrevNextPosts = ({ prev, next }: Props) => {
  /** Just return nothing if both posts are missing */
  if (!prev && !next) {
    return null;
  }

  return (
    <Wrapper>
      {prev && (
        <Link to={prev.fields.slug} rel="prev">
          ← {prev.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link to={next.fields.slug} rel="next" style={{ marginLeft: 'auto' }}>
          {next.frontmatter.title} →
        </Link>
      )}
    </Wrapper>
  );
};

export default PrevNextPosts;
