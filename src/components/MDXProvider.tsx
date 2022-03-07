import React from 'react';
import { MDXProvider as OriginalMDXProvider, MDXProviderProps } from '@mdx-js/react';
import { Code } from '~/components/Code';

export const MDXProvider: React.FC<MDXProviderProps> = ({ children, ...props }) => (
  <OriginalMDXProvider
    {...props}
    components={{
      pre: function preCodeBlock(preProps) {
        const isCodeHTMLElement =
          React.isValidElement(preProps?.children) && preProps.children.props.mdxType === 'code';

        if (isCodeHTMLElement) {
          const { children: codeString, ...restChildProps } = (
            preProps?.children as React.ReactElement
          ).props;

          return <Code codeString={codeString.trim()} {...restChildProps} />;
        }

        return <pre {...preProps} />;
      },
    }}
  >
    {children}
  </OriginalMDXProvider>
);
