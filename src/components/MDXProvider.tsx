import React from 'react';
import { MDXProvider as OriginalMDXProvider, MDXProviderProps } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import { Code } from '~/components/Code';

export const MDXProvider: React.FC<MDXProviderProps> = ({ children, ...props }) => (
  <OriginalMDXProvider
    {...props}
    components={{
      pre: function preCodeBlock(preProps) {
        const props = preToCodeBlock(preProps);
        // if there's a codeString and some props, we passed the test
        if (props) {
          return <Code {...props} />;
        }
        // it's possible to have a pre without a code in it
        return <pre {...preProps} />;
      },
    }}
  >
    {children}
  </OriginalMDXProvider>
);

export default MDXProvider;
