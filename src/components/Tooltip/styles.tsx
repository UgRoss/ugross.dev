import { css } from 'styled-components';

export const tooltipBase = css`
  position: relative;
  &:after {
    background: rgba(69, 77, 93, 0.9);
    border-radius: 0.3rem;
    font-size: 0.9em;
    line-height: 1.2em;
    color: #fff;
    content: attr(data-content);
    display: block;
    max-width: 320px;
    opacity: 0;
    overflow: hidden;
    padding: 0.2rem 0.4rem;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    transition: all 0.3s ease;
    white-space: pre;
    z-index: 300;
  }
  &[disabled],
  &.disabled {
    pointer-events: auto;
  }
`;

export const bottomPlacement = css`
  &:after {
    bottom: auto;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -0.25rem);
  }
  &:focus,
  &:hover {
    &:after {
      opacity: 1;
      transform: translate(-50%, 0.2rem);
    }
  }
`;

export const rightPlacement = css`
  &:after {
    bottom: 50%;
    left: 100%;
    transform: translate(-0.2rem, 50%);
  }
  &:focus,
  &:hover {
    &:after {
      opacity: 1;
      transform: translate(0.2rem, 50%);
    }
  }
`;

export const leftPlacement = css`
  &:after {
    bottom: 50%;
    left: auto;
    right: 100%;
    transform: translate(0.4rem, 50%);
  }
  &:focus,
  &:hover {
    &:after {
      opacity: 1;
      transform: translate(-0.2rem, 50%);
    }
  }
`;

export const topPlacement = css`
  &:after {
    left: 50%;
    bottom: 100%;
  }
  &:hover,
  &:focus {
    &:after {
      opacity: 1;
      transform: translate(-50%, -0.2rem);
    }
  }
`;
