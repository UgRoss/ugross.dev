import Image from 'next/image';
import { cn } from '~/utils';

interface AvatarProps {
  alt: string;
  className?: string;
  /**
   * @default md
   */
  size?: 'lg' | 'md' | 'sm';
  src: string;
}

const imageSizes = {
  lg: 80,
  md: 36,
  sm: 24,
};

export function Avatar({ alt, className, size = 'md', src }: AvatarProps) {
  const sizeInPixels = imageSizes[size];

  return (
    <Image
      alt={alt}
      className={cn('rounded-full bg-zinc-100 object-cover dark:bg-zinc-800', className)}
      height={sizeInPixels}
      priority
      src={src}
      width={sizeInPixels}
    />
  );
}
