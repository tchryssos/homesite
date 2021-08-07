import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { white } from '~/constants/styles/colors';
import { monoFont } from '~/constants/styles/fonts';
import { useShadowStyles } from '~/logic/util/styles/shadow';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const useStyles = createUseStyles({
  h3: {
    color: white,
    fontSize: 36,
    fontFamily: monoFont,
  },
});

const Title: React.FC<Props> = ({ children, className }: Props) => {
  const classes = useStyles();
  const shadowClasses = useShadowStyles();
  return (
    <h2 className={clsx(classes.h3, shadowClasses.textShadow, className)}>
      {children}
    </h2>
  );
};

export default Title;
