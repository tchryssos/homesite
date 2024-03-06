import { AppProps } from 'next/app';
import { useEffect } from 'react';

import { AnimationContextProvider } from '~/logic/contexts/animationContext';
import { disableDevTools } from '~/logic/util/disableDevTools';
import { getWindow } from '~/logic/util/window';

import { BreakpointsContextProvider } from '../logic/contexts/breakpointsContext';

function Page({ Component, pageProps }: AppProps) {
  const window = getWindow();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      disableDevTools();
    }
  }, [window]);

  return (
    <BreakpointsContextProvider>
      <AnimationContextProvider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </AnimationContextProvider>
    </BreakpointsContextProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default Page;
