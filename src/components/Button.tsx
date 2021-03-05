import styled, { css } from 'styled-components';

interface ButtonProps {
  buttonType?: 'primary' | 'tint' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
}

const buttonSizes = {
  sm: css`
    padding: var(--space-xxs) var(--space-xs);
  `,
  md: css`
    padding: var(--space-xs) var(--space-sm);
  `,
  lg: css`
    padding: var(--space-sm) var(--space-md);
  `,
};

const Button = styled.button<ButtonProps>`
  ${(props) => buttonSizes[props.size || 'md']}
  color: ${(props) => `var(--button-${props.buttonType}-color)`};
  background-color: ${(props) => `var(--button-${props.buttonType}-background)`};
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  cursor: pointer;
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  text-decoration: none;
  transition: background, background-color 0.35s ease;
  outline: none;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    color: ${(props) => `var(--button-${props.buttonType}-color-hover)`};
    background-color: ${(props) => `var(--button-${props.buttonType}-background-hover)`};
  }

  /** Remove link styles */
  &:visited {
    color: ${(props) => `var(--button-${props.buttonType}-color)`};
  }

  &:focus {
    box-shadow: none;
  }
`;

Button.defaultProps = {
  buttonType: 'primary',
  size: 'md',
  block: false,
};

export { Button };
