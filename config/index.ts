import { NuxtConfig } from '@nuxt/schema';
import { head } from './head';

const app: NuxtConfig['app'] = {
  head,
};

const runtimeConfig: NuxtConfig['runtimeConfig'] = {
  public: {
    appVersion: process.env.npm_package_version,
  },
};

const css: NuxtConfig['css'] = ['~/assets/css/global.css'];

const plugins: NuxtConfig['plugins'] = [];

const typescript: NuxtConfig['typescript'] = {
  strict: true,
  shim: false,
};

export { modules } from './modules';
export { app, css, plugins, runtimeConfig, typescript };
