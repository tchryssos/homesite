import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { BaseIconProps } from './types';

export function BaseIcon({
  viewBox = '0 0 24 24',
  title,
  titleId,
  className,
  children,
}: PropsWithChildren<BaseIconProps>) {
  return (
    <svg
      aria-labelledby={titleId}
      className={clsx('h-full w-full', className)}
      role="img"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>
      {children}
    </svg>
  );
}
