import type { NuxtConfig } from '@nuxt/schema';
import { config as fonts } from './google-fonts';
import { config as unocss } from './unocss';

export const modules: NuxtConfig['modules'] = [
  // https://github.com/nuxt-community/google-fonts-module
  ['@nuxtjs/google-fonts', fonts],
  // https://github.com/nuxt-community/robots-module#setup
  '@nuxtjs/robots',
  // https://vueuse.org/guide/#nuxt
  '@vueuse/nuxt',
  // https://github.com/kevinmarrec/nuxt-pwa-module#nuxt-3-pwa
  '@kevinmarrec/nuxt-pwa',
  // https://unocss.dev/integrations/nuxt
  ['@unocss/nuxt', unocss],
];
