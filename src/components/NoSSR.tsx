import React, { useState, useEffect } from 'react';

interface NoSSRProps {
  children: React.ReactElement;
  fallback?: React.ReactElement;
}

/** Component that renders children only if it's not SSR  */
export const NoSSR: React.FC<NoSSRProps> = ({ children, fallback = null }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return fallback;
  }

  return children;
};
