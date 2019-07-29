import { graphql } from 'gatsby';
import * as React from 'react';

import Layout from '~/components/Layout';
import PostAuthor from '~/components/PostAuthor';
import PrevNextPosts from '~/components/PrevNextPosts';
import BlogPost from '~/components/BlogPost';
import SEO from '~/components/SEO';

interface IProps {
  className?: string;
  pageContext: IGraphQL.PageContext;
  data: {
    markdownRemark: IGraphQL.Post;
  };
}

const Post = ({ className, pageContext, data }: IProps) => {
  const { frontmatter, html, timeToRead, excerpt } = data.markdownRemark;

  return (
    <Layout className={className} footer={false}>
      <SEO title={frontmatter.title} description={excerpt || ''} slug={pageContext.slug} />
      <BlogPost
        title={frontmatter.title}
        date={frontmatter.date}
        pubDate={frontmatter.pubDate}
        timeToRead={timeToRead}
        html={html}
      >
        <PostAuthor />
        <PrevNextPosts prev={pageContext.previous} next={pageContext.next} />
      </BlogPost>
    </Layout>
  );
};

export default Post;

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
