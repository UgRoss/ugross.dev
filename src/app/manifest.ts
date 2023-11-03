import { MetadataRoute } from 'next';
import { DEFAULT_META } from '~/config';

const maskableIconSizes = [512, 384, 192, 128, 96, 72];
const maskableIcons: MetadataRoute.Manifest['icons'] = maskableIconSizes.map((size) => ({
  purpose: 'any',
  sizes: `${size}x${size}`,
  src: `/pwa/maskable_icon_x${size}.png`,
  type: 'image/png',
}));

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
      ...(maskableIcons ?? []),
    ],
    lang: 'en-US',
    name: 'Ross Blog',
    short_name: 'Ross Blog',
    start_url: '/',
    theme_color: '#2e3138',
  };
}
