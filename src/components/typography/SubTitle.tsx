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
    <h2
      className={clsx(
        'text-xl text-text sm:text-2xl',
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
