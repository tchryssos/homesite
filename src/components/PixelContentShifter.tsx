import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { PAGE_TRANSITION_TIME } from '~/constants/animation';
import { ABOUT_PATH, HOME_PATH } from '~/constants/routes';
import { PIXEL_CONTENT_HEIGHT } from '~/constants/style';
import { pxToRem } from '~/logic/util/styles/pxToRem';

import { FlexBox } from './box/FlexBox';

interface ShifterProps {
  isAboutPage: boolean;
  windowHeight: number;
  navHeight: number;
  lastRoute: string | undefined;
  isAnimating: boolean;
}

export const PixelContentShifter = styled(FlexBox)<ShifterProps>(
  ({ isAboutPage, windowHeight, navHeight, lastRoute, theme, isAnimating }) => {
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

    const slideAnimation = `${pixelSlideDown} ${PAGE_TRANSITION_TIME}ms linear`;

    const aboutPageStyles = {
      position: 'fixed',
      width: '100%',
      backgroundImage: `linear-gradient(to bottom, transparent, ${theme.colors.primary} 10%)`,
      ...(lastRoute === HOME_PATH && isAnimating
        ? {
            animation: `${slideAnimation} forwards`,
          }
        : {
            transform: translateDown,
          }),
    } as Record<string, unknown>;

    const homePageStyles = {
      ...(lastRoute === ABOUT_PATH &&
        isAnimating && {
          animation: `${slideAnimation} reverse`,
        }),
    } as Record<string, unknown>;

    return {
      height: '100%',
      position: 'relative',
      zIndex: 100,
      ...(isAboutPage ? aboutPageStyles : homePageStyles),
    };
  },
);
