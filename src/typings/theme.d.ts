import { StandardTheme, Theme as CustomTheme } from '~/constants/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}
}

export type Spacing = keyof CustomTheme['spacing'];
export type Color = keyof CustomTheme['colors'];
export type BorderWidth = keyof CustomTheme['border']['borderWidth'];
export type BreakpointSize = keyof typeof StandardTheme.breakpointValues;
export type FontVariant = keyof CustomTheme['fontFamily'];
