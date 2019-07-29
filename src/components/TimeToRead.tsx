import * as React from 'react';

interface IProps {
  minutes: number;
  className?: string;
  style?: React.CSSProperties;
}

const TimeToRead: React.FC<IProps> = ({ minutes, ...props }) => {
  const cups: number = Math.round(minutes / 5);

  return <span {...props}>{`${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`}</span>;
};

export default TimeToRead;
