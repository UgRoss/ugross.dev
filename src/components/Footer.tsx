import React from 'react';

interface FooterProps {
  copyrightText: string;
}

export const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className="text-muted text-sm text-center p-xs mt-lg">
      <div className="container">
        <p className="m-xs">{copyrightText}</p>
      </div>
    </footer>
  );
};
