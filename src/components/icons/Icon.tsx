import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';

interface Props {
  className?: string;
  viewBox?: string;
  title: string;
  titleId: string;
  children: React.ReactNode;
}

const useStyles = createUseStyles({
  svg: {
    height: '100%',
    width: '100%',
  },
});

const Icon: React.FC<Props> = ({
  viewBox = '0 0 24 24',
  title,
  titleId,
  className,
  children,
}) => {
  const classes = useStyles();
  return (
    <svg
      aria-labelledby={titleId}
      className={clsx(classes.svg, className)}
      role="img"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>
      {children}
    </svg>
  );
};

export default Icon;
