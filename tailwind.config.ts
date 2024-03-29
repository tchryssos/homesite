/* eslint-disable import/no-default-export */
import type { Config } from 'tailwindcss';

const colors = {
  primary: '#4f2d35',
  text: '#ffffff',
  inverseText: '#000',
  lighten: 'rgba(255, 255, 255, 0.6)',
  darken: 'rgba(0, 0, 0, 0.2)',
  primaryHeavy: '#301d21',
  textHover: '#d1d1d1',
  background: '#000000',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"PT Sans"', 'sans-serif'],
      },
      boxShadow: {
        'project-block': `0.25rem 0.25rem ${colors.primaryHeavy}`,
        'project-block-hover': `0.5rem 0.5rem ${colors.primaryHeavy}`,
      },
      spacing: {
        'breakpoint-xs': '639px',
        'breakpoint-sm': '640px',
        'breakpoint-md': '768px',
        'breakpoint-lg': '1024px',
        'breakpoint-xl': '1280px',
        'street-display-height': '104px',
      },
      transitionDuration: {
        'page-transition-time': '2000ms',
      },
      backgroundImage: {
        street: "url('/street_purp_sm.png')",
      },
    },
    colors,
  },
  plugins: [],
} satisfies Config;
