import { ProjectBlock } from '../ProjectBlock';
import { PortfolioSection } from './PortfolioSection';

export const Experiments: React.FC = () => (
  <PortfolioSection
    desc="A selection of creative projects I've built to satisfy my own curiosity and/or teach myself something new"
    title="Experiments"
  >
    <ProjectBlock
      imageAltText="RPG Sheet sword logo"
      imageSrc="/rpg_sheet_sword.png"
      text="An online tabletop RPG character sheet tool. Currently supports 'Shadow of the Demon Lord'. Still a work in progress."
      title="rpg sheet dot games"
      to="https://rpgsheet.games"
      toRepo="https://github.com/tchryssos/rpg-sheet"
    />
    <ProjectBlock
      hideLink
      imageAltText="Screamin' Nicholas logo"
      imageSrc="/screamin_nicholas.png"
      text="A discord bot that can play YouTube video audio in your voice channels, like the late, great Groovy bot. Still a work in progress."
      title="Screamin' Nicholas"
      to="https://github.com/tchryssos/screamin-nicholas"
      toRepo="https://github.com/tchryssos/screamin-nicholas"
    />
    <ProjectBlock
      imageAltText="Pixel-art baseball"
      imageSrc="/baseball.ico"
      text="Step up to the plate as a procedurally generated baseball player  and swing for the fences!"
      title="HOME RUN"
      to="https://tchryssos.github.io/homerun/"
      toRepo="https://github.com/tchryssos/homerun"
    />
  </PortfolioSection>
);
