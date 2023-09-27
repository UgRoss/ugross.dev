import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { isExternalLink } from '~/utils';

interface LinkUnstyledProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  noReferrer?: boolean;
}

export function LinkUnstyled({
  href,
  noReferrer,
  rel,
  ...props
}: PropsWithChildren<LinkUnstyledProps>) {
  if (isExternalLink(href)) {
    const relValue = noReferrer ? `${rel} nofollow noopener noreferrer` : rel;
    const targetValue = props.target ?? '_blank';

    return <a href={href} {...props} rel={relValue} target={targetValue} />;
  }

  return <Link href={href} {...props} />;
}
