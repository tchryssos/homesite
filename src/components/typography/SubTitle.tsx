import clsx from 'clsx';

import { TypographyProps } from './types';

export function SubTitle({
  children,
  className,
  shadowed,
  bold,
  italic,
}: TypographyProps) {
  return (
    <h3
      className={clsx(
        'font-mono text-xl text-text',
        bold && 'font-bold',
        shadowed && 'drop-shadow',
        italic && 'italic',
        className,
      )}
    >
      {children}
    </h3>
  );
}
