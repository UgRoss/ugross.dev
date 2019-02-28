import { graphql } from 'gatsby';
import * as React from 'react';

import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import Profile from '../components/Profile';
import SEO from '../components/SEO';

interface IProps {
  data: {
    posts: IGraphQL.AllMarkdownRemark;
  };
}

class Blog extends React.PureComponent<IProps> {
  private static renderPostPreview({ node }: any) {
    return (
      <PostPreview
        key={node.fields.slug}
        url={node.fields.slug}
        title={node.frontmatter.title}
        excerpt={node.frontmatter.spoiler || node.excerpt}
        date={node.frontmatter.date}
        pubDate={node.frontmatter.pubDate}
        timeToRead={node.timeToRead}
      />
    );
  }

  public render() {
    const posts = this.props.data.posts.edges;

    return (
      <Layout>
        <SEO title="Blog" />
        <Profile />
        {posts.map(Blog.renderPostPreview)}
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            pubDate: date(formatString: "YYYY-MM-DD")
            spoiler
          }
          fields {
            slug
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;

export default Blog;
