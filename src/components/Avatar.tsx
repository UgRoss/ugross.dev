import React from 'react';
import styled from 'styled-components';

interface AvatarProps {
  name: string;
  img?: string;
  /** Avatar size based on `rem` */
  size?: number;
}

const AvatarWrapper = styled.div<{ size: number; name: string }>`
  font-size: ${(props) => props.size / 2}rem;
  max-height: ${(props) => props.size}rem;
  max-width: ${(props) => props.size}rem;
  border-radius: 50%;
  background: var(--color-primary-dark);
  color: var(--text-color-on-primary-color-bg);
  display: inline-block;
  font-weight: 300;
  line-height: 1.25;
  margin: 0;
  position: relative;
  vertical-align: middle;

  &[data-initial]::before {
    color: currentColor;
    content: ${(props) => props.name};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
`;

const AvatarImage = styled.img`
  border-radius: 50%;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 0;
`;

const Avatar: React.FC<AvatarProps> = ({ name, img, size = 2, ...props }) => {
  return (
    <AvatarWrapper name={name} size={size} {...props}>
      {img && <AvatarImage src={img} alt={name} />}
    </AvatarWrapper>
  );
};

export default Avatar;
