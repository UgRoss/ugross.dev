import React from 'react';

interface Props {
  headComponents: any;
  body: any;
  postBodyComponents: any;
}

export default class HTML extends React.Component<Props> {
  public render() {
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

          {this.props.headComponents}

          {/* Icons */}
          <link rel="icon" href="/favicon.ico" type="image/x-con" />
          <link rel="icon" href="/favicon.png" type="image/png" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
