import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="Ross' Blog" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ross' Blog" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#2e3138" />
        <link rel="manifest" href="/manifest.json" />

        {/* Icons */}
        <link rel="apple-touch-icon" href="/icons/pwa-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/maskable_icon_x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/maskable_icon_x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/maskable_icon_x167.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon_x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon_x16.png" />
        <link rel="icon" href="/icons/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-con" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
