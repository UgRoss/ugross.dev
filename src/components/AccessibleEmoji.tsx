import React from 'react';

interface AccessibleEmojiProps {
  emoji: string;
  description: string;
  style?: React.CSSProperties;
}

export const AccessibleEmoji: React.FC<AccessibleEmojiProps> = ({
  emoji,
  description,
  ...props
}) => (
  <span role="img" aria-label={description} {...props}>
    {emoji}
  </span>
);
