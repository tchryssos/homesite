import { ProjectBlock } from '../ProjectBlock';
import { PortfolioSection } from './PortfolioSection';

export const Work: React.FC = () => (
  <PortfolioSection desc="A selection of professional projects" title="Work">
    <ProjectBlock
      imageAltText="Sparkle emoji"
      imageSrc="/sparkle.png"
      text="Portfolio website for graphic &amp; UX designer Casey Bradford."
      title="casey&#x0200B;bradford&#x0200B;.club"
      to="https://caseybradford.club/"
      toRepo="https://github.com/hottinet/casey-site-v2"
    />
    <ProjectBlock
      imageAltText="Moss sprout logo"
      imageSrc="/moss.png"
      text="A shared virtual desktop workspace for creative teams to view and organize project assets."
      title="Moss Workspace"
      to="https://mossworkspace.com/"
      toOthers={[
        {
          extLink: 'https://vimeo.com/472490067/524a565895',
          extTitle: 'Moss Vimeo',
          extType: 'vimeo',
        },
      ]}
    />
    <ProjectBlock
      imageAltText="Quadio transport logo"
      imageSrc="/quadio.jpg"
      text="A music streaming and sharing app for college creatives."
      title="Quadio"
      to="https://tchryssos.medium.com/building-an-audio-waveform-progress-bar-with-react-for-quadio-132223928b14"
    />
  </PortfolioSection>
);
