import React from 'react';
import { Helmet } from 'react-helmet';
import { siteConfig } from '~/config/site.config';

interface SEOProps {
  description?: string;
  image?: string;
  slug?: string;
  title: string;
}

export const SEO: React.FC<SEOProps> = ({ slug = '', title, description, image, children }) => {
  const metaDescription = description || siteConfig.defaultDescription;
  const metaImage = image ? `${siteConfig.siteUrl}/${image}` : null;
  const metaTitle = title || siteConfig.defaultTitle;
  const url = `${siteConfig.siteUrl}${slug}`;

  return (
    <Helmet>
      <html lang="en" />

      <title>{metaTitle}</title>

      <meta property="og:url" content={url} />
      <meta property="og:title" content={metaTitle} />

      <meta name="description" content={metaDescription} />
      <meta name="og:description" content={metaDescription} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteConfig.twitter} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {metaImage && <meta property="og:image" content={metaImage} />}
      {metaImage && <meta property="twitter:image" content={metaImage} />}

      {children}
    </Helmet>
  );
};
