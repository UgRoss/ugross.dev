import React from 'react';

interface IProps {
  headComponents: React.ReactElement | React.ReactElement[];
  body: string;
  postBodyComponents: React.ReactElement | React.ReactElement[];
}

const HTML: React.FunctionComponent<IProps> = ({
  headComponents,
  body,
  postBodyComponents,
}: IProps): React.ReactElement => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Mobile Meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="HandheldFriendly" content="True" />

        {/* Styles'n'Scripts */}
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400"
        />

        {headComponents}

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-con" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
