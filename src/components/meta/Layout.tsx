import Head from 'next/head';

import { NavBar } from '../NavBar';
import { PageWrapper } from '../PageWrapper';
import { PixelContent } from '../PixelContent';

type LayoutProps = {
  children?: React.ReactNode;
  title: string;
};

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <PixelContent />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}
