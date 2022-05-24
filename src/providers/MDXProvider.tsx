import React from 'react';
import { MDXProvider as OriginalMDXProvider } from '@mdx-js/react';
import { Code } from '~/components/Code';
import { Alert } from '~/components/Alert';
import { ProtectedMailTo } from '~/components/ProtectedMailTo';

type MDXProviderProps = React.ComponentProps<typeof OriginalMDXProvider>;

export const MDXProvider: React.FC<MDXProviderProps> = ({ children, ...props }) => (
  <OriginalMDXProvider
    {...props}
    components={{
      Alert: (props) => <Alert {...props} />,
      ProtectedMailTo: (props) => <ProtectedMailTo {...props} />,
      pre: function preCodeBlock(preProps) {
        const isCodeHTMLElement =
          React.isValidElement(preProps?.children) && preProps.children.type === 'code';

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
