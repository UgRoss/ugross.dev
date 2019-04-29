import React from 'react';

interface IProps {
  value: string;
  description: string;
}

const Emoji: React.FunctionComponent<IProps> = ({
  value,
  description,
}: IProps) => (
  <span role="img" aria-label={description}>
    {value}
  </span>
);

export default Emoji;
