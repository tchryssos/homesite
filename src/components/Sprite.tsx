import styled from '@emotion/styled';
import Image from 'next/image';

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

const TroyWrapper = styled.div<Pick<SpriteProps, 'type'>>(({ type }) => ({
  width: type === Sprites.TROY_RIGHT ? pxToRem(90) : '100%',
  height:
    // eslint-disable-next-line no-nested-ternary
    type === Sprites.TROY ? '100%' : type === Sprites.TROY_RIGHT ? '95%' : '',
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

interface TroySpriteWrapperProps extends Pick<SpriteProps, 'type'> {
  children: React.ReactNode;
}

const TroySpriteWrapper: React.FC<TroySpriteWrapperProps> = ({
  type,
  children,
}) => {
  if (type === Sprites.TROY || type === Sprites.TROY_RIGHT) {
    return <TroyWrapper type={type}>{children}</TroyWrapper>;
  }
  return <>{children}</>;
};

export const Sprite: React.FC<SpriteProps> = ({
  type,
  style = {},
  className,
}) =>
  type ? (
    <SpriteContainer className={className} style={style}>
      <TroySpriteWrapper type={type}>
        <Image
          alt={`A sprite of ${type}`}
          layout="fill"
          objectFit="contain"
          src={spriteSwitch(type)}
        />
      </TroySpriteWrapper>
    </SpriteContainer>
  ) : null;
