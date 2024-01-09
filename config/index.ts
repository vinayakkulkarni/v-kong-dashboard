import type { NuxtConfig } from 'nuxt/schema';
import { head } from './head';

const app: NuxtConfig['app'] = {
  head,
};

const components: NuxtConfig['components'] = false;

const css: NuxtConfig['css'] = [
  '@unocss/reset/tailwind.css',
  '~/assets/css/global.css',
];

const experimental: NuxtConfig['experimental'] = {
  asyncEntry: true,
  emitRouteChunkError: 'automatic',
  viewTransition: true,
  componentIslands: true,
  payloadExtraction: true,
  typedPages: true,
};

const nitro: NuxtConfig['nitro'] = {
  future: {
    nativeSWR: true,
  },
  prerender: {
    crawlLinks: true,
  },
};

const plugins: NuxtConfig['plugins'] = [];

const routeRules: NuxtConfig['routeRules'] = {
  // Homepage pre-rendered at build time
  '/': { prerender: true },
};

const runtimeConfig: NuxtConfig['runtimeConfig'] = {
  public: {
    appVersion: process.env.npm_package_version,
  },
};

const typescript: NuxtConfig['typescript'] = {
  strict: true,
  shim: false,
};

export { modules } from './modules';
export {
  app,
  components,
  css,
  experimental,
  nitro,
  plugins,
  routeRules,
  runtimeConfig,
  typescript,
};
