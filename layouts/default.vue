<template>
  <div
    class="flex flex-col w-screen h-screen overflow-hidden text-gray-800 transition-colors duration-200 ease-linear bg-gray-100 select-none min-w-screen dark:bg-gray-900 dark:text-gray-100"
  >
    <!-- Header -->
    <header>
      <v-header />
    </header>
    <!-- Body -->
    <main
      class="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-gray-600 dark:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600"
    >
      <div class="flex items-center justify-center h-full">
        <slot />
      </div>
    </main>
    <!-- Footer -->
    <footer>
      <v-footer />
    </footer>
  </div>
</template>

<script lang="ts">
  import VFooter from '~/components/common/ui/VFooter.vue';
  import VHeader from '~/components/common/ui/VHeader.vue';

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      VHeader,
      VFooter,
    },
  });
</script>
