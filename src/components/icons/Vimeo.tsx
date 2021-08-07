import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';

import Icon from '~/components/icons/Icon';
import { white } from '~/constants/styles/colors';

interface Props {
  className?: string;
  colorClassName?: string;
  title: string;
  titleId: string;
}

const useStyles = createUseStyles({
  path: {
    fill: white,
  },
});

const Vimeo: React.FC<Props> = ({
  className,
  colorClassName,
  title,
  titleId,
}) => {
  const classes = useStyles();
  return (
    <Icon className={className} title={title} titleId={titleId}>
      <path
        className={clsx(classes.path, colorClassName)}
        d="M22 7.42c-.09 1.95-1.45 4.62-4.08 8.02C15.2 19 12.9 20.75 11 20.75c-1.15 0-2.14-1.08-2.95-3.25-.55-1.96-1.05-3.94-1.61-5.92-.6-2.16-1.24-3.24-1.94-3.24-.14 0-.66.32-1.56.95L2 8.07c1-.87 1.96-1.74 2.92-2.61 1.32-1.14 2.31-1.74 2.96-1.8 1.56-.16 2.52.92 2.88 3.2.39 2.47.66 4 .81 4.6.43 2.04.93 3.04 1.48 3.04.42 0 1.05-.64 1.89-1.97.84-1.32 1.29-2.33 1.35-3.03.12-1.14-.33-1.71-1.35-1.71-.48 0-.97.11-1.48.33.98-3.23 2.86-4.8 5.63-4.71 2.06.06 3.03 1.4 2.91 4.01z"
      />
    </Icon>
  );
};

export default Vimeo;
