import { createContext } from 'react';

import { RouteSprites } from '~/typings/sprites';

interface AnimationContextInterface {
  isAnimating: boolean;
  routeSprites: RouteSprites;
  setRouteSprites: (spriteArray: RouteSprites) => void;
}

export const AnimationContext = createContext<AnimationContextInterface>({
  isAnimating: false,
  routeSprites: [null, null],
  setRouteSprites: () => null,
});
