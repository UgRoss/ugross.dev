import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <div className="container">
        <p>
          © Copyright
          {` ${currentYear} `}
          Rostyslav Ugryniuk
        </p>
      </div>
    </div>
  );
};
