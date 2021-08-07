import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { white } from '~/constants/styles/colors';
import { monoFont, sansFont } from '~/constants/styles/fonts';

interface Props {
  className?: string;
  decorative?: boolean;
  children: React.ReactNode;
}

const useStyles = createUseStyles({
  body: {
    color: white,
    fontSize: 16,
    fontFamily: sansFont,
  },
  decorative: {
    fontSize: 20,
    fontFamily: monoFont,
  },
});

const Body: React.FC<Props> = ({ children, className, decorative }) => {
  const classes = useStyles();
  return (
    <p
      className={clsx(
        classes.body,
        { [classes.decorative]: decorative },
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Body;
