<template>
  <section
    class="min-w-full h-14 py-4 text-xs border-t border-gray-500 dark:border-gray-700"
  >
    <div class="flex items-center justify-center w-full space-x-1">
      <span>Made with</span>
      <span class="transition transform animate-heart-beat text-red-500">
        ♥️
      </span>
      <a href="https://vinayakkulkarni.dev">Vinayak Kulkarni</a>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </div>
  </section>
</template>
