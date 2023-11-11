import { siteConfig } from './site';

export const seoConfig = {
  defaultDescription: siteConfig.shortBio,
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
};
