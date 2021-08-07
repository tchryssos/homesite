import clsx from 'clsx';
import { gray, white } from 'constants/styles/colors';
import React from 'react';
import { createUseStyles } from 'react-jss';

interface Props {
  children: React.ReactNode;
  className?: string;
  isTransparent?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const useStyles = createUseStyles({
  button: {
    border: [[1, 'solid', white]],
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  disabled: {
    borderColor: gray,
  },
  transparent: {
    border: 'none',
  },
});

const Button: React.FC<Props> = ({
  children,
  className,
  isTransparent,
  onClick,
  disabled,
}) => {
  const classes = useStyles();
  return (
    <button
      className={clsx(
        classes.button,
        {
          [classes.disabled]: disabled,
          [classes.transparent]: isTransparent,
        },
        className,
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
