import { NuxtConfig } from '@nuxt/schema';
import { fonts } from './google-fonts';
import { windicss } from './windicss';

export const modules: NuxtConfig['modules'] = [
  //
  ['@nuxtjs/google-fonts', fonts],
  // https://github.com/nuxt-community/robots-module#setup
  '@nuxtjs/robots',
  // https://vueuse.org/guide/#nuxt
  '@vueuse/nuxt',
  // https://github.com/kevinmarrec/nuxt-pwa-module#nuxt-3-pwa
  '@kevinmarrec/nuxt-pwa',
  // https://windicss.org/integrations/nuxt.html
  ['nuxt-windicss', windicss],
];
