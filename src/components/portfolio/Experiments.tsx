import { ProjectBlock } from '../ProjectBlock';
import { PortfolioSection } from './PortfolioSection';

export function Experiments() {
  return (
    <PortfolioSection
      desc="A selection of creative projects I've built to satisfy my own curiosity and/or teach myself something new"
      title="Experiments"
    >
      <ProjectBlock
        imageAltText="RPG Sheet sword logo"
        imageSrc="/rpg_sheet_sword.png"
        text='An online tabletop RPG character sheet tool for "Shadow of the Demon Lord", "Shadow of the Weird Wizard", "Cities Without Number", and "Worlds Without Number".'
        title="rpg sheet dot games"
        to="https://rpgsheet.games"
        toRepo="https://github.com/tchryssos/rpg-sheet"
      />
      <ProjectBlock
        imageAltText="Magical sword-wielding warrior"
        imageSrc="/swordsman.png"
        text='A tabletop RPG world-building toolkit, with generators for on-the-fly people, places, and maps, as well as campaign world ornamenters like "live" events and faction relationship tracking.'
        title="BoneWorld Quest"
        to="https://www.boneworld.quest"
      />
      <ProjectBlock
        imageAltText="Troy's art list picture emoji logo"
        imageSrc="/troys_art_list.png"
        text="A simple photo blog I built to document my favorite art pieces."
        title="Troy's Art List"
        to="https://www.troyslist.art"
        toRepo="https://github.com/tchryssos/art-list"
      />
    </PortfolioSection>
  );
}
