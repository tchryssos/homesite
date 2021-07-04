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

const Medium: React.FC<Props> = ({
  className,
  colorClassName,
  title,
  titleId,
}) => {
  const classes = useStyles();
  return (
    <Icon
      className={className}
      title={title}
      titleId={titleId}
      viewBox="0 0 1043.63 592.71"
    >
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            className={clsx(classes.path, colorClassName)}
            d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
          />
        </g>
      </g>
    </Icon>
  );
};

export default Medium;
