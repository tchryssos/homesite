import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { Sprite } from '~/components/Sprite';
import { Sprites } from '~/constants/sprites';
import { AnimationContext } from '~/logic/contexts/animationContext';
import { getWalkAnimationDistance } from '~/logic/util/animation';
import { getRouteSprite } from '~/logic/util/routing';
import { getWindow } from '~/logic/util/window';

const setInlineTransform = (translate: number, isAnimating: boolean) => {
  if (isAnimating) {
    return {
      transform: `translateX(${translate}px)`,
    };
  }
  return undefined;
};

export function PixelContent() {
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

  const animationTransitionClassName =
    isAnimating &&
    'duration-page-transition-time transition-transform ease-linear';

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={clsx('flex h-60', animationTransitionClassName)}
        style={setInlineTransform(animationDistance * -1, isAnimating)}
      >
        <div className="flex w-full min-w-64 justify-center">
          <Sprite
            className={clsx('z-[3]', animationTransitionClassName)}
            style={setInlineTransform(animationDistance, isAnimating)}
            type={isAnimating ? Sprites.TROY_RIGHT : Sprites.TROY}
          />
          <Sprite
            className={clsx('z-[2] pb-4', isAnimating && 'absolute h-full')}
            type={isAnimating ? prevSprite : currentSprite}
          />
          {isAnimating && (
            <Sprite
              className="absolute z-[2] h-full pb-4"
              style={setInlineTransform(animationDistance + 64, true)}
              type={currentSprite}
            />
          )}
        </div>
        <div className="absolute top-32 h-street-display-height w-[300%] self-start bg-street bg-contain bg-repeat" />
      </div>
    </div>
  );
}
