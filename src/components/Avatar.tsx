import Image from 'next/image';
import Link from 'next/link';
import { cn } from '~/utils';

interface AvatarProps {
  src: string;
  alt: string;
  /**
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const imageSizes = {
  sm: 24,
  md: 36,
  lg: 80,
};

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  const sizeInPixels = imageSizes[size];

  return (
    <Image
      src={src}
      alt={alt}
      className={cn('rounded-full bg-zinc-100 object-cover dark:bg-zinc-800', className)}
      width={sizeInPixels}
      height={sizeInPixels}
      priority
    />
  );
}
