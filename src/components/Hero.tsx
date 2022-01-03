import React from 'react';

interface HeroProps {
  className?: string;
  children: React.ReactElement;
}

export const Hero: React.FC<HeroProps> = ({ children, className = '' }) => (
  <div className={`pt-14 pb-10 bg-white mb-5 ${className}`}>{children}</div>
);
