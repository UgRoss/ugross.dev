import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout } from '~/components/Layout';
import { PostAuthor } from '~/components/PostAuthor/PostAuthor';
import { BlogPost } from '~/components/BlogPost';
import { SEO } from '~/components/SEO';
import { siteConfig } from '~/config/site.config';

interface PostProps {
  pageContext: IGraphQL.PageContext;
  data: {
    mdx: IGraphQL.Post;
  };
  className?: string;
}

export const Post = ({ className, pageContext, data }: PostProps) => {
  const { frontmatter, body, timeToRead, excerpt } = data.mdx;
  const pageTitle = `${frontmatter.title} - ${siteConfig.name}`;

  return (
    <Layout className={className} showFooter={false}>
      <SEO title={pageTitle} description={excerpt || ''} slug={pageContext.slug} />
      <BlogPost
        title={frontmatter.title}
        date={frontmatter.date}
        pubDate={frontmatter.pubDate}
        timeToRead={timeToRead}
        body={body}
      >
        <PostAuthor />
      </BlogPost>
    </Layout>
  );
};

Post.defaultProps = {
  className: '',
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
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
