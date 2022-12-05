import type { NuxtConfig } from '@nuxt/schema';

export const windicss: NuxtConfig['windicss'] = {
  analyze: {
    analysis: {
      interpretUtilities: false,
    },
    server: {
      port: 8080,
      open: false,
    },
  },
};
