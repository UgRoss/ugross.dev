import type { Preview } from '@storybook/react';
import '../src/styles/index.css';
import './style.css';

const preview: Preview = {
  // decorators: [
  //   (Story) => (
  //     <div>
  //     </div>
  //   )
  // ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    darkMode: {
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
