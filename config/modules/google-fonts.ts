import type { NuxtConfig } from '@nuxt/schema';

export const fonts: NuxtConfig['googleFonts'] = {
  download: true,
  display: 'swap',
  families: {
    Roboto: true,
  },
};
