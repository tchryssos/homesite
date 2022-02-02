import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import { PAGE_TRANSITION_TIME } from '~/constants/animation';
import { ABOUT_PATH } from '~/constants/routes';
import { PIXEL_CONTENT_HEIGHT } from '~/constants/style';
import { pxToRem } from '~/logic/util/styles/pxToRem';
import { getWindow } from '~/logic/util/window';

import { FlexBox } from '../box/FlexBox';
import { NavBar } from '../NavBar';
import { PageWrapper } from '../PageWrapper';
import { PixelContent } from '../PixelContent';
import { Head } from './Head';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

interface ShifterProps {
  isAboutPage: boolean;
  windowHeight: number;
  navHeight: number;
}

const PixelShifter = styled(FlexBox)<ShifterProps>(
  ({ isAboutPage, windowHeight, navHeight, theme }) => ({
    transform: 'translateY(0)',
    transition: `transform ${PAGE_TRANSITION_TIME}ms`,
    ...(isAboutPage && {
      width: '100%',
      position: 'fixed',
      zIndex: 2,
      backgroundImage: `linear-gradient(transparent, ${theme.colors.primary}, ${theme.colors.primary})`,
      transform: `translateY(${pxToRem(
        windowHeight - navHeight - PIXEL_CONTENT_HEIGHT,
      )})`,
    }),
  }),
);

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const { pathname } = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  const windowHeight = getWindow()?.innerHeight || 0;
  const navHeight = navRef.current?.offsetHeight || 0;

  return (
    <>
      <Head title={title} />
      <div ref={navRef}>
        <NavBar />
      </div>
      <PixelShifter
        isAboutPage={pathname === ABOUT_PATH}
        navHeight={navHeight}
        windowHeight={windowHeight}
      >
        <PixelContent />
      </PixelShifter>
      <PageWrapper>{children}</PageWrapper>
    </>
  );
};
