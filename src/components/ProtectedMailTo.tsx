import React, { useCallback } from 'react';

interface ProtectedMailToProps {
  boxName: string;
  domain: string;
  tld: string;
}

export const ProtectedMailTo: React.FC<ProtectedMailToProps> = ({ boxName, domain, tld }) => {
  const handleMailClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      window.location.href = `mailto:${boxName}@${domain}.${tld}`;
      e.preventDefault();
    },
    [boxName, domain, tld]
  );

  return (
    <a
      href="#"
      data-boxName={boxName}
      data-domain={domain}
      data-tld={tld}
      onClick={handleMailClick}
      className="mailToLink"
    >
      <span className="sr-only">Email Address</span>
    </a>
  );
};
