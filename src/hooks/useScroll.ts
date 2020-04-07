import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const getPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
});

export const useScroll = (throttleTimeout = 500) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const scrollHandler = throttle(() => setPosition(getPosition), throttleTimeout);
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return position;
};
