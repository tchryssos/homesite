/* eslint-disable import/no-default-export */
import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
