import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

interface Position {
  x: number;
  y: number;
}

const getPosition = (): Position => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
});

export const useScroll = (throttleTimeout = 500): Position => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const scrollHandler = throttle(() => setPosition(getPosition), throttleTimeout);

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return position;
};
