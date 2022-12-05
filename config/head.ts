import type { NuxtAppConfig } from '@nuxt/schema';

export const head: NuxtAppConfig['head'] = {
  title: 'Kong Dashboard',
  meta: [
    {
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Kong Admin Dashboard for managing Kong APIs',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'Kong Dashboard',
    },
    {
      name: 'msapplication-TileColor',
      content: '#2d89ef',
    },
    {
      name: 'theme-color',
      content: '#5bbad5',
    },
  ],
  link: [
    {
      rel: 'mask-icon',
      color: '#5bbad5',
      href: '/safari-pinned-tab.svg',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
  ],
  noscript: [
    {
      innerHTML: 'This application requires JavaScript.',
    },
  ],
};
