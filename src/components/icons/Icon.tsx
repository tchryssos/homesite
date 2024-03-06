import { BaseIcon } from './BaseIcon';
import { Path } from './Path';
import { IconBuilderProps } from './types';

export function Icon({ pathClassName, d, ...rest }: IconBuilderProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BaseIcon {...rest}>
      <Path d={d} pathClassName={pathClassName} />
    </BaseIcon>
  );
}
