import styled from '@emotion/styled';

import { Sprites } from '~/constants/sprites';
import { pxToRem } from '~/logic/util/styles/pxToRem';
import laptop from '~/static/laptop.gif';
import questionMan from '~/static/questionman.gif';
import troy from '~/static/troy.gif';
import troyRight from '~/static/troy_right.gif';

interface SpriteProps {
  type: Sprites | null;
  style?: Record<string, string | number>;
  className?: string;
}

const SpriteContainer = styled.div`
  max-width: ${pxToRem(128)};
  max-height: ${pxToRem(190)};
  display: flex;
  align-items: flex-end;
`;

const SpriteImg = styled.img<Pick<SpriteProps, 'type'>>(({ type }) => ({
  width: type === Sprites.TROY_RIGHT ? pxToRem(90) : '100%',
  height:
    // eslint-disable-next-line no-nested-ternary
    type === Sprites.TROY ? '100%' : type === Sprites.TROY_RIGHT ? '95%' : '',
  transform: type === Sprites.TROY_RIGHT ? `translateY(${pxToRem(-6)})` : '',
}));

const spriteSwitch = (type: string) => {
  switch (type) {
    case Sprites.TROY:
      return troy;
    case Sprites.TROY_RIGHT:
      return troyRight;
    case Sprites.LAPTOP:
      return laptop;
    // case Sprites.CANE:
    //   return dumbCane;
    default:
      return questionMan;
  }
};

export const Sprite: React.FC<SpriteProps> = ({
  type,
  style = {},
  className,
}) =>
  type ? (
    <SpriteContainer className={className} style={style}>
      <SpriteImg
        alt={`A sprite of ${type}`}
        src={spriteSwitch(type)}
        type={type}
      />
    </SpriteContainer>
  ) : null;
