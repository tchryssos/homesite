import NextHead from 'next/head';

type HeadProps = {
  title?: string;
};

export function Head({ title }: HeadProps) {
  return (
    <NextHead>
      {/* Uncomment the following lines if using google fonts */}
      <link
        crossOrigin="use-credentials"
        href="https://fonts.gstatic.com"
        rel="preconnect"
      />
      <title>Troy Chryssos{title ? ` - ${title}` : ''}</title>
      <meta charSet="utf-8" />
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      <meta
        content="The personal website of Troy Chryssos"
        name="description"
      />
    </NextHead>
  );
}
