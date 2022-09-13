import colors from 'windicss/colors';
import { defineConfig } from 'windicss/helpers';

const extract = {
  include: ['**/*.{vue,html,jsx,tsx,md}'],
  exclude: ['node_modules', '.git'],
};

const theme = {
  extend: {
    colors: {
      ...colors,
      gray: colors.stone,
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Inter var', ...require('windicss/defaultTheme').fontFamily.sans],
    },
    typography: {
      DEFAULT: {
        css: {
          pre: {
            backgroundColor: colors.stone[200],
          },
        },
      },
      DARK: {
        css: {
          pre: {
            backgroundColor: colors.stone[800],
          },
        },
      },
    },
  },
};
const plugins = [
  require('windicss/plugin/filters'),
  require('windicss/plugin/forms'),
  require('windicss/plugin/aspect-ratio'),
  require('windicss/plugin/line-clamp'),
  require('windicss/plugin/scroll-snap'),
  require('@windicss/plugin-scrollbar'),
  require('@windicss/plugin-animations'),
  require('windicss/plugin/typography')({
    // Turns text color to light, when dark mode enabled. Default = false
    dark: true,
    // Right-to-left mode (e.g. for Arabic, Uyghur languages). Default = false
    rtl: true,
    // Classname for typography plugin. Default = 'prose'
    className: 'prose',
  }),
  // require('windicss/plugin/typography')({
  //   dark: true,
  //   modifiers: ['DEFAULT', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
  // }),
];

export default defineConfig({
  darkMode: 'class',
  extract,
  theme,
  plugins,
});
