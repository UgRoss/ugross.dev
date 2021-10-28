import React from 'react';
import { graphql, navigate } from 'gatsby';
import { PostDetailsQuery } from '~/types/graphql';
import { Layout } from '~/components/Layout';
import { BlogPost } from '~/components/BlogPost';
import { SEO } from '~/components/SEO';
import { siteConfig } from '~/config/site.config';

interface PostProps {
  data: PostDetailsQuery;
  className?: string;
}

export const Post: React.FC<PostProps> = ({ className, data }) => {
  if (!data.mdx) {
    navigate('/404', { replace: true });
    return null;
  }

  const { frontmatter, body, excerpt, fields } = data.mdx;
  const pageTitle = `${frontmatter.title} | ${siteConfig.name}`;
  const image = frontmatter?.image?.childImageSharp?.resize ?? undefined;
  const tags = frontmatter?.tags?.map((tag) => ({
    name: tag,
    url: `/tags/${tag}`,
  }));

  return (
    <Layout className={className}>
      <SEO
        title={pageTitle}
        description={frontmatter.spoiler || excerpt}
        slug={fields.slug}
        image={image}
      />
      <BlogPost
        author={siteConfig.name}
        authorLink={'/'}
        title={frontmatter.title}
        date={frontmatter.date}
        pubDate={frontmatter.pubDate}
        body={body}
        tags={tags}
      />
    </Layout>
  );
};

Post.defaultProps = {
  className: '',
};

export const query = graphql`
  query postDetails($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        pubDate: date(formatString: "YYYY-MM-DD")
        spoiler
        tags
        image {
          childImageSharp {
            resize(width: 1200) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`;

export default Post;
