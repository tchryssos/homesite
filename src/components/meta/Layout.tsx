import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext, useRef } from 'react';

import { PAGE_TRANSITION_TIME } from '~/constants/animation';
import { ABOUT_PATH, HOME_PATH } from '~/constants/routes';
import { PIXEL_CONTENT_HEIGHT } from '~/constants/style';
import { AnimationContext } from '~/logic/contexts/animation';
import { HistoryContext } from '~/logic/contexts/history';
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
  lastRoute: string | undefined;
  isAnimating: boolean;
}

const PixelShifter = styled(FlexBox)<ShifterProps>(
  ({ isAboutPage, windowHeight, navHeight, lastRoute, theme }) => {
    const translateDown = `translateY(${pxToRem(
      windowHeight - navHeight - PIXEL_CONTENT_HEIGHT,
    )})`;

    const pixelSlideDown = keyframes`
    from {
      transform: translateY(0)
    }
    to {
      transform: ${translateDown}
    }
  `;

    const slidingAnimation = `${pixelSlideDown} ${PAGE_TRANSITION_TIME}ms linear`;

    const aboutPageStyles = {
      width: '100%',
      position: 'fixed',
      zIndex: 2,
      ...(lastRoute === HOME_PATH
        ? {
            animation: `${slidingAnimation} forwards`,
          }
        : {
            transform: translateDown,
          }),
    } as Record<string, unknown>;

    const homePageStyles = {
      ...(lastRoute === ABOUT_PATH && {
        animation: `${slidingAnimation} reverse`,
      }),
    } as Record<string, unknown>;

    return {
      height: '100%',
      backgroundImage: `linear-gradient(to bottom, transparent, ${theme.colors.primary} 10%)`,
      ...(isAboutPage ? aboutPageStyles : homePageStyles),
    };
  },
);

interface PixelSectionProps {
  navHeight: number;
}

const PixelSection: React.FC<PixelSectionProps> = ({ navHeight }) => {
  const { pathname } = useRouter();
  const [, lastRoute] = useContext(HistoryContext);
  const { isAnimating } = useContext(AnimationContext);
  const windowHeight = getWindow()?.innerHeight || 0;

  return (
    <PixelShifter
      isAboutPage={pathname === ABOUT_PATH}
      isAnimating={isAnimating}
      lastRoute={lastRoute}
      navHeight={navHeight}
      windowHeight={windowHeight}
    >
      <PixelContent />
    </PixelShifter>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const navRef = useRef<HTMLDivElement>(null);

  const navHeight = navRef.current?.offsetHeight || 0;

  return (
    <>
      <Head title={title} />
      <div ref={navRef}>
        <NavBar />
      </div>
      <PixelSection navHeight={navHeight} />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
};
