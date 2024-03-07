import clsx from 'clsx';

import { TypographyProps } from './types';

export function Body({
  children,
  className,
  shadowed,
  bold,
  italic,
}: TypographyProps) {
  return (
    <p
      className={clsx(
        'font-body text-base text-text',
        bold && 'font-bold',
        shadowed && 'drop-shadow',
        italic && 'italic',
        className,
      )}
    >
      {children}
    </p>
  );
}
