import styled from '@emotion/styled';

import { Image } from '~/components/Image';
import { Sprites } from '~/constants/sprites';
import { pxToRem } from '~/logic/util/styles/pxToRem';

interface SpriteProps {
  type: Sprites | null;
  style?: Record<string, string | number>;
  className?: string;
}

const SpriteContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${pxToRem(128)};
  max-height: ${pxToRem(190)};
  display: flex;
  align-items: flex-end;
  position: relative;
`;

// When I made the sprites a few years ago
// I didn't make them all the same sizes, so now we need to adjust
// for the TROY_RIGHT sprite
const SpriteImage = styled(Image)<Pick<SpriteProps, 'type'>>(({ type }) => ({
  width: type === Sprites.TROY_RIGHT ? pxToRem(90) : '100%',
  height: type === Sprites.TROY_RIGHT ? '95%' : '100%',
  transform: type === Sprites.TROY_RIGHT ? `translateY(${pxToRem(-6)})` : '',
  position: 'relative',
}));

const spriteSwitch = (type: string) => {
  switch (type) {
    case Sprites.TROY:
      return '/troy.gif';
    case Sprites.TROY_RIGHT:
      return '/troy_right.gif';
    case Sprites.LAPTOP:
      return '/laptop.gif';
    // case Sprites.CANE:
    //   return dumbCane;
    default:
      return '/questionman.gif';
  }
};

export const Sprite: React.FC<SpriteProps> = ({
  type,
  style = {},
  className,
}) =>
  type ? (
    <SpriteContainer className={className} style={style}>
      <SpriteImage
        alt={`A sprite of ${type}`}
        layout="fill"
        objectFit="contain"
        objectPosition="center bottom"
        priority
        src={spriteSwitch(type)}
        type={type}
      />
    </SpriteContainer>
  ) : null;
