import React from 'react';
import { capitalize } from '~/utils';
import { siteConfig } from '~/config/site.config';

export const SocialLinksList: React.FC = () => {
  return (
    <>
      {siteConfig.socialLinks.map(({ name, url }, index: number) => (
        <span key={name}>
          <a
            href={url}
            type={name}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link social-link--${name}`}
          >
            {capitalize(name)}
          </a>
          {siteConfig.socialLinks.length - 1 === index ? '' : ', '}
        </span>
      ))}
    </>
  );
};
