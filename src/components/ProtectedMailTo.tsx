import React, { useCallback } from 'react';
import styled from 'styled-components';

const MailToLink = styled.a`
  &:after {
    content: attr(data-boxName) '@' attr(data-domain) '.' attr(data-tld);
  }
`;

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
    <MailToLink
      href="#"
      data-boxName={boxName}
      data-domain={domain}
      data-tld={tld}
      onClick={handleMailClick}
    />
  );
};
