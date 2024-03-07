import { twMerge } from 'tailwind-merge';

import { IconBuilderProps } from './types';

interface PathProps extends Pick<IconBuilderProps, 'pathClassName' | 'd'> {}

export function Path({ pathClassName, d }: PathProps) {
  return <path className={twMerge('fill-text', pathClassName)} d={d} />;
}
