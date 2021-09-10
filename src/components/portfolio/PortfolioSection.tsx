import React from 'react';
import { createUseStyles } from 'react-jss';

import { LG_MIN_STRING, SM_MIN_STRING } from '~/constants/styles/breakpoints';
import orNull from '~/logic/util/orNull';

import Body from '../typography/Body';
import Title from '../typography/Title';

const useStyles = createUseStyles({
  codeBlockWrapper: {
    display: 'grid',
    gridGap: 16,
    marginBottom: 16,
    gridTemplateColumns: '1fr',
    [SM_MIN_STRING]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [LG_MIN_STRING]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  descWrapper: {
    marginBottom: 16,
  },
  descText: {
    marginTop: 4,
  },
});

interface SectionProps {
  title: string;
  desc?: string;
  children: React.ReactNode;
}

export const PortfolioSection: React.FC<SectionProps> = ({
  title,
  desc,
  children,
}) => {
  const classes = useStyles();
  return (
    <>
      <Title>{title}</Title>
      <div className={classes.descWrapper}>
        {orNull(!!desc, <Body className={classes.descText}>{desc}</Body>)}
      </div>
      <div className={classes.codeBlockWrapper}>{children}</div>
    </>
  );
};
