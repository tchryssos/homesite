import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="bg-primary">
      <Head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="use-credentials"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <meta
          content="The personal website of Troy Chryssos"
          name="description"
        />
      </Head>
      <body className="bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
