<template>
  <nav class="bg-gray-100 dark:bg-violet-900 shadow-md">
    <div class="mx-auto px-2 sm:px-4">
      <div class="relative flex justify-between h-14">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="isHamburgerMenuOpen = !isHamburgerMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              :class="{
                hidden: isHamburgerMenuOpen,
                block: !isHamburgerMenuOpen,
              }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              :class="{
                block: isHamburgerMenuOpen,
                hidden: !isHamburgerMenuOpen,
              }"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
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
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <!-- Kong White -->
            <svg
              v-if="isDark"
              class="cursor-pointer w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 142 128"
              @click="$router.push({ name: 'index' })"
            >
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M46.628 105.188h26.064l13.533 17.015L83.898 128H50.225l.826-5.797-7.938-12.522 3.515-4.493zm18.65-74.751 13.969-.021 62.77 74.833L137.14 128h-26.903l1.675-6.41-58.655-69.944 12.021-21.209zM89.958 0l29.18 22.934-3.736 3.855 5.06 7.046v7.534l-14.548 11.859-24.465-28.904H67.205l5.735-10.512L89.957 0zM28.71 73.453l20.355-17.69 27.016 32.51-7.67 11.91H43.5l-17.234 22.615L22.33 128H0v-27.748l20.813-26.799h7.897z"
              />
            </svg>
            <!-- Kong violet -->
            <svg
              v-if="!isDark"
              class="cursor-pointer w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 142 128"
              @click="$router.push({ name: 'index' })"
            >
              <path
                fill="#003459"
                fill-rule="evenodd"
                d="M46.628 105.188h26.064l13.533 17.015L83.898 128H50.225l.826-5.797-7.938-12.522 3.515-4.493zm18.65-74.751 13.969-.021 62.77 74.833L137.14 128h-26.903l1.675-6.41-58.655-69.944 12.021-21.209zM89.958 0l29.18 22.934-3.736 3.855 5.06 7.046v7.534l-14.548 11.859-24.465-28.904H67.205l5.735-10.512L89.957 0zM28.71 73.453l20.355-17.69 27.016 32.51-7.67 11.91H43.5l-17.234 22.615L22.33 128H0v-27.748l20.813-26.799h7.897z"
              />
            </svg>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <nuxt-link
              :to="{ name: 'index' }"
              :class="{
                'border-violet-500 dark:text-gray-100 text-gray-900':
                  $route.name === 'index',
                'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                  $route.name !== 'index',
              }"
              class="inline-flex items-center px-1 pt-1 border-b-2"
            >
              Kong Info
            </nuxt-link>
            <nuxt-link
              :to="{ name: 'services' }"
              :class="{
                'border-violet-500 dark:text-gray-100 text-gray-900':
                  $route.name === 'services',
                'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                  $route.name !== 'services',
              }"
              class="inline-flex items-center px-1 pt-1 border-b-2"
            >
              Services
            </nuxt-link>
            <nuxt-link
              :to="{ name: 'routes' }"
              :class="{
                'border-violet-500 dark:text-gray-100 text-gray-900':
                  $route.name === 'routes',
                'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                  $route.name !== 'routes',
              }"
              class="inline-flex items-center px-1 pt-1 border-b-2"
            >
              Routes
            </nuxt-link>
            <nuxt-link
              :to="{ name: 'upstreams' }"
              :class="{
                'border-violet-500 dark:text-gray-100 text-gray-900':
                  $route.name === 'upstreams',
                'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                  $route.name !== 'upstreams',
              }"
              class="inline-flex items-center px-1 pt-1 border-b-2"
            >
              Upstreams
            </nuxt-link>
            <nuxt-link
              :to="{ name: 'consumers' }"
              :class="{
                'border-violet-500 dark:text-gray-100 text-gray-900':
                  $route.name === 'consumers',
                'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                  $route.name !== 'consumers',
              }"
              class="inline-flex items-center px-1 pt-1 border-b-2"
            >
              Consumers
            </nuxt-link>
            <nuxt-link
              :to="{ name: 'plugins' }"
              :class="{
                'border-violet-500 dark:text-gray-100 text-gray-900':
                  $route.name === 'plugins',
                'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                  $route.name !== 'plugins',
              }"
              class="inline-flex items-center px-1 pt-1 border-b-2"
            >
              Plugins
            </nuxt-link>
            <nuxt-link
              :to="{ name: 'certificates' }"
              :class="{
                'border-violet-500 dark:text-gray-100 text-gray-900':
                  $route.name === 'certificates',
                'border-transparent dark:text-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300':
                  $route.name !== 'certificates',
              }"
              class="inline-flex items-center px-1 pt-1 border-b-2"
            >
              Certificates
            </nuxt-link>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="ml-3 relative">
            <div class="visible">
              <span class="relative z-0 inline-flex rounded-full">
                <svg
                  v-if="!isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 outline-none cursor-pointer"
                  viewBox="0 0 24 24"
                  @click="toggleDark()"
                >
                  <path
                    fill="currentColor"
                    d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"
                  />
                </svg>
                <svg
                  v-if="isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 outline-none cursor-pointer"
                  viewBox="0 0 512 512"
                  @click="toggleDark()"
                >
                  <path
                    fill="currentColor"
                    d="M256 387c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4v-46.2c0-8.5-6.9-15.4-15.4-15.4zm0-339c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4V63.4c0-8.5-6.9-15.4-15.4-15.4zM125 256c0-8.5-6.9-15.4-15.4-15.4H63.4c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4zm323.6-15.4h-46.2c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4s-6.9-15.4-15.4-15.4zM152.5 344.1c-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5l32.7-32.7c6-6 6-15.8 0-21.8-2.9-2.9-6.8-4.5-10.9-4.5zm207-176.2c4.1 0 8-1.6 10.9-4.5l32.7-32.7c2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5zm-228.8-59c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-2.9 2.9-4.5 6.8-4.5 10.9 0 4.1 1.6 8 4.5 10.9l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7zm239.7 239.7c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-6 6-6 15.8 0 21.8l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7zM256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="isHamburgerMenuOpen" id="mobile-menu" class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <nuxt-link
          :to="{ name: 'index' }"
          :class="{
            'bg-violet-50 border-violet-500 text-violet-700':
              $route.name === 'index',
            'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-900':
              $route.name !== 'index',
          }"
          class="block pl-3 pr-4 py-2 border-l-4 text-base"
        >
          Kong Info
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'services' }"
          :class="{
            'bg-violet-50 border-violet-500 text-violet-700':
              $route.name === 'services',
            'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-900':
              $route.name !== 'services',
          }"
          class="block pl-3 pr-4 py-2 border-l-4 text-base"
        >
          Services
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'routes' }"
          :class="{
            'bg-violet-50 border-violet-500 text-violet-700':
              $route.name === 'routes',
            'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-900':
              $route.name !== 'routes',
          }"
          class="block pl-3 pr-4 py-2 border-l-4 text-base"
        >
          Routes
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'upstreams' }"
          :class="{
            'bg-violet-50 border-violet-500 text-violet-700':
              $route.name === 'upstreams',
            'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-900':
              $route.name !== 'upstreams',
          }"
          class="block pl-3 pr-4 py-2 border-l-4 text-base"
        >
          Upstreams
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'consumers' }"
          :class="{
            'bg-violet-50 border-violet-500 text-violet-700':
              $route.name === 'consumers',
            'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-900':
              $route.name !== 'consumers',
          }"
          class="block pl-3 pr-4 py-2 border-l-4 text-base"
        >
          Consumers
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'plugins' }"
          :class="{
            'bg-violet-50 border-violet-500 text-violet-700':
              $route.name === 'plugins',
            'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-900':
              $route.name !== 'plugins',
          }"
          class="block pl-3 pr-4 py-2 border-l-4 text-base"
        >
          Plugins
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'certificates' }"
          :class="{
            'bg-violet-50 border-violet-500 text-violet-700':
              $route.name === 'certificates',
            'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-900':
              $route.name !== 'certificates',
          }"
          class="block pl-3 pr-4 py-2 border-l-4 text-base"
        >
          Certificates
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'VHeader',
    setup() {
      const isDark = useDark();
      const toggleDark = useToggle(isDark);
      const isHamburgerMenuOpen = ref(false);

      return {
        isDark,
        isHamburgerMenuOpen,
        toggleDark,
      };
    },
  });
</script>
