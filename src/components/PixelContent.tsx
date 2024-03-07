import { useRouter } from 'next/router';

import { Sprite } from '~/components/Sprite';
import { Sprites } from '~/constants/sprites';
import { getRouteSprite } from '~/logic/util/routing';

export function PixelContent() {
  const { pathname } = useRouter();

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex h-60">
        <div className="flex w-full min-w-64 justify-center">
          <Sprite className="z-[3]" type={Sprites.TROY} />
          <Sprite className="z-[2] pb-4" type={getRouteSprite(pathname)} />
        </div>
        <div className="absolute top-32 h-street-display-height w-[300%] self-start bg-street bg-contain bg-repeat" />
      </div>
    </div>
  );
}
