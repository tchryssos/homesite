export type BaseIconProps = {
  className?: string;
  viewBox?: string;
  title: string;
  titleId: string;
};

export type IconBuilderProps = BaseIconProps & {
  d: string;
  pathClassName?: string;
};
