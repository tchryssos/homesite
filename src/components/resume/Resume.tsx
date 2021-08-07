import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';

import ExtLink from '~/components/ExtLink';
import LittleTitle from '~/components/typography/LittleTitle';
import { SM_MIN_STRING } from '~/constants/styles/breakpoints';
import { dimmed, white } from '~/constants/styles/colors';
import { useShadowStyles } from '~/logic/util/styles/shadow';
import resumePdf from '~/static/chryssos_resume.pdf';

const useStyles = createUseStyles({
  download: {
    border: [[2, 'solid', white]],
    borderRadius: 4,
    padding: [[8, 16]],
    width: '100%',
    marginBottom: 24,
    backgroundColor: dimmed,
    textAlign: 'center',
    [SM_MIN_STRING]: {
      width: 'fit-content',
    },
  },
  downloadText: {
    color: 'inherit',
  },
  resumeContainer: {
    border: [[2, 'solid', white]],
    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
    backgroundColor: dimmed,
    // backgroundColor: '#084C61',
    display: 'flex',
    flexWrap: 'wrap',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 16,
    [SM_MIN_STRING]: {
      width: '80%',
      marginBottom: 0,
    },
  },
  sidebar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [SM_MIN_STRING]: {
      width: '20%',
      textAlign: 'right',
    },
  },
  sectionLabel: {
    marginBottom: 16,
    textDecoration: 'underline',
  },
});

const Resume = () => {
  const classes = useStyles();
  const shadowClasses = useShadowStyles();
  return (
    <>
      <ExtLink
        className={clsx(
          classes.download,
          shadowClasses.shadow,
          shadowClasses.hoverShadow,
        )}
        download
        to={resumePdf}
      >
        <LittleTitle className={classes.downloadText}>
          Download Full Resume
        </LittleTitle>
      </ExtLink>
    </>
  );
};

export default Resume;
