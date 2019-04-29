import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { capitalize } from '../utils';
import SocialLink from './SocialLink';

interface ISocialLinks {
  facebook: string;
  github: string;
  linkedIn: string;
}

interface IQueryData {
  site: { siteMetadata: { socialLinks: ISocialLinks } };
}

class SocialLinksList extends React.PureComponent<{}> {
  /** Content renders here */
  private renderContent = (data: IQueryData) => {
    const { socialLinks } = data.site.siteMetadata;
    return Object.keys(socialLinks).map(
      (socialKey: keyof ISocialLinks, index) => (
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
