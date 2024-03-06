import clsx from 'clsx';

import { IconBuilderProps } from './types';

interface PathProps extends Pick<IconBuilderProps, 'pathClassName' | 'd'> {}

export function Path({ pathClassName, d }: PathProps) {
  return <path className={clsx('fill-text', pathClassName)} d={d} />;
}
