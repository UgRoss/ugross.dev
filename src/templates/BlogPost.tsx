import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import PostAuthor from '../components/PostAuthor';
import PrevNextPosts from '../components/PrevNextPosts';
import SEO from '../components/SEO';

interface IProps {
  className?: string;
  pageContext: IGraphQL.PageContext;
  data: {
    markdownRemark: IGraphQL.Post;
  };
}

const BlogPost = ({ className, data, pageContext }: IProps) => {
  const { frontmatter, html, timeToRead, excerpt } = data.markdownRemark;

  return (
    <Layout className={className} footer={false}>
      <SEO
        title={frontmatter.title}
        description={excerpt || ''}
        slug={pageContext.slug}
      />
      <article>
        <header>
          <h1 className="post-title">{frontmatter.title}</h1>
          <section className="post-details">
            <time dateTime={frontmatter.pubDate}>{frontmatter.date}</time>
            <span>{`${timeToRead} min to read`}</span>
          </section>
        </header>
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        <PostAuthor />
        <PrevNextPosts prev={pageContext.previous} next={pageContext.next} />
      </article>
    </Layout>
  );
};

const StyledBlogPost = styled(BlogPost)`
  .post-title {
    text-align: center;
    color: var(--titleColor);
    font-weight: 800;
  }

  .post-details {
    color: var(--mutedColor);
    text-align: center;
    time + span,
    span + span {
      margin-left: 10px;
      position: relative;
      &:before {
        content: ' ';
        background: var(--mutedColor);
        width: 3px;
        height: 3px;
        border-radius: 50%;
        display: inline-block;
        top: 8px;
        left: -7px;
        position: absolute;
      }
    }
  }

  .content {
    margin-top: 2rem;
  }
`;

export default StyledBlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        pubDate: date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
