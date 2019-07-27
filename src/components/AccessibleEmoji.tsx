import React from 'react';

interface IProps {
  /** Emoji itself 😊 */
  value: string;
  /** Emoji description */
  description: string;
  style?: React.CSSProperties;
}

const Emoji: React.FC<IProps> = ({ value, description, ...props }: IProps) => (
  <span role="img" aria-label={description} {...props}>
    {value}
  </span>
);

export default Emoji;
