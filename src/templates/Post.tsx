import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout } from '~/components/Layout';
import { PostAuthor } from '~/components/PostAuthor';
import { PrevNextPosts } from '~/components/PrevNextPosts';
import { Post as BlogPost } from '~/components/Post';
import { SEO } from '~/components/SEO';
import { siteConfig } from '~/config/site.config';

interface PostProps {
  className?: string;
  pageContext: IGraphQL.PageContext;
  data: {
    markdownRemark: IGraphQL.Post;
  };
}

export const Post = ({ className, pageContext, data }: PostProps) => {
  const { frontmatter, html, timeToRead, excerpt } = data.markdownRemark;
  const pageTitle = `${frontmatter.title} - ${siteConfig.name}`;

  return (
    <Layout className={className} showFooter={false}>
      <SEO title={pageTitle} description={excerpt || ''} slug={pageContext.slug} />
      <BlogPost
        title={frontmatter.title}
        date={frontmatter.date}
        pubDate={frontmatter.pubDate}
        timeToRead={timeToRead}
        html={html}
      >
        <PostAuthor />
        <PrevNextPosts previousPost={pageContext.previous} nextPost={pageContext.next} />
      </BlogPost>
    </Layout>
  );
};

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

export default Post;
