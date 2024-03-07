import clsx from 'clsx';

import { Image } from '~/components/Image';
import { Sprites } from '~/constants/sprites';

interface SpriteProps {
  type: Sprites | null;
  style?: Record<string, string | number>;
  className?: string;
}

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

export function Sprite({ type, style = {}, className }: SpriteProps) {
  return type ? (
    <div
      className={clsx(
        'relative flex h-full max-h-[190px] w-full max-w-32 items-end',
        className,
      )}
      style={style}
    >
      <Image
        alt={`A sprite of ${type}`}
        className={clsx(
          'relative',
          // When I made the sprites a few years ago
          // I didn't make them all the same sizes, so now we need to adjust
          // for the TROY_RIGHT sprite
          type === Sprites.TROY_RIGHT
            ? 'h-[95%] w-[5.625rem] translate-y-[-0.375rem]'
            : 'h-full w-full',
        )}
        fill
        priority
        src={spriteSwitch(type)}
        style={{
          objectPosition: 'center bottom',
          objectFit: 'contain',
          height: '100%',
          width: '100%',
          inset: 0,
          position: 'absolute',
          color: 'transparent',
          ...style,
        }}
      />
    </div>
  ) : null;
}
