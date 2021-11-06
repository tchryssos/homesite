import { createContext } from 'react';

import { ColorMode } from '~/typings/colorMode';

export interface ThemeObj {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
}

export const defaultThemeContext: ThemeObj = {
  colorMode: 'standard',
  setColorMode: (themeMode: ColorMode) => themeMode,
};

export const ThemeContext = createContext<ThemeObj>(defaultThemeContext);
