import type { PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

const tailwindBreakpoints = {
  xs: 639,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export type Breakpoints = keyof typeof tailwindBreakpoints;

export const BreakpointsContext = createContext<Breakpoints[]>(['xs']);

export function BreakpointsContextProvider({
  children,
}: PropsWithChildren<unknown>) {
  const [windowBreakpoints, setWindowBreakpoints] = useState<Breakpoints[]>([
    'xs',
  ]);

  useEffect(() => {
    Object.keys(tailwindBreakpoints).forEach((key, i, arr) => {
      const queryAdjective = (key as Breakpoints) === 'xs' ? 'max' : 'min';
      const query = globalThis.matchMedia(
        `(${queryAdjective}-width: ${
          tailwindBreakpoints[key as Breakpoints]
        }px)`,
      );
      if (query.matches) {
        setWindowBreakpoints(arr.slice(0, i + 1) as Breakpoints[]);
      }
      query.addEventListener('change', (e) => {
        setWindowBreakpoints(
          arr.slice(0, e.matches ? i + 1 : i) as Breakpoints[],
        );
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BreakpointsContext.Provider value={windowBreakpoints}>
      {children}
    </BreakpointsContext.Provider>
  );
}
