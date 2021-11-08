import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { Sprite } from '~/components/Sprite';
import { PAGE_TRANSITION_TIME } from '~/constants/animation';
import { ABOUT_PATH, HOME_PATH } from '~/constants/routes';
import { Sprites } from '~/constants/sprites';
import AnimationContext from '~/logic/contexts/animation';
import WindowContext from '~/logic/contexts/window';
import {
  getWalkAnimationDistance,
  streetDisplayHeight,
} from '~/logic/util/animation';
import { pxToRem } from '~/logic/util/styles/pxToRem';

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
  height: ${pxToRem(240)};
  transition: ${({ isAnimating }) =>
    isAnimating ? `transform ${PAGE_TRANSITION_TIME}ms linear` : ''};
`;

const SpriteContainer = styled(FlexBox)`
  width: 100%;
  min-width: ${pxToRem(256)};
`;

const Sidewalk = styled.div`
  position: absolute;
  width: 300%;
  top: ${pxToRem(124)};
  height: ${pxToRem(streetDisplayHeight)};
  background: url('/street_purp_sm.png');
  background-repeat: repeat;
  justify-self: flex-start;
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

const pathToSprite = (path: string) => {
  switch (path) {
    case HOME_PATH:
      return Sprites.LAPTOP;
    case ABOUT_PATH:
      return Sprites.CANE;
    default:
      return Sprites.QUESTIONMAN;
  }
};

export const PixelContent: React.FC = () => {
  const { pathname } = useRouter();

  const { isAnimating } = useContext(AnimationContext);
  const { windowSize } = useContext(WindowContext);
  const animationDistance = getWalkAnimationDistance(windowSize);

  const [currentSprite, setCurrentSprite] = useState<Sprites>(
    pathToSprite(pathname),
  );
  const [prevSprite, setPrevSprite] = useState<Sprites | null>(null);

  const setInlineTransform = (translate: number) => {
    if (isAnimating) {
      return {
        transform: `translateX(${translate}px)`,
      };
    }
    return undefined;
  };

  useEffect(() => {
    setPrevSprite(currentSprite);
    setCurrentSprite(pathToSprite(pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <ArtContainer>
      <AnimationScroller
        isAnimating={isAnimating}
        style={setInlineTransform(animationDistance * -1)}
      >
        <SpriteContainer>
          <TroySprite
            isAnimating={isAnimating}
            style={setInlineTransform(animationDistance)}
            type={isAnimating ? Sprites.TROY_RIGHT : Sprites.TROY}
          />
          <ObjectSprite
            isAnimating={false}
            type={isAnimating ? prevSprite : currentSprite}
          />
          {isAnimating && (
            <ObjectSprite
              isAnimating
              style={setInlineTransform(animationDistance + 64)}
              type={currentSprite}
            />
          )}
        </SpriteContainer>
        <Sidewalk />
      </AnimationScroller>
    </ArtContainer>
  );
};
