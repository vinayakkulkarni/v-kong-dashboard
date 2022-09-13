import { NuxtConfig, PublicRuntimeConfig } from '@nuxt/schema';

const publicRuntimeConfig: PublicRuntimeConfig = {
  appVersion: process.env.npm_package_version || '0.0.0',
};

const css: NuxtConfig['css'] = ['~/assets/css/global.css'];

const plugins: NuxtConfig['plugins'] = [];

export { meta } from './meta';
export { modules } from './modules';
export { css, plugins, publicRuntimeConfig };
