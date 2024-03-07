/* eslint-disable react/jsx-props-no-spreading */
import '../global.css';

import { AppProps } from 'next/app';
import { useEffect } from 'react';

import { disableDevTools } from '~/logic/util/disableDevTools';
import { getWindow } from '~/logic/util/window';

function Page({ Component, pageProps }: AppProps) {
  const window = getWindow();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      disableDevTools();
    }
  }, [window]);

  return <Component {...pageProps} />;
}

// eslint-disable-next-line import/no-default-export
export default Page;
