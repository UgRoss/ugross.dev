import React from 'react';
import styled, { css } from 'styled-components';
import sunImg from './assets/sun.svg';
import moonImg from './assets/moon.svg';

const ToggleWrapper = styled.div<{ toggled: boolean }>`
  display: inline-block;
  position: relative;
  width: 50px;
  min-height: 25px;
  border-radius: 15px;
  overflow: hidden;
  background: #636b78;
  z-index: 2;
  cursor: pointer;

  .clip {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 3px solid transparent;
    box-shadow: inset 0 0 0 2px #f2f5f9;
    transition: transform 0.5s ease;
    overflow: hidden;
    ${props => props.toggled && `transform: translateX(calc(50px - 24px));`};
  }

  .dark-mode {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    background: #f2f5f9;
    z-index: 10;
  }

  img:first-of-type {
    position: absolute;
    left: 4px;
    top: 4px;
    transform: translate(-20px, -20px);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.8s ease;

    ${props =>
      props.toggled &&
      css`
        transform: translate(0);
        opacity: 1;
      `}
  }

  img:last-of-type {
    position: absolute;
    right: 4px;
    top: 4px;
    z-index: 1;
    transform: translateX(0);
    transition: transform 0.5s ease, opacity 0.8s ease;
    ${props =>
      props.toggled &&
      css`
        transform: translate(20px, 20px);
        opacity: 0;
      `}
  }
`;

interface IProps {
  onClick: () => void;
  toggled: boolean;
}

const Switcher: React.FC<IProps> = ({ onClick, toggled }) => (
  <ToggleWrapper toggled={toggled} onClick={onClick}>
    <img src={moonImg} width="17" height="17" role="presentation" alt="moon" />
    <img src={sunImg} width="18" height="18" role="presentation" alt="Sun" />
    <div className="clip">
      <div className="dark-mode" />
    </div>
  </ToggleWrapper>
);

export default Switcher;
