import { lighten } from 'polished';
import styled from 'styled-components';

/** Social networks colors */
const colors: Map<socialName, string> = new Map();
colors.set('facebook', '#3B5998');
colors.set('twitter', '#1DA1F2');
colors.set('github', '#181717');
colors.set('linkedin', '#0077B5');

export type socialName = 'facebook' | 'github' | 'twitter' | 'linkedin';
interface IProps {
  type: socialName;
}

/**
 * @name SocialLink
 * @description Styled `Link` component
 */
const SocialLink = styled.a.attrs({
  className: 'with-underline',
})<IProps>`
  color: ${props => colors.get(props.type)};
  font-weight: bold;
  &:visited {
    color: ${props => colors.get(props.type)};
  }
  &:hover {
    color: ${props => lighten(0.1, colors.get(props.type))};
    &:after {
      background-color: ${props => lighten(0.1, colors.get(props.type))};
    }
  }
`;

export default SocialLink;
