import Codecademy from '~/static/codecademy.svg';

import { ProjectBlock } from '../ProjectBlock';
import { PortfolioSection } from './PortfolioSection';

export const CurrentGig: React.FC = () => (
  <PortfolioSection title="My current gig">
    <ProjectBlock
      imageAltText="Codecademy logo"
      imageSrc={Codecademy}
      text="An online learning platform that has helped over 45 million people learn to code."
      title="Codecademy"
      to="https://www.codecademy.com/"
      toRepo="https://github.com/Codecademy"
    />
  </PortfolioSection>
);
