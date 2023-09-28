import type { ReactElement, ReactNode } from 'react';
import { isValidElement } from 'react';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function isExternalLink(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}

/** Detect if the user has requested the system use a light or dark color theme */
export function supportsDarkMode(): boolean {
  return window && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function formatDateStringToShortDate(dateStr: string): string {
  const date = new Date(dateStr);
  const isInvalidDate = isNaN(date.getTime());

  if (isInvalidDate) {
    return '';
  }

  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function isReactElement(element: ReactNode): element is ReactElement {
  return isValidElement(element);
}
