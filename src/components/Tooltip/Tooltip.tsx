import * as React from 'react';
import './Tooltip.scss';

export interface TooltipProps {
  /**
   * Tooltip text
   * @default undefined
   */
  content: string;
  /**
   * Tooltip placement
   * @default bottom
   */
  placement?: 'top' | 'bottom' | 'right' | 'left';

  children: React.ReactElement;
  className?: string;
}

/**
 * @render react
 * @name Tooltip
 * @description Display prompt information for mouse hover.
 * @example
 * <Tooltip content="Top prompts info" placement="top">
 *  <Button>Top Tooltip</Button>
 * </Tooltip>
 */
export const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  content,
  placement = 'bottom',
  className = '',
}) => {
  let childrenCopy: typeof children;
  try {
    childrenCopy = React.Children.only(children);
  } catch (err) {} // eslint-disable-line

  if (!childrenCopy) {
    return <span>Wrong Element</span>;
  }

  return React.cloneElement(childrenCopy, {
    className: `tooltip tooltip--${placement} ${className}`,
    'data-tooltip': content,
  });
};

export default Tooltip;
