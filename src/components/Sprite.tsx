import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

import { TROY, LAPTOP, CANE, TROY_RIGHT } from 'constants/sprites';

import dumbCane from 'static/dumbcane.gif';
import laptop from 'static/laptop.gif';
import questionMan from 'static/questionman.gif';
import troy from 'static/troy.gif';
import troyRight from 'static/troy_right.gif';

interface Props {
  type: string;
  style?: {};
  className?: string;
}

const useStyles = createUseStyles({
  spriteContainer: {
    maxWidth: 128,
    maxHeight: 190,
    display: 'flex',
    alignItems: 'flex-end',
  },
  sprite: {
    width: '100%',
  },
  troySprite: {
    height: '100%',
  },
  troyRight: {
    // Whoops when I made these gifs years ago
    // Troy right and Troy weren't given the same dimensions / whitespace
    height: '95%',
    width: 90,
    transform: 'translateY(-6px)',
  },
});

const spriteSwitch = (type: string) => {
  switch (type) {
    case TROY:
      return troy;
    case TROY_RIGHT:
      return troyRight;
    case LAPTOP:
      return laptop;
    case CANE:
      return dumbCane;
    default:
      return questionMan;
  }
};

const Sprite: React.FC<Props> = ({ type, style = {}, className }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.spriteContainer, className)} style={style}>
      <img
        alt={`A sprite of ${type}`}
        className={clsx(classes.sprite, {
          [classes.troySprite]: type === TROY,
          [classes.troyRight]: type === TROY_RIGHT,
        })}
        src={spriteSwitch(type)}
      />
    </div>
  );
};

export default Sprite;
