import { ProjectBlock } from '../ProjectBlock';
import { PortfolioSection } from './PortfolioSection';

export function Other() {
  return (
    <PortfolioSection
      desc="Templates, odds and ends, and projects that don't fit anywhere else"
      title="Other"
    >
      <ProjectBlock
        hideLink
        imageAltText="Troy's head"
        imageSrc="/troy_head.png"
        text="Peek behind the curtain of this site. Often used to try out new tech and frameworks."
        title="troychryssos&#x0200B;.com"
        to="https://github.com/tchryssos/homesite"
        toRepo="https://github.com/tchryssos/homesite"
      />
    </PortfolioSection>
  );
}
