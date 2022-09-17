<template>
  <div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
    <transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-300"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="!isOpen" class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
    </transition>

    <div v-if="!isOpen" class="fixed inset-0 z-40 flex">
      <transition
        enter-from-class="transition ease-in-out duration-300 transform"
        enter-active-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-from-class="transition ease-in-out duration-300 transform"
        leave-active-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          v-if="!isOpen"
          class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4"
        >
          <transition
            enter-from-class="ease-in-out duration-300"
            enter-active-class="opacity-0"
            enter-to-class="opacity-100"
            leave-from-class="ease-in-out duration-300"
            leave-active-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                @click="$emit('update:is-open', !isOpen)"
              >
                <span class="sr-only">Close sidebar</span>
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </transition>

          <div class="flex flex-shrink-0 items-center px-4">
            <svg
              v-if="!isDark"
              class="cursor-pointer h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 386 128"
              @click="$router.push({ name: 'index' })"
            >
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M46.567 105.188h26.031l13.516 17.015L83.79 128H50.16l.825-5.797-7.928-12.522 3.51-4.493zm18.627-74.751 13.95-.021 62.69 74.833L136.963 128h-26.868l1.672-6.41-58.58-69.944 12.007-21.209zM89.84 0l29.142 22.934-3.73 3.855 5.053 7.046v7.534l-14.53 11.859-24.433-28.904H67.118l5.728-10.512L89.84 0zM28.673 73.453l20.328-17.69 26.982 32.51-7.661 11.91H43.443l-17.211 22.615L22.3 128H0v-27.748l20.786-26.799h7.887zm215.312 21.882c-5.044 0-7.656-.817-9.817-3.086-3.242-3.266-4.503-7.804-4.503-21.87 0-14.156 1.26-18.603 4.503-21.96 2.071-2.178 4.773-2.995 9.817-2.995h16.84c5.044 0 7.656.817 9.817 2.995 3.242 3.357 4.503 7.804 4.503 21.96 0 14.157-1.26 18.604-4.503 21.87-2.161 2.269-4.773 3.086-9.816 3.086h-16.841zm-.631-10.99h18.102v-27.95h-18.102v27.95zM316.09 61.22h.004v-4.633h-16.93v4.633h.003v34.115h-13.779v-49.91h9.074v-.004h4.653v6.312l6.943-6.312h4.029a20.463 20.463 0 0 1 2.049-.087h6.034c4.233 0 6.935.907 8.826 2.813 2.071 1.996 2.882 4.628 2.882 11.978v35.21h-13.78V61.758c0-.186-.002-.366-.008-.538zM208.13 31.624h16.397l-23.554 30.033 24.55 33.866H208.13l-18.673-26.61-4.429-.02v26.63h-14.766V31.624h14.766v24.77h4.423l18.679-24.77zm164.004 13.797 13.867.003v51.99c0 8.62-.9 10.08-3.152 12.44-1.801 1.906-4.683 2.813-9.727 2.813l-20.32-.043-6.263-6.995-.02-2.942h25.615l-.025-7.117-17.471-.012c-5.314 0-7.993-.999-10.245-3.177-2.882-2.995-4.053-9.549-4.053-21.8 0-12.341 1.442-19.077 4.413-22.162 2.251-2.178 5.134-3.085 10.087-3.085l10.351.087 6.943 6.312V45.42zm-18.015 38.942h18.103V56.394h-18.103v27.969z"
              />
            </svg>
            <!-- Kong violet -->
            <svg
              v-if="isDark"
              class="cursor-pointer h-8"
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              style="enable-background: new 0 0 386 128"
              viewBox="0 0 386 128"
              @click="$router.push({ name: 'index' })"
            >
              <path
                d="M354.1 84.4h18.1v-28h-18.1v28zm18-39H386v52c0 8.6-.9 10.1-3.2 12.4-1.8 1.9-4.7 2.8-9.7 2.8h-20.3l-6.3-7v-2.9h25.6v-7.1h-17.5c-5.3 0-8-1-10.2-3.2-2.9-3-4.1-9.5-4.1-21.8s1.4-19.1 4.4-22.2c2.3-2.2 5.1-3.1 10.1-3.1l10.4.1 6.9 6.3v-6.3zm-164-13.8h16.4l-23.6 30 24.6 33.9h-17.4l-18.7-26.6H185v26.6h-14.8V31.6H185v24.8h4.4l18.7-24.8zm108 29.6v-4.6h-17v38.7h-13.8V45.4h13.8v6.3l6.9-6.3h4c.6-.1 1.3-.1 2-.1h6c4.2 0 6.9.9 8.8 2.8 2.1 2 2.9 4.6 2.9 12v35.2h-13.8V61.8c.2-.2.2-.4.2-.6zm-72.7 23.1h18.1v-28h-18.1v28zm.6 11c-5 0-7.7-.8-9.8-3.1-3.2-3.3-4.5-7.8-4.5-21.9 0-14.2 1.3-18.6 4.5-22 2.1-2.2 4.8-3 9.8-3h16.8c5 0 7.7.8 9.8 3 3.2 3.4 4.5 7.8 4.5 22s-1.3 18.6-4.5 21.9c-2.2 2.3-4.8 3.1-9.8 3.1H244z"
                style="fill-rule: evenodd; clip-rule: evenodd; fill: #043558"
              />
              <path
                d="m42.9 110 3.5-4.4h25.9l13.5 16.8-2.4 5.7H50l.8-5.7z"
                style="fill-rule: evenodd; clip-rule: evenodd; fill: #169fcc"
              />
              <path
                d="m52.6 51.8 12.1-21.3h14.1l63.2 74.8-4.9 22.8H110l1.7-6.4z"
                style="fill-rule: evenodd; clip-rule: evenodd; fill: #14b59a"
              />
              <path
                d="m67 25.2 5.7-10.6L89.8.7l29.3 23.1-3.8 3.9 5.1 7.1v7.6l-14.6 12-24.5-29.2z"
                style="fill-rule: evenodd; clip-rule: evenodd; fill: #1bc263"
              />
              <path
                d="M20.8 73.7h7.9l20.6-17.6 27.3 32.4-7.7 11.8H43.7l-17.4 22.6-4 5.2H-.3v-27.7z"
                style="fill-rule: evenodd; clip-rule: evenodd; fill: #16bdcc"
              />
            </svg>
          </div>
          <div class="mt-5 h-0 flex-1 overflow-y-auto">
            <nav class="space-y-1 px-2">
              <nuxt-link
                :to="{ name: 'index' }"
                :class="{
                  'bg-gray-900 text-white': $route.name === 'index',
                  'text-gray-300 hover:bg-gray-700 hover:text-white':
                    $route.name !== 'index',
                }"
                class="group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  :class="{
                    'text-gray-300': $route.name === 'index',
                    'text-gray-400 dark:text-violet-900 group-hover:text-gray-300':
                      $route.name !== 'index',
                  }"
                  class="mr-3 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
                Kong Info
              </nuxt-link>

              <nuxt-link
                :to="{ name: 'services' }"
                :class="{
                  'bg-gray-900 text-white': $route.name === 'services',
                  'text-gray-300 hover:bg-gray-700 hover:text-white':
                    $route.name !== 'services',
                }"
                class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  :class="{
                    'text-gray-300': $route.name === 'services',
                    'text-gray-400 dark:text-violet-900 group-hover:text-gray-300':
                      $route.name !== 'services',
                  }"
                  class="mr-3 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                Service(s)
              </nuxt-link>

              <nuxt-link
                :to="{ name: 'routes' }"
                :class="{
                  'border-violet-500 dark:text-gray-100 text-gray-900':
                    $route.name === 'routes',
                  'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                    $route.name !== 'routes',
                }"
                class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  class="text-gray-400 dark:text-violet-900 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
                Route(s)
              </nuxt-link>

              <nuxt-link
                :to="{ name: 'upstreams' }"
                :class="{
                  'border-violet-500 dark:text-gray-100 text-gray-900':
                    $route.name === 'upstreams',
                  'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                    $route.name !== 'upstreams',
                }"
                class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  class="text-gray-400 dark:text-violet-900 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
                Upstream(s)
              </nuxt-link>

              <nuxt-link
                :to="{ name: 'consumers' }"
                :class="{
                  'border-violet-500 dark:text-gray-100 text-gray-900':
                    $route.name === 'consumers',
                  'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                    $route.name !== 'consumers',
                }"
                class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="text-gray-400 dark:text-violet-900 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                Consumer(s)
              </nuxt-link>

              <nuxt-link
                :to="{ name: 'plugins' }"
                :class="{
                  'border-violet-500 dark:text-gray-100 text-gray-900':
                    $route.name === 'plugins',
                  'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                    $route.name !== 'plugins',
                }"
                class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  class="text-gray-400 dark:text-violet-900 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Plugin(s)
              </nuxt-link>

              <nuxt-link
                :to="{ name: 'certificates' }"
                :class="{
                  'border-violet-500 dark:text-gray-100 text-gray-900':
                    $route.name === 'certificates',
                  'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                    $route.name !== 'certificates',
                }"
                class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <!-- Heroicon name: outline/chart-bar -->
                <svg
                  class="text-gray-400 dark:text-violet-900 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>

                Certificate(s)
              </nuxt-link>
            </nav>
          </div>
        </div>
      </transition>
      <div class="w-14 flex-shrink-0" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
  <!-- Static Sidebar -->
  <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex min-h-0 flex-1 flex-col bg-gray-800 dark:bg-violet-300 dark:text-gray-900"
    >
      <div
        class="flex h-16 flex-shrink-0 items-center bg-gray-900 dark:bg-violet-200 dark:text-gray-900 px-4"
      >
        <svg
          v-if="!isDark"
          class="cursor-pointer h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 386 128"
          @click="$router.push({ name: 'index' })"
        >
          <path
            fill="#FFF"
            fill-rule="evenodd"
            d="M46.567 105.188h26.031l13.516 17.015L83.79 128H50.16l.825-5.797-7.928-12.522 3.51-4.493zm18.627-74.751 13.95-.021 62.69 74.833L136.963 128h-26.868l1.672-6.41-58.58-69.944 12.007-21.209zM89.84 0l29.142 22.934-3.73 3.855 5.053 7.046v7.534l-14.53 11.859-24.433-28.904H67.118l5.728-10.512L89.84 0zM28.673 73.453l20.328-17.69 26.982 32.51-7.661 11.91H43.443l-17.211 22.615L22.3 128H0v-27.748l20.786-26.799h7.887zm215.312 21.882c-5.044 0-7.656-.817-9.817-3.086-3.242-3.266-4.503-7.804-4.503-21.87 0-14.156 1.26-18.603 4.503-21.96 2.071-2.178 4.773-2.995 9.817-2.995h16.84c5.044 0 7.656.817 9.817 2.995 3.242 3.357 4.503 7.804 4.503 21.96 0 14.157-1.26 18.604-4.503 21.87-2.161 2.269-4.773 3.086-9.816 3.086h-16.841zm-.631-10.99h18.102v-27.95h-18.102v27.95zM316.09 61.22h.004v-4.633h-16.93v4.633h.003v34.115h-13.779v-49.91h9.074v-.004h4.653v6.312l6.943-6.312h4.029a20.463 20.463 0 0 1 2.049-.087h6.034c4.233 0 6.935.907 8.826 2.813 2.071 1.996 2.882 4.628 2.882 11.978v35.21h-13.78V61.758c0-.186-.002-.366-.008-.538zM208.13 31.624h16.397l-23.554 30.033 24.55 33.866H208.13l-18.673-26.61-4.429-.02v26.63h-14.766V31.624h14.766v24.77h4.423l18.679-24.77zm164.004 13.797 13.867.003v51.99c0 8.62-.9 10.08-3.152 12.44-1.801 1.906-4.683 2.813-9.727 2.813l-20.32-.043-6.263-6.995-.02-2.942h25.615l-.025-7.117-17.471-.012c-5.314 0-7.993-.999-10.245-3.177-2.882-2.995-4.053-9.549-4.053-21.8 0-12.341 1.442-19.077 4.413-22.162 2.251-2.178 5.134-3.085 10.087-3.085l10.351.087 6.943 6.312V45.42zm-18.015 38.942h18.103V56.394h-18.103v27.969z"
          />
        </svg>
        <!-- Kong violet -->
        <svg
          v-if="isDark"
          class="cursor-pointer h-8"
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          style="enable-background: new 0 0 386 128"
          viewBox="0 0 386 128"
          @click="$router.push({ name: 'index' })"
        >
          <path
            d="M354.1 84.4h18.1v-28h-18.1v28zm18-39H386v52c0 8.6-.9 10.1-3.2 12.4-1.8 1.9-4.7 2.8-9.7 2.8h-20.3l-6.3-7v-2.9h25.6v-7.1h-17.5c-5.3 0-8-1-10.2-3.2-2.9-3-4.1-9.5-4.1-21.8s1.4-19.1 4.4-22.2c2.3-2.2 5.1-3.1 10.1-3.1l10.4.1 6.9 6.3v-6.3zm-164-13.8h16.4l-23.6 30 24.6 33.9h-17.4l-18.7-26.6H185v26.6h-14.8V31.6H185v24.8h4.4l18.7-24.8zm108 29.6v-4.6h-17v38.7h-13.8V45.4h13.8v6.3l6.9-6.3h4c.6-.1 1.3-.1 2-.1h6c4.2 0 6.9.9 8.8 2.8 2.1 2 2.9 4.6 2.9 12v35.2h-13.8V61.8c.2-.2.2-.4.2-.6zm-72.7 23.1h18.1v-28h-18.1v28zm.6 11c-5 0-7.7-.8-9.8-3.1-3.2-3.3-4.5-7.8-4.5-21.9 0-14.2 1.3-18.6 4.5-22 2.1-2.2 4.8-3 9.8-3h16.8c5 0 7.7.8 9.8 3 3.2 3.4 4.5 7.8 4.5 22s-1.3 18.6-4.5 21.9c-2.2 2.3-4.8 3.1-9.8 3.1H244z"
            style="fill-rule: evenodd; clip-rule: evenodd; fill: #043558"
          />
          <path
            d="m42.9 110 3.5-4.4h25.9l13.5 16.8-2.4 5.7H50l.8-5.7z"
            style="fill-rule: evenodd; clip-rule: evenodd; fill: #169fcc"
          />
          <path
            d="m52.6 51.8 12.1-21.3h14.1l63.2 74.8-4.9 22.8H110l1.7-6.4z"
            style="fill-rule: evenodd; clip-rule: evenodd; fill: #14b59a"
          />
          <path
            d="m67 25.2 5.7-10.6L89.8.7l29.3 23.1-3.8 3.9 5.1 7.1v7.6l-14.6 12-24.5-29.2z"
            style="fill-rule: evenodd; clip-rule: evenodd; fill: #1bc263"
          />
          <path
            d="M20.8 73.7h7.9l20.6-17.6 27.3 32.4-7.7 11.8H43.7l-17.4 22.6-4 5.2H-.3v-27.7z"
            style="fill-rule: evenodd; clip-rule: evenodd; fill: #16bdcc"
          />
        </svg>
      </div>
      <div class="flex flex-1 flex-col overflow-y-auto">
        <nav class="flex-1 space-y-1 px-2 py-4">
          <nuxt-link
            :to="{ name: 'index' }"
            :class="{
              'bg-gray-900 text-white dark:bg-violet-900 dark:text-gray-100':
                $route.name === 'index',
              'text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-900 dark:hover:bg-violet-700 dark:hover:text-white':
                $route.name !== 'index',
            }"
            class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          >
            <svg
              :class="{
                'text-gray-300 dark:text-violet-200': $route.name === 'index',
                'text-gray-400 dark:text-violet-900 group-hover:text-gray-300 dark:group-hover:text-violet-400':
                  $route.name !== 'index',
              }"
              class="mr-3 flex-shrink-0 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
            Kong Info
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'services' }"
            :class="{
              'bg-gray-900 text-white dark:bg-violet-900 dark:text-gray-100':
                $route.name === 'services',
              'text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-900 dark:hover:bg-violet-700 dark:hover:text-white':
                $route.name !== 'services',
            }"
            class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          >
            <svg
              :class="{
                'text-gray-300 dark:text-violet-200':
                  $route.name === 'services',
                'text-gray-400 dark:text-violet-900 group-hover:text-gray-300 dark:group-hover:text-violet-100':
                  $route.name !== 'services',
              }"
              class="mr-3 flex-shrink-0 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            Service(s)
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'routes' }"
            :class="{
              'bg-gray-900 text-white dark:bg-violet-900 dark:text-gray-100':
                $route.name === 'routes',
              'text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-900 dark:hover:bg-violet-700 dark:hover:text-white':
                $route.name !== 'routes',
            }"
            class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          >
            <svg
              :class="{
                'text-gray-300 dark:text-violet-200': $route.name === 'routes',
                'text-gray-400 dark:text-violet-900 group-hover:text-gray-300 dark:group-hover:text-violet-100':
                  $route.name !== 'routes',
              }"
              class="mr-3 flex-shrink-0 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
            Route(s)
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'upstreams' }"
            :class="{
              'bg-gray-900 text-white dark:bg-violet-900 dark:text-gray-100':
                $route.name === 'upstreams',
              'text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-900 dark:hover:bg-violet-700 dark:hover:text-white':
                $route.name !== 'upstreams',
            }"
            class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          >
            <svg
              :class="{
                'text-gray-300 dark:text-violet-200':
                  $route.name === 'upstreams',
                'text-gray-400 dark:text-violet-900 group-hover:text-gray-300 dark:group-hover:text-violet-100':
                  $route.name !== 'upstreams',
              }"
              class="mr-3 flex-shrink-0 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
            Upstream(s)
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'consumers' }"
            :class="{
              'bg-gray-900 text-white dark:bg-violet-900 dark:text-gray-100':
                $route.name === 'consumers',
              'text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-900 dark:hover:bg-violet-700 dark:hover:text-white':
                $route.name !== 'consumers',
            }"
            class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          >
            <svg
              :class="{
                'text-gray-300 dark:text-violet-200':
                  $route.name === 'consumers',
                'text-gray-400 dark:text-violet-900 group-hover:text-gray-300 dark:group-hover:text-violet-100':
                  $route.name !== 'consumers',
              }"
              class="mr-3 flex-shrink-0 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Consumer(s)
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'plugins' }"
            :class="{
              'bg-gray-900 text-white dark:bg-violet-900 dark:text-gray-100':
                $route.name === 'plugins',
              'text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-900 dark:hover:bg-violet-700 dark:hover:text-white':
                $route.name !== 'plugins',
            }"
            class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          >
            <svg
              :class="{
                'text-gray-300 dark:text-violet-200': $route.name === 'plugins',
                'text-gray-400 dark:text-violet-900 group-hover:text-gray-300 dark:group-hover:text-violet-100':
                  $route.name !== 'plugins',
              }"
              class="mr-3 flex-shrink-0 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Plugin(s)
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'certificates' }"
            :class="{
              'bg-gray-900 text-white dark:bg-violet-900 dark:text-gray-100':
                $route.name === 'certificates',
              'text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-900 dark:hover:bg-violet-700 dark:hover:text-white':
                $route.name !== 'certificates',
            }"
            class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          >
            <!-- Heroicon name: outline/chart-bar -->
            <svg
              :class="{
                'text-gray-300 dark:text-violet-200':
                  $route.name === 'certificates',
                'text-gray-400 dark:text-violet-900 group-hover:text-gray-300 dark:group-hover:text-violet-100':
                  $route.name !== 'certificates',
              }"
              class="mr-3 flex-shrink-0 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>

            Certificate(s)
          </nuxt-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'VSidebar',
    props: {
      isOpen: {
        type: Boolean,
        default: false,
      },
      isDark: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:is-open'],
  });
</script>
