import { useMDXComponent } from 'next-contentlayer/hooks';
import { Alert } from '@/ui/Alert';
import { Code } from '@/components/Code';
import { POSTS_IMAGES_FOLDER } from '@/configs/site.config';
import React from 'react';

interface MDXContentProps {
  content: string;
}

export const MDXContent = ({ content }: MDXContentProps) => {
  const MDXContent = useMDXComponent(content);

  return (
    <MDXContent
      components={{
        Alert,
        img: (props) => {
          let imageSrc = props.src;
          const isRelativePath = imageSrc?.startsWith('./');
          const style = {
            marginTop: '2rem',
            marginBottom: '2rem',
          };

          if (isRelativePath) {
            imageSrc = imageSrc?.replace('./', POSTS_IMAGES_FOLDER);
          }

          return <img {...props} src={imageSrc} style={style} />;
        },
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
    />
  );
};
