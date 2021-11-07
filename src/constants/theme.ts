import { pxToRem } from '~/logic/util/styles/pxToRem';
import { ColorMode, ColorModeColors } from '~/typings/colorMode';

const breakpointValues = {
  xxs: 479,
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
};

const StandardModeColors: ColorModeColors = {
  primary: '#4f2d35',
  text: '#fff',
  inverseText: '#000',
  lighten: 'rgba(255, 255, 255, 0.6)',
  darken: 'rgba(0, 0, 0, 0.2)',
  primaryHeavy: '#301d21',
  textHover: '#d1d1d1',
  background: '#000',
};

const theme = {
  breakpointValues,
  breakpoints: {
    xxs: `@media only screen and (max-width: ${breakpointValues.xxs}px)`,
    xs: `@media only screen and (min-width: ${breakpointValues.xs}px)`,
    sm: `@media only screen and (min-width: ${breakpointValues.sm}px)`,
    md: `@media only screen and (min-width: ${breakpointValues.md}px)`,
    lg: `@media only screen and (min-width: ${breakpointValues.lg}px)`,
    xl: `@media only screen and (min-width: ${breakpointValues.xl}px)`,
  },
  spacing: {
    0: '0rem',
    4: '0.25rem',
    8: '0.5rem',
    12: '0.75rem',
    16: '1rem',
    20: '1.25rem',
    24: '1.5rem',
    32: '2rem',
    40: '2.5rem',
    48: '3rem',
    64: '4rem',
    80: '5rem',
    128: '8rem',
  },
  border: {
    borderRadius: {
      rounded: pxToRem(4),
      circular: '50%',
    },
    borderWidth: {
      1: pxToRem(1),
      2: pxToRem(2),
      3: pxToRem(3),
    },
  },
  fontSize: {
    subBody: '0.75rem',
    bigSubBody: '0.875rem',
    body: '1rem',
    bigBody: '1.25rem',
    subTitle: '1.5rem',
    title: '2rem',
  },
  fontFamily: {
    normal: "'PT Sans', sans-serif",
    decorative: "'VT323', monospace",
  },
  lineHeight: {
    normal: 1.2,
  },
  fontWeight: {
    regular: 400,
    bold: 700,
    black: 800,
  },
};

export const StandardTheme = { ...theme, colors: StandardModeColors };

export type ThemeShape = typeof StandardTheme;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Theme extends ThemeShape {}

export const themes: Record<ColorMode, Theme> = {
  standard: StandardTheme,
};
