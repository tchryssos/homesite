import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import Icon from 'components/icons/Icon';

import { white } from 'constants/styles/colors';

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

const Email: React.FC<Props> = ({
  className,
  title,
  titleId,
  colorClassName,
}) => {
  const classes = useStyles();
  return (
    <Icon className={className} title={title} titleId={titleId}>
      <path
        className={clsx(classes.path, colorClassName)}
        d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"
      />
    </Icon>
  );
};

export default Email;
