export type HeaderNavItemLink = {
  href: string;
  label: string;
};

export type HeaderNavItemDropdown = {
  items: HeaderNavItemLink[];
  label: string;
};

export type HeaderNavItem = HeaderNavItemDropdown | HeaderNavItemLink;
