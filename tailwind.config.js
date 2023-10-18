// tailwind.config.js
import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/renderer/index.html',
  './src/renderer/src/**/*.{js,ts,jsx,tsx}',
  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  extend: {},
}
export const darkMode = 'class'
export const plugins = [
  nextui({
    prefix: 'soonbro',
    addCommonColors: false,
    defaultTheme: 'light',
    defaultExtendTheme: 'light',
    layout: {},
    themes: {
      light: {
        layout: {},
        colors: {}, // light theme colors
      },
      dark: {
        layout: {},
        colors: {}, // dark theme colors
      },
      // ... custom themes
      'purple-dark': {
        extend: 'dark',
        colors: {
          background: '#0D001A',
          foreground: '#ffffff',
          primary: {
            50: '#3B096C',
            100: '#520F83',
            200: '#7318A2',
            300: '#9823C2',
            400: '#c031e2',
            500: '#DD62ED',
            600: '#F182F6',
            700: '#FCADF9',
            800: '#FDD5F9',
            900: '#FEECFE',
            DEFAULT: '#DD62ED',
            foreground: '#ffffff',
          },
          focus: '#F182F6',
        },
        layout: {
          disabledOpacity: '0.3',
          radius: {
            small: '4px',
            medium: '6px',
            large: '8px',
          },
          borderWidth: {
            small: '1px',
            medium: '2px',
            large: '3px',
          },
        },
      },
      'yellow-dark': {
        extend: 'dark',
        colors: {
          background: '#36393F',
          foreground: '#ffffff',
          primary: {
            50: '#FEFCE8',
            100: '#FDEDD3',
            200: '#FBDBA7',
            300: '#F9C97C',
            400: '#F7B750',
            500: '#F5A524',
            600: '#C4841D',
            700: '#936316',
            800: '#62420E',
            900: '#312107',
            DEFAULT: '#F5A524',
            foreground: '#ffffff',
          },
          focus: '#C4841D',
        },
        layout: {
          disabledOpacity: '0.3',
          radius: {
            small: '4px',
            medium: '6px',
            large: '8px',
          },
          borderWidth: {
            small: '1px',
            medium: '2px',
            large: '3px',
          },
        },
      },
    },
  }),
]
