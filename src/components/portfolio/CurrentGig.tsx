import { ProjectBlock } from '../ProjectBlock';
import { PortfolioSection } from './PortfolioSection';

export function CurrentGig() {
  return (
    <PortfolioSection title="My current gig">
      <ProjectBlock
        imageAltText="Codecademy logo"
        imageSrc="/codecademy.svg"
        text="An online learning platform that has helped over 45 million people learn to code."
        title="Codecademy"
        to="https://www.codecademy.com/"
        toRepo="https://github.com/Codecademy"
      />
    </PortfolioSection>
  );
}
