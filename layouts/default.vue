<template>
  <section
    class="flex flex-col w-screen h-screen overflow-hidden transition-colors duration-200 ease-linear bg-gray-100 text-gray-800 select-none min-w-screen dark:bg-gray-800 dark:text-gray-100"
  >
    <!-- Static sidebar for desktop -->
    <v-sidebar v-model:is-open="isSidebarOpen" :is-dark="isDark" />
    <div class="flex flex-col w-full h-full md:pl-64">
      <!-- Header -->
      <v-header
        v-model:is-open="isSidebarOpen"
        :is-dark="isDark"
        :toggle-dark="toggleDark"
      />
      <!-- Content -->
      <main
        class="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-gray-600 dark:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600"
      >
        <slot />
      </main>
    </div>
  </section>
</template>

<script lang="ts">
  import VHeader from '~/components/common/ui/VHeader.vue';
  import VSidebar from '~/components/common/ui/VSidebar.vue';

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      VSidebar,
      VHeader,
    },
    setup() {
      const isDark = useDark();
      const isSidebarOpen = ref(false);
      const toggleDark = useToggle(isDark);

      return {
        isSidebarOpen,
        isDark,
        toggleDark,
      };
    },
  });
</script>
