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
}

export const PixelContentShifter = styled(FlexBox)<ShifterProps>(
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

    const pixelWrapAround = keyframes`
      from {
        transform: ${translateDown};
        visibility: visible;
      }
      50% {
        visibility: visible;
        transform: translateY(100vh)
      }
      51% {
        visibility: hidden;
        transform: translateY(${pxToRem(
          (navHeight + PIXEL_CONTENT_HEIGHT) * -1.2,
        )})
      }
      52% {
        visibility: visible;
      }
      100% {
        transform: translateY(0);
      }
    `;

    const aboutPageStyles = {
      position: 'fixed',
      width: '100%',
      backgroundImage: `linear-gradient(to bottom, transparent, ${theme.colors.primary} 10%)`,
      ...(lastRoute === HOME_PATH
        ? {
            animation: `${pixelSlideDown} ${PAGE_TRANSITION_TIME}ms linear forwards`,
          }
        : {
            transform: translateDown,
          }),
    } as Record<string, unknown>;

    const homePageStyles = {
      ...(lastRoute === ABOUT_PATH && {
        animation: `${pixelWrapAround} ${PAGE_TRANSITION_TIME}ms ease-in-out forwards`,
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
