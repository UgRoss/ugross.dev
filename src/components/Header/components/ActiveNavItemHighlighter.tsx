interface ActiveNavItemHighlighterProps {
  className?: string;
}

export function ActiveNavItemHighlighter({ className = '' }: ActiveNavItemHighlighterProps) {
  return (
    <span
      className={`absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 ${className}`}
    />
  );
}
