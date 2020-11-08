import React from 'react';
import { siteConfig } from '~/config/site.config';

export const SocialLinksList: React.FC = () => {
  return (
    <>
      {siteConfig.socialLinks.map(({ name, url }, index: number) => (
        <span key={name}>
          <a href={url} type={name} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
          {siteConfig.socialLinks.length - 1 === index ? '' : ', '}
        </span>
      ))}
    </>
  );
};
