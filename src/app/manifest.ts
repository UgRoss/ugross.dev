import { MetadataRoute } from 'next';
import { DEFAULT_META } from '~/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#222',
    categories: ['blog', 'technology'],
    description: DEFAULT_META.description,
    display: 'minimal-ui',
    icons: [
      {
        sizes: '512x512',
        src: '/pwa/pwa-icon.png',
        type: 'image/png',
      },
      {
        purpose: 'any',
        sizes: '512x512',
        src: '/pwa/maskable_icon_x512.png',
        type: 'image/png',
      },
      {
        purpose: 'any',
        sizes: '384x384',
        src: '/pwa/maskable_icon_x384.png',
        type: 'image/png',
      },
      {
        purpose: 'any',
        sizes: '192x192',
        src: 'static/pwa/maskable_icon_x192.png',
        type: 'image/png',
      },
      {
        purpose: 'any',
        sizes: '128x128',
        src: '/pwa/maskable_icon_x128.png',
        type: 'image/png',
      },
      {
        purpose: 'any',
        sizes: '96x96',
        src: '/pwa/maskable_icon_x96.png',
        type: 'image/png',
      },
      {
        purpose: 'any',
        sizes: '72x72',
        src: '/pwa/maskable_icon_x72.png',
        type: 'image/png',
      },
    ],
    lang: 'en-US',
    name: 'Ross Blog',
    short_name: 'Ross Blog',
    start_url: '/',
    theme_color: '#2e3138',
  };
}
