import { defineNuxtConfig } from 'nuxt';
import { css, meta, modules, plugins, publicRuntimeConfig } from './config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  components: false,
  meta,
  css,
  plugins,
  modules,
  publicRuntimeConfig,
  typescript: {
    strict: true,
    shim: false,
  },
});
