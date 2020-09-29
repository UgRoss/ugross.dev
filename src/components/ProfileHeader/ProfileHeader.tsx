import * as React from 'react';
import { siteConfig } from '~/config/site.config';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';
import './ProfileHeader.scss';

export const ProfileHeader: React.FC = () => (
  <div className="ProfileHeader">
    <div>
      <img className="ProfileHeader__avatar" src={siteConfig.avatar} alt={siteConfig.name} />
    </div>
    <div>
      <h3>
        <AccessibleEmoji emoji="👋" description="Hello" />
      </h3>
      <h1 className="ProfileHeader__title">
        <span className="text-secondary">Hi,</span>
        {` I am ${siteConfig.name}`}
      </h1>
      <h2 className="ProfileHeader__subtitle font-jetbrains">{siteConfig.jobTitle}</h2>
    </div>
  </div>
);
