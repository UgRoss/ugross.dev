import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typing from 'react-typing-animation';

const H1 = styled.h1`
  font-weight: normal;
  font-size: 2rem;
  letter-spacing: -0.01em;
`;

const typingCfg = {
  backspaceSpeed: 20,
  typingSpeed: 60,
};

const WelcomeHeadline = () => {
  return (
    <H1>
      My name is Ross
      <Typing loop speed={60}>
        and I'm <Typing.Speed ms={typingCfg.typingSpeed} />
        a <strong>Front-end</strong> developer
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={'a Front-end developer'.length} speed={typingCfg.backspaceSpeed} />
        <Typing.Speed ms={typingCfg.typingSpeed} />
        a <strong>Product designer</strong>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={'a Product designer'.length} speed={typingCfg.backspaceSpeed} />
        <Typing.Speed ms={typingCfg.typingSpeed} />
        a <strong>Tech fan</strong>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={'a Tech fan'.length} speed={typingCfg.backspaceSpeed} />
      </Typing>{' '}
      living in Ukraine
    </H1>
  );
};

WelcomeHeadline.propTypes = {};

export default WelcomeHeadline;
