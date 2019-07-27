import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`;

interface IProps {
  description?: string;
  image?: string;
  slug?: string;
  title: string;
}

class SEO extends React.PureComponent<IProps> {
  public static defaultProps = {
    slug: '',
  };

  private renderComponent = (data: any) => {
    const { image, title, description, slug, children } = this.props;

    const { siteMetadata } = data.site;
    const metaDescription = description || siteMetadata.description;
    const metaImage = image ? `${siteMetadata.siteUrl}/${image}` : null;
    const url = `${siteMetadata.siteUrl}${slug}`;

    return (
      <Helmet title={`%s - ${siteMetadata.title}`} defaultTitle={siteMetadata.title}>
        <html lang="en" />

        {title && <title>{title}</title>}

        <meta property="og:url" content={url} />
        <meta property="og:title" content={title || siteMetadata.title} />

        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={siteMetadata.social.twitter} />
        <meta name="twitter:title" content={title || siteMetadata.title} />
        <meta name="twitter:description" content={metaDescription} />

        {metaImage && <meta property="og:image" content={metaImage} />}
        {metaImage && <meta property="twitter:image" content={metaImage} />}

        {children}
      </Helmet>
    );
  };

  public render() {
    return <StaticQuery query={query} render={this.renderComponent} />;
  }
}

export default SEO;
