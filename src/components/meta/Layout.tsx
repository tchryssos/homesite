import { useRouter } from 'next/router';
import { useContext, useRef } from 'react';

import { ABOUT_PATH } from '~/constants/routes';
import { HistoryContext } from '~/logic/contexts/history';
import { getWindow } from '~/logic/util/window';

import { NavBar } from '../NavBar';
import { PageWrapper } from '../PageWrapper';
import { PixelContent } from '../PixelContent';
import { PixelContentShifter } from '../PixelContentShifter';
import { Head } from './Head';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};
interface PixelSectionProps {
  navHeight: number;
}

const PixelSection: React.FC<PixelSectionProps> = ({ navHeight }) => {
  const { pathname } = useRouter();
  const [, lastRoute] = useContext(HistoryContext);
  const windowHeight = getWindow()?.innerHeight || 0;

  return (
    <PixelContentShifter
      isAboutPage={pathname === ABOUT_PATH}
      lastRoute={lastRoute}
      navHeight={navHeight}
      windowHeight={windowHeight}
    >
      <PixelContent />
    </PixelContentShifter>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const navRef = useRef<HTMLDivElement>(null);

  const navHeight = navRef.current?.offsetHeight || 0;

  return (
    <>
      <Head title={title} />
      <div ref={navRef}>
        <NavBar />
      </div>
      <PixelSection navHeight={navHeight} />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
};
