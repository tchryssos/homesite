import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { MD_MIN_VALUE } from '~/constants/styles/breakpoints';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const useStyles = createUseStyles({
  pageWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    padding: [[0, 16]],
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: MD_MIN_VALUE,
  },
});

const PageWrapper: React.FC<Props> = ({ children, className }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.pageWrapper, className)}>
      <div className={classes.pageContainer}>{children}</div>
    </div>
  );
};

export default PageWrapper;
