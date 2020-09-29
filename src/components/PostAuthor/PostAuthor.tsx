import React from 'react';
import { Link } from 'gatsby';
import { siteConfig } from '~/config/site.config';
import avatar from '~/images/avatar.jpg';
import './PostAuthor.scss';

/** Author block inside blog post */
export const PostAuthor: React.FC = () => {
  return (
    <div className="PostAuthor">
      <img src={avatar} alt={siteConfig.name} className="PostAuthor__avatar" />
      <div>
        <Link to="/" className="unstyled PostAuthor__name">
          {siteConfig.name}
        </Link>
        <p className="PostAuthor__description">{siteConfig.shortBio}</p>
      </div>
    </div>
  );
};
