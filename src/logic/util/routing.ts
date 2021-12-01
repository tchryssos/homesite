import { ABOUT_PATH, HOME_PATH } from '~/constants/routes';
import { Sprites } from '~/constants/sprites';

export const getRouteSprite = (path: string) => {
  switch (path) {
    case HOME_PATH:
      return Sprites.LAPTOP;
    case ABOUT_PATH:
      return Sprites.CANE;
    default:
      return Sprites.QUESTIONMAN;
  }
};
