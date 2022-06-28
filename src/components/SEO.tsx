import React from 'react';
import Head from 'next/head';
import { siteConfig } from '~/configs/site.config';

interface SEOProps {
  description?: string;
  image?: {
    url: string;
    width?: number | null;
    height?: number | null;
  } | null;
  slug?: string;
  keywords?: string[] | null;
  title: string;
  noIndex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  slug = '',
  title,
  description,
  image,
  keywords,
  noIndex = false,
}) => {
  const metaDescription = description || siteConfig.defaultDescription;
  const metaImage = image?.url ? `${siteConfig.siteUrl}${image.url}` : null;
  const metaTitle = title || siteConfig.defaultTitle;
  const keywordsStr = Array.isArray(keywords) ? keywords.join(', ') : null;
  const url = `${siteConfig.siteUrl}${slug}`;

  return (
    <Head>
      <title>{metaTitle}</title>

      <meta name="description" content={metaDescription} key="description" />
      {keywordsStr && <meta name="keywords" content="HTML, CSS, JavaScript" />}
      {noIndex && <meta name="robots" content="noindex" />}

      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:title" content={metaTitle} key="og:title" />
      <meta property="og:description" content={metaDescription} key="og:description" />
      {slug && <link rel="canonical" href={url} />}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteConfig.twitter} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content="@ug_ross" />

      {metaImage && <meta property="og:image" content={metaImage} />}
      {metaImage && <meta property="twitter:image" content={metaImage} />}
      {image?.height && <meta property="og:image:width" content={String(image.height)} />}
      {image?.width && <meta property="og:image:height" content={String(image.width)} />}
    </Head>
  );
};
