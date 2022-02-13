import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { Sprite } from '~/components/Sprite';
import { PAGE_TRANSITION_TIME } from '~/constants/animation';
import { ABOUT_PATH } from '~/constants/routes';
import { Sprites } from '~/constants/sprites';
import { PIXEL_CONTENT_HEIGHT } from '~/constants/style';
import { AnimationContext } from '~/logic/contexts/animation';
import {
  getWalkAnimationDistance,
  streetDisplayHeight,
} from '~/logic/util/animation';
import { getRouteSprite } from '~/logic/util/routing';
import { pxToRem } from '~/logic/util/styles/pxToRem';
import { getWindow } from '~/logic/util/window';

import { FlexBox } from './box/FlexBox';

// START - STYLED COMPONENTS - START
const ArtContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

interface AnimationProps {
  isAnimating: boolean;
}

const AnimationScroller = styled.div<AnimationProps>`
  display: flex;
  height: ${pxToRem(PIXEL_CONTENT_HEIGHT)};
  transition: ${({ isAnimating }) =>
    isAnimating ? `transform ${PAGE_TRANSITION_TIME}ms linear` : ''};
`;

const SpriteContainer = styled(FlexBox)`
  width: 100%;
  min-width: ${pxToRem(256)};
  justify-content: center;
`;

const Sidewalk = styled.div`
  position: absolute;
  width: 300%;
  top: ${pxToRem(124)};
  height: ${pxToRem(streetDisplayHeight)};
  background: url('/street_purp_sm.png');
  background-repeat: repeat;
  justify-self: flex-start;
  background-size: contain;
`;

const TroySprite = styled(Sprite)<AnimationProps>`
  z-index: 3;
  transition: ${({ isAnimating }) =>
    isAnimating ? `transform ${PAGE_TRANSITION_TIME}ms linear` : ''};
`;

const ObjectSprite = styled(Sprite)<AnimationProps>`
  z-index: 2;
  padding-bottom: ${({ theme }) => theme.spacing[16]};
  position: ${({ isAnimating }) => (isAnimating ? 'absolute' : '')};
  height: ${({ isAnimating }) => (isAnimating ? '100%' : '')};
`;
// END - STYLED COMPONENTS - END

const setInlineTransform = (translate: number, isAnimating: boolean) => {
  if (isAnimating) {
    return {
      transform: `translateX(${translate}px)`,
    };
  }
  return undefined;
};

export const PixelContent: React.FC = () => {
  const { pathname } = useRouter();

  const {
    isAnimating,
    routeSprites: [prevSprite, currentSprite],
    setRouteSprites,
  } = useContext(AnimationContext);

  const windowSize = getWindow()?.innerWidth;
  const animationDistance = getWalkAnimationDistance(windowSize || 0);

  useEffect(() => {
    setRouteSprites([currentSprite, getRouteSprite(pathname)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  let troySprite = Sprites.TROY;
  if (pathname === ABOUT_PATH) {
    troySprite = Sprites.TROY_REVERSE;
  }
  if (isAnimating) {
    troySprite = Sprites.TROY_RIGHT;
  }

  return (
    <ArtContainer>
      <AnimationScroller
        isAnimating={isAnimating}
        style={setInlineTransform(animationDistance * -1, isAnimating)}
      >
        <SpriteContainer>
          <TroySprite
            isAnimating={isAnimating}
            style={setInlineTransform(animationDistance, isAnimating)}
            type={troySprite}
          />
          <ObjectSprite
            isAnimating={false}
            type={isAnimating ? prevSprite : currentSprite}
          />
          {isAnimating && (
            <ObjectSprite
              isAnimating
              style={setInlineTransform(animationDistance + 64, isAnimating)}
              type={currentSprite}
            />
          )}
        </SpriteContainer>
        <Sidewalk />
      </AnimationScroller>
    </ArtContainer>
  );
};
