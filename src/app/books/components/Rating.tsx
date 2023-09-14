import { memo } from 'react';
import { Star } from '~/components/PhosphorIcons';

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
          className={`text-yellow-300 ${isFilled ? 'text-yellow-300' : 'text-gray-300'}`}
          key={key}
          size={size}
          weight="fill"
        />
      ))}
    </div>
  );
});
