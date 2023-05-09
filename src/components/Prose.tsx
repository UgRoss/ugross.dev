import React from 'react';
import { cn } from '@/utils';

interface ProseProps {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export const Prose = ({ children, className, as: Component = 'div' }: ProseProps) => {
  return (
    <Component className={cn('prose-sm  dark:prose-invert sm:prose', className)}>
      {children}
    </Component>
  );
};
