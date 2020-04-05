import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const getPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
});

export const useScroll = (throttleTimeout = 500) => {
  const [position, setPosition] = useState(getPosition());

  useEffect(() => {
    const handler = throttle(() => setPosition(getPosition), throttleTimeout);
    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return position;
};
