import { ProjectBlock } from '../ProjectBlock';
import { PortfolioSection } from './PortfolioSection';

export const Other: React.FC = () => (
  <PortfolioSection
    desc="Templates, odds and ends, and projects that don't fit anywhere else"
    title="Other"
  >
    <ProjectBlock
      hideLink
      imageAltText="Troy's head"
      imageSrc="/troy_head.png"
      text="Peek behind the curtain of this site."
      title="troychryssos&#x0200B;.com"
      to="https://github.com/tchryssos/homesite"
      toRepo="https://github.com/tchryssos/homesite"
    />
    <ProjectBlock
      hideLink
      imageAltText="Vercel logo"
      imageSrc="/vercel.svg"
      text="My template for new Next.js projects. Includes typescript."
      title="Next.js Template"
      to="https://github.com/tchryssos/next-template"
      toRepo="https://github.com/tchryssos/next-template"
    />
    <ProjectBlock
      hideLink
      imageAltText="Parcel box"
      imageSrc="/parcel.png"
      text="My template for new Parcel projects."
      title="Parcel Template"
      to="https://github.com/tchryssos/parcel-template"
      toRepo="https://github.com/tchryssos/parcel-template"
    />
  </PortfolioSection>
);
