import type { NuxtConfig } from '@nuxt/schema';

export const config: NuxtConfig['googleFonts'] = {
  download: true,
  display: 'swap',
  families: {
    Roboto: true,
  },
};
