import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { ABOUT_PATH } from '~/constants/routes';

import { FlexBox } from '../box/FlexBox';
import { NavBar } from '../NavBar';
import { PageWrapper } from '../PageWrapper';
import { PixelContent } from '../PixelContent';
import { Head } from './Head';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const PixelShifter = styled(FlexBox)<{ isAboutPage: boolean }>(
  ({ isAboutPage, theme }) => ({
    ...(isAboutPage && {
      width: '100%',
      position: 'fixed',
      zIndex: 2,
      bottom: 0,
      backgroundImage: `linear-gradient(transparent, ${theme.colors.primary}, ${theme.colors.primary})`,
    }),
  }),
);

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const { pathname } = useRouter();
  return (
    <>
      <Head title={title} />
      <NavBar />
      <PixelShifter isAboutPage={pathname === ABOUT_PATH}>
        <PixelContent />
      </PixelShifter>
      <PageWrapper>{children}</PageWrapper>
    </>
  );
};
