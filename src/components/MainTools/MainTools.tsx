import * as React from 'react';
import { siteConfig } from '~/config/site.config';
import './MainTools.scss';

export const MainTools: React.FC = () => {
  return (
    <div className="MainTools">
      {siteConfig.mainToolsList.map(({ name, img }) => (
        <div key={name} className="MainTools__toolItem">
          <img src={img} alt={name} />
          <small>{name}</small>
        </div>
      ))}
    </div>
  );
};
