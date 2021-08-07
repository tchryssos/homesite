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
  subText: {
    color: white,
    fontSize: 12,
    fontFamily: sansFont,
  },
  decorative: {
    fontSize: 14,
    fontFamily: monoFont,
  },
});

const SubText: React.FC<Props> = ({ children, decorative, className }) => {
  const classes = useStyles();
  return (
    <p
      className={clsx(
        classes.subText,
        { [classes.decorative]: decorative },
        className,
      )}
    >
      {children}
    </p>
  );
};

export default SubText;
