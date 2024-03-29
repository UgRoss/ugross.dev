import React from 'react';
import { siteConfig } from './config/site.config';

interface HTMLProps {
  headComponents: React.ReactElement | React.ReactElement[];
  body: string;
  postBodyComponents: React.ReactElement | React.ReactElement[];
}

const HTML: React.FC<HTMLProps> = ({ headComponents, body, postBodyComponents }) => {
  return (
    <html lang="en">
      <head>
        <title>{siteConfig.defaultTitle}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Mobile Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {headComponents}

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-con" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <div id="___gatsby" className="site-content" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
