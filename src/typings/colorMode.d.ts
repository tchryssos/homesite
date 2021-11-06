type ColorHash = `#${string}`;
type ColorRgba = `rgba(${number},${number},${number},${number})`;
export interface ColorModeColors {
  primary: ColorHash;
  background: ColorHash;
  text: ColorHash;
  textHover: ColorHash;
  darken: ColorRgba;
  lighten: ColorRgba;
  primaryHeavy: ColorHash;
}

export type ColorMode = 'standard';
