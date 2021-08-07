import debounce from 'lodash.debounce';
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import NavBar from '~/components/NavBar';
import PixelContent from '~/components/PixelContent';
import { PAGE_TRANSITION_TIME } from '~/constants/animation';
import { HOME_PATH } from '~/constants/routes';
import { baseStyle, marPadZero } from '~/constants/styles/base';
import AnimationContext from '~/logic/contexts/animation';
import WindowContext from '~/logic/contexts/window';
import disableDevTools from '~/logic/util/disableDevTools';

// const About = lazy(() => import('pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const FourOhFour = lazy(() => import('./pages/FourOhFour'));

if (process.env.NODE_ENV === 'production') {
  disableDevTools();
}

const useStyles = createUseStyles({
  '@import':
    "url('https://fonts.googleapis.com/css2?family=PT+Sans&family=VT323&display=swap')",
  '@global': {
    html: baseStyle,
    body: {
      ...baseStyle,
      position: 'relative',
    },
    '#app': baseStyle,
    div: {
      boxSizing: 'border-box',
    },
    a: {
      boxSizing: 'border-box',
    },
    p: marPadZero,
    h1: marPadZero,
    h2: marPadZero,
    h3: marPadZero,
  },
});

interface AppProps {
  location: {
    pathname: string;
  };
}

const App: React.FC<AppProps> = ({ location: { pathname } }) => {
  useStyles();
  const initializedRef = useRef(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const dSetWindowSize = debounce(() => {
    setWindowSize(window.innerWidth);
  }, 500);

  useEffect(() => {
    if (initializedRef.current) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), PAGE_TRANSITION_TIME);
    } else {
      initializedRef.current = true;
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('resize', dSetWindowSize);
  }, []);

  return (
    <AnimationContext.Provider value={{ isAnimating }}>
      <WindowContext.Provider value={{ windowSize }}>
        <NavBar />
        <PixelContent />
        <Suspense fallback={<div />}>
          <Switch>
            <Route component={Portfolio} exact path={HOME_PATH} />
            {/* <Route component={About} path={ABOUT_PATH} /> */}
            <Route component={FourOhFour} />
          </Switch>
        </Suspense>
      </WindowContext.Provider>
    </AnimationContext.Provider>
  );
};

const RouterApp = withRouter(({ location }) => <App location={location} />);

render(
  <BrowserRouter>
    <RouterApp />
  </BrowserRouter>,
  document.getElementById('app'),
);
