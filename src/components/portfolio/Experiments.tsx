import { ProjectBlock } from '../ProjectBlock';
import { PortfolioSection } from './PortfolioSection';

export const Experiments: React.FC = () => (
  <PortfolioSection
    desc="A selection of creative projects I've built to satisfy my own curiosity and/or teach myself something new"
    title="Experiments"
  >
    <ProjectBlock
      hideLink
      imageAltText="Screamin' Nicholas logo"
      imageSrc="/screamin_nicholas.png'"
      text="A discord bot that can play YouTube video audio in your voice channels, like the late, great Groovy bot. Still a work in progress."
      title="Screamin' Nicholas"
      to="https://github.com/tchryssos/screamin-nicholas"
      toRepo="https://github.com/tchryssos/screamin-nicholas"
    />
    <ProjectBlock
      imageAltText="Closed captioning logo"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/0/09/Closed_captioning_symbol.svg"
      text="A lightweight, browser-based streaming tool for automatic closed captioning using the SpeechRecognition API."
      title="Stream CC"
      to="https://tchryssos.github.io/stream-cc/"
      toRepo="https://github.com/tchryssos/stream-cc"
    />
    <ProjectBlock
      imageAltText="A generated man"
      imageSrc="/man_you_know.png"
      text="A canvas-based weirdo generator. Still a work in progress."
      title="The Man You Know"
      to="https://tchryssos.github.io/the-man-you-know/"
      toRepo="https://github.com/tchryssos/the-man-you-know"
    />
    <ProjectBlock
      imageAltText="Banjo the Mind Sculptor"
      imageSrc="/banjo_jace.png"
      text="Enter the name of a Magic the Gathering card and have Banjo &amp; Co. from Banjo Kazooie read you the card text."
      title="Banjo MtG"
      to="https://tchryssos.github.io/banjo-mtg/"
      toRepo="https://github.com/tchryssos/banjo-mtg"
    />
    <ProjectBlock
      imageAltText="Pixel-art baseball"
      imageSrc="/baseball.ico'"
      text="Step up to the plate as a procedurally generated baseball player  and swing for the fences!"
      title="HOME RUN"
      to="https://tchryssos.github.io/homerun/"
      toRepo="https://github.com/tchryssos/homerun"
    />
  </PortfolioSection>
);
