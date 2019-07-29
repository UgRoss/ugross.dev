import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { capitalize } from '~/utils';
import ThemeContext from '~/context/ThemeContext';
import SocialLink from './SocialLink';

interface ISocialLinks {
  facebook: string;
  github: string;
  linkedin: string;
}

interface IQueryData {
  site: { siteMetadata: { socialLinks: ISocialLinks } };
}

class SocialLinksList extends React.PureComponent<{}> {
  /** Renders social link based on theme */
  private renderLinks = (socialLinks: ISocialLinks, darkMode: boolean) => {
    const keys = Object.keys(socialLinks);

    // For dark mode use simple not colored links
    if (darkMode) {
      return keys.map((socialKey: keyof ISocialLinks, index: number) => (
        <span key={socialKey}>
          <a href={socialLinks[socialKey]} target="_blank" rel="noopener noreferrer" className="with-underline">
            {capitalize(socialKey)}
          </a>
          {keys.length - 1 === index ? '' : ', '}
        </span>
      ));
    }

    // For light mode use the SocialLink component
    return keys.map((socialKey: keyof ISocialLinks, index: number) => (
      <span key={socialKey}>
        <SocialLink href={socialLinks[socialKey]} type={socialKey} target="_blank" rel="noopener noreferrer">
          {capitalize(socialKey)}
        </SocialLink>
        {keys.length - 1 === index ? '' : ', '}
      </span>
    ));
  };

  public render() {
    const query = graphql`
      query SocialLinksQuery {
        site {
          siteMetadata {
            socialLinks {
              facebook
              linkedin
              github
            }
          }
        }
      }
    `;

    return (
      <StaticQuery
        query={query}
        render={(data: IQueryData) => (
          <ThemeContext.Consumer>
            {theme => this.renderLinks(data.site.siteMetadata.socialLinks, theme.dark)}
          </ThemeContext.Consumer>
        )}
      />
    );
  }
}

export default SocialLinksList;
