import React from 'react';

export interface TooltipProps {
  /**
   * Tooltip text
   * @default undefined
   */
  content: string;

  children: React.ReactElement;
  className?: string;
}

/**
 * @description Display prompt information for mouse hover.
 * @example
 * <Tooltip content="Tooltip Text">
 *  <Button>Menu</Button>
 * </Tooltip>
 */
export const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  content,
  className = '',
}) => {
  let childrenCopy: typeof children | null = null;

  try {
    childrenCopy = React.Children.only(children);
  } catch (err) {}

  if (!childrenCopy) {
    return <span>Wrong Element</span>;
  }

  return React.cloneElement(childrenCopy, {
    ...childrenCopy.props,
    className: `tooltip ${className} ${childrenCopy.props.className}`,
    'data-tooltip': content,
  });
};

export default Tooltip;
