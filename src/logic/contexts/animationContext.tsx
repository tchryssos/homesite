import { useRouter } from 'next/router';
import {
  createContext,
  PropsWithChildren,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { PAGE_TRANSITION_TIME } from '~/constants/animation';
import { RouteSprites } from '~/typings/sprites';

import { getRouteSprite } from '../util/routing';

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

export function AnimationContextProvider({
  children,
}: PropsWithChildren<unknown>) {
  const { pathname } = useRouter();

  const initializedRef = useRef(false);

  const [isAnimating, setIsAnimating] = useState(false);
  const [routeSprites, setRouteSprites] = useState<RouteSprites>([
    null,
    getRouteSprite(pathname),
  ]);

  useLayoutEffect(() => {
    if (initializedRef.current) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), PAGE_TRANSITION_TIME);
    } else {
      initializedRef.current = true;
    }
  }, [pathname]);

  const providerValue = useMemo(
    () => ({ isAnimating, routeSprites, setRouteSprites }),
    [isAnimating, routeSprites, setRouteSprites],
  );

  return (
    <AnimationContext.Provider value={providerValue}>
      {children}
    </AnimationContext.Provider>
  );
}
