import clsx from 'clsx';

import { TypographyProps } from './types';

export function Title({
  children,
  className,
  shadowed = true,
  bold,
  italic,
}: TypographyProps) {
  return (
    <h2
      className={clsx(
        'text-3xl text-text',
        bold && 'font-bold',
        shadowed && 'drop-shadow',
        italic && 'italic',
        className,
      )}
    >
      {children}
    </h2>
  );
}
