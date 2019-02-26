// @ts-ignore
import { Link as GatsbyLink } from 'gatsby';
import { darken } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  className?: string;
  /** If needed to render regular anchor element */
  href?: string;
  /** If needed to render gatsby link */
  to?: string;
  rel?: string;
  target?: string;
  style?: React.CSSProperties;
  /**
   * Custom link color
   * @default #409eff
   */
  color?: string;
  /**
   * Remove underline for link hover
   * @default true
   */
  underline?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  /** [Gatsby Link] class name for element when link is active */
  activeClassName?: string;
  /** [Gatsby Link] Styles for element when link is active */
  activeStyle?: React.CSSProperties;
}

const StyledLink = styled(({ component, ...props }) =>
  React.cloneElement(component, {
    ...props,
    color: undefined,
    underline: undefined,
  })
)`
  color: ${props => props.color};
  display: inline-block;
  position: relative;
  text-decoration: none !important;
  transition: all 0.2s;
  &:visited {
    color: ${props => props.color};
  }

  &:hover,
  &:active,
  &.active {
    color: ${props => darken(0.05, props.color)};
    text-decoration: none;
  }

  ${props => (!props.underline ? null : generateUnderlineStyles(props.color))};
`;

/** Util to generate underline styles for our link */
const generateUnderlineStyles = (color: string = '#409eff') => css`
  /**
  * To prevent issues with iOS safari it's better to use pseudo selector
  * for devices with pointer only
  */
  @media (pointer: fine) {
    &:after {
      position: absolute;
      bottom: 0;
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background-color: ${darken(0.05, color)};
      transition: all 0.2s;
    }

    &:hover,
    &:active,
    &.active {
      &:after {
        width: 100%;
      }
    }
  }
`;

/**
 * @name Link
 * Component to create links
 * @render react
 * @example <Link to="/blog" color="#505050" underline={false} />
 */
const Link: React.FunctionComponent<Props> = ({ href, to, ...props }) => {
  return (
    <StyledLink
      component={
        typeof to === 'string' ? <GatsbyLink to={to} /> : <a href={href} />
      }
      {...props}
    />
  );
};

Link.defaultProps = {
  color: '#409eff',
  underline: true,
};

export default Link;
