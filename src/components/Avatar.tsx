import Image from 'next/image';
import Link from 'next/link';
import { cn } from '~/utils';

interface AvatarProps {
  src: string;
  alt: string;
  large?: boolean;
  className?: string;
}

export function Avatar({ src, alt, large = false, className }: AvatarProps) {
  const size = large ? 80 : 30;
  const sizeClass = large ? 'h-20 w-20' : 'h-9 w-9';

  return (
    <Image
      src={src}
      alt={alt}
      className={cn('rounded-full bg-zinc-100 object-cover dark:bg-zinc-800', className, sizeClass)}
      width={size}
      height={size}
      priority
    />
  );
}
