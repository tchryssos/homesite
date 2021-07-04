import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

import { sansFont, monoFont } from 'constants/styles/fonts';
import { white } from 'constants/styles/colors';

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
