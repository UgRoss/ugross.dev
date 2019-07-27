import * as React from 'react';
import styled from 'styled-components';
import { bottomPlacement, leftPlacement, rightPlacement, tooltipBase, topPlacement } from './styles';

export interface IProps {
  /**
   * React element to which we will add class to show tooltip
   */
  children: React.ReactElement;
  /**
   * Tooltip content/text
   * @default undefined
   */
  content: string;
  /**
   * Tooltip placement
   * @default bottom
   */
  placement?: 'top' | 'bottom' | 'right' | 'left';

  className?: string;
}

/**
 * @render react
 * @name Avatar
 * @description Display prompt information for mouse hover.
 * @example
 * <Tooltip content="Top prompts info" placement="top">
 *  <Button>Top Tooltip</Button>
 * </Tooltip>
 */
export const Index: React.FunctionComponent<IProps> = ({ children, content, className }) => {
  let childrenCopy: typeof children;
  try {
    childrenCopy = React.Children.only(children);
  } catch (err) {} // eslint-disable-line

  if (!childrenCopy) {
    return <span>Wrong Element</span>;
  }

  return React.cloneElement(childrenCopy, {
    className,
    'data-content': content,
  });
};

/** Avatar with styles */
const StyledTooltip = styled(Index)`
  ${tooltipBase}
  ${(props: IProps) => {
    switch (props.placement) {
      case 'bottom':
        return bottomPlacement;
      case 'right':
        return rightPlacement;
      case 'left':
        return leftPlacement;
      default:
        return topPlacement;
    }
  }};
`;

export default StyledTooltip;
