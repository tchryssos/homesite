export type BaseIconProps = {
  class?: string;
  viewBox?: string;
  title: string;
};

export type IconBuilderProps = BaseIconProps & {
  d: string;
  pathClassName?: string;
};
