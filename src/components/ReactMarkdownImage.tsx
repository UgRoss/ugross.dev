import type { ImgHTMLAttributes } from 'react';
import Image from 'next/image';
import { isExternalLink } from '~/utils';

interface ReactMarkdownImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function ReactMarkdownImage({ alt = '', src }: ReactMarkdownImageProps) {
  if (!src) {
    return null;
  }

  if (isExternalLink(src)) {
    return <img alt={alt} src={src} />;
  } else {
    return <Image alt={alt} height={500} src={src} width={620} />;
  }
}
