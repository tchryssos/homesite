import { ProjectBlock } from '../ProjectBlock';
import { PortfolioSection } from './PortfolioSection';

export function Work() {
  return (
    <PortfolioSection desc="A selection of professional projects" title="Work">
      <ProjectBlock
        imageAltText="Funky Sake's face"
        imageSrc="/funky-face.png"
        text="Website and blog for sake sommalier and influencer Funky Sake."
        title="Funky Sake"
        to="https://www.funkysake.com"
      />
      <ProjectBlock
        imageAltText="Sparkle emoji"
        imageSrc="/sparkle.png"
        text="Portfolio website for graphic &amp; UX designer Casey Bradford."
        title="casey&#x0200B;bradford&#x0200B;.club"
        to="https://caseybradford.club/"
        toRepo="https://github.com/hottinet/casey-site-v2"
      />
      <ProjectBlock
        hideLink
        imageAltText="Quadio transport logo"
        imageSrc="/quadio.jpg"
        text="A music streaming and sharing app for college creatives (now defunct)."
        title="Quadio"
        to="https://tchryssos.medium.com/building-an-audio-waveform-progress-bar-with-react-for-quadio-132223928b14"
        toOthers={[
          {
            extLink:
              'https://tchryssos.medium.com/building-an-audio-waveform-progress-bar-with-react-for-quadio-132223928b14',
            extTitle:
              'Medium article about building the audio waveform progress bar',
            extType: 'medium',
          },
        ]}
      />
    </PortfolioSection>
  );
}
