import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { white } from '~/constants/styles/colors';
import ternary from '~/logic/util/ternary';

type Props =
  | {
      to: string | undefined;
      download?: boolean;
      className?: string;
      children: React.ReactNode;
      alt?: string;
    }
  | {
      to: string | undefined;
      download?: boolean;
      className?: string;
      alt: string;
    };

const useStyles = createUseStyles({
  link: {
    textDecoration: 'none',
    color: white,
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const ExtLink: React.FC<Props> = ({
  to,
  download,
  className,
  children,
  alt,
}) => {
  const classes = useStyles();
  return ternary(
    Boolean(to),
    <a
      aria-label={alt}
      className={clsx(classes.link, className)}
      download={download}
      href={to}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>,
    children,
  );
};

export default ExtLink;
