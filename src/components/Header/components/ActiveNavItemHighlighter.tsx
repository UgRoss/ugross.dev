import { cn } from '~/utils';

export function ActiveNavItemHighlighter({ className = '' }: { className?: string }) {
  return (
    <span
      className={cn(
        'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0',
        className
      )}
    />
  );
}
