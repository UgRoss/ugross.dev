import { cn } from '@/utils';
import profilePic from '../../public/avatar.png';
import Image from 'next/image';

interface AvatarProps {
  size: 'sm' | 'lg';
  initials: string;
  imgUrl: string;
  status: string;
  className?: string;
}

export const Avatar = ({
  size = 'sm',
  className = '',
  imgUrl,
  status,
  initials,
}: AvatarProps): JSX.Element => {
  const sizes = {
    sm: 'w-8 h-8',
    lg: 'w-20 h-20',
  };

  const avatarClassName = cn(
    'relative inline-flex items-center justify-center bg-gray-100 rounded-full dark:bg-gray-600',
    sizes[size],
    className
  );
  const imageSize = size === 'sm' ? 32 : 80;

  const statusClasses = cn(
    'absolute bottom-0 right-0 text-lg translate-x-1 translate-y-1',
    'flex items-center justify-center',
    'w-8 h-8 rounded-full',
    'bg-white drop-shadow-md'
  );

  return (
    <div className={avatarClassName}>
      {imgUrl ? (
        <Image src={imgUrl} alt="Avatar" width={imageSize} height={imageSize} />
      ) : (
        <div className="flex items-center justify-center rounded-full font-medium text-sm">
          {initials}
        </div>
      )}
      {status && (
        <div className={statusClasses}>
          <span>{status}</span>
        </div>
      )}
    </div>
  );
};
