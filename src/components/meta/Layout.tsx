import NavBar from '../NavBar';
import PageWrapper from '../PageWrapper';
import PixelContent from '../PixelContent';
import { Head } from './Head';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

export const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <>
    <Head title={title} />
    <NavBar />
    <PixelContent />
    <PageWrapper>{children}</PageWrapper>
  </>
);
