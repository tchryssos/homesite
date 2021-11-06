import { css, Global, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import { PAGE_TRANSITION_TIME } from '~/constants/animation';
import { Theme, themes } from '~/constants/theme';
import AnimationContext from '~/logic/contexts/animation';
import disableDevTools from '~/logic/util/disableDevTools';
import { ColorMode } from '~/typings/colorMode';

import { BreakpointsContext } from '../logic/contexts/breakpointsContext';
import { BreakpointSize } from '../typings/theme';

if (process.env.NODE_ENV === 'production') {
  disableDevTools();
}
const marPadZero = css`
  margin: 0;
  padding: 0;
`;

const baseStyle = css`
  height: 100%;
  width: 100%;
  ${marPadZero};
`;

const createGlobalStyles = (theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans&family=VT323&display=swap');
  html {
    background-color: ${theme.colors.primary};
    ${baseStyle};
  }
  body {
    ${baseStyle};
    position: relative;
    box-sizing: border-box;
  }
  #app {
    ${baseStyle};
  }
  div,
  input,
  select,
  textarea {
    box-sizing: border-box;
  }
  p {
    ${marPadZero};
  }
  h1 {
    ${marPadZero};
  }
  h2 {
    ${marPadZero};
  }
  h3 {
    ${marPadZero};
  }
`;

const Page: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  const [windowBreakpoints, setWindowBreakpoints] = useState<BreakpointSize[]>([
    'xxs',
  ]);
  const initializedRef = useRef(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [colorMode] = useState<ColorMode>('standard');
  const theme = themes[colorMode];

  useEffect(() => {
    Object.keys(theme.breakpointValues).forEach((key, i, arr) => {
      const queryAdjective = key === 'xss' ? 'max' : 'min';
      const query = window.matchMedia(
        `(${queryAdjective}-width: ${
          theme.breakpointValues[key as BreakpointSize]
        }px)`,
      );
      if (query.matches) {
        setWindowBreakpoints(arr.slice(0, i + 1) as BreakpointSize[]);
      }
      query.addEventListener('change', (e) => {
        setWindowBreakpoints(
          arr.slice(0, e.matches ? i + 1 : i) as BreakpointSize[],
        );
      });
    });
  }, []);

  useEffect(() => {
    if (initializedRef.current) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), PAGE_TRANSITION_TIME);
    } else {
      initializedRef.current = true;
    }
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <BreakpointsContext.Provider value={windowBreakpoints}>
        <AnimationContext.Provider value={{ isAnimating }}>
          <Global styles={createGlobalStyles(theme)} />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </AnimationContext.Provider>
      </BreakpointsContext.Provider>
    </ThemeProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default Page;
