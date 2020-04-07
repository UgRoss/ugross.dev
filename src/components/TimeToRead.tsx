import * as React from 'react';

interface TimeToReadProps {
  minutes: number;
  className?: string;
  style?: React.CSSProperties;
}

export const TimeToRead: React.FC<TimeToReadProps> = ({ minutes, ...props }) => {
  const cups: number = Math.round(minutes / 5);

  return (
    <span {...props}>{`${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`}</span>
  );
};
