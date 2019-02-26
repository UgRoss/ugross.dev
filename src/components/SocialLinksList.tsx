import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { capitalize } from '../utils';
import SocialLink from './SocialLink';

interface SocialLinks {
  facebook: string;
  github: string;
  linkedIn: string;
}

interface QueryData {
  site: { siteMetadata: { socialLinks: SocialLinks } };
}

class SocialLinksList extends React.PureComponent<{}> {
  /** Content renders here */
  private renderContent = (data: QueryData) => {
    const socialLinks = data.site.siteMetadata.socialLinks;
    return Object.keys(socialLinks).map(
      (socialKey: keyof SocialLinks, index) => (
        <span key={socialKey}>
          <SocialLink
            href={socialLinks[socialKey]}
            type={socialKey.toLowerCase()}
            target="_blank"
          >
            {capitalize(socialKey)}
          </SocialLink>
          {Object.keys(socialLinks).length - 1 === index ? '' : ', '}
        </span>
      )
    );
  };

  public render() {
    const query = graphql`
      query SocialLinksQuery {
        site {
          siteMetadata {
            socialLinks {
              facebook
              linkedIn
              github
            }
          }
        }
      }
    `;

    return <StaticQuery query={query} render={this.renderContent} />;
  }
}

export default SocialLinksList;
