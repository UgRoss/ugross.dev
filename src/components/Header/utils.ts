import type { HeaderNavItem, HeaderNavItemDropdown } from './HeaderNavItem';

export function isHeaderNavItemDropdown(item: HeaderNavItem): item is HeaderNavItemDropdown {
  return (item as HeaderNavItemDropdown).items !== undefined;
}
