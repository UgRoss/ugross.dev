import { memo } from 'react';
import { Star } from '~/components/PhosphorIcons';
import { cn } from '~/utils';

interface RatingProps {
  className?: string;
  size?: number;
  value: number;
}

export const Rating = memo(function Rating({ className = '', size = 14, value }: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => ({
    isFilled: index < value,
    key: index,
  }));

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {stars.map(({ isFilled, key }) => (
        <Star
          className={cn({
            'text-gray-300 dark:text-gray-500': !isFilled,
            'text-yellow-300 dark:text-yellow-500': isFilled,
          })}
          key={key}
          size={size}
          weight="fill"
        />
      ))}
    </div>
  );
});
