<template>
  <section
    class="max-w-screen-sm w-full bg-white text-gray-900 rounded shadow p-4"
  >
    <form class="space-y-2" action="#" @submit.prevent="submit">
      <!-- Admin API URL -->
      <div>
        <label
          for="kong-admin-url"
          class="block text-sm font-medium text-gray-700"
        >
          Kong Admin API URL
        </label>
        <div class="mt-1">
          <input
            id="kong-admin-url"
            v-model="form.url"
            type="text"
            name="kong-admin-url"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
            placeholder="https://kong-admin.example.com"
          />
        </div>
      </div>
      <!-- Custom Headers -->
      <div>
        <label
          for="custom-headers"
          class="block text-sm font-medium text-gray-700"
        >
          Custom Headers
        </label>
        <div class="mt-1">
          <input
            id="custom-headers"
            v-model="form.headers"
            type="text"
            name="custom-headers"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
            placeholder="{ 'Authorization': 'Basic 1234567890' }"
          />
        </div>
      </div>
      <!-- Buttons -->
      <div class="flex justify-end w-full pt-4">
        <span class="isolate inline-flex rounded-md shadow-sm">
          <button
            type="reset"
            class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
          >
            Reset
          </button>
          <button
            type="submit"
            class="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
          >
            Submit
          </button>
        </span>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'HomePage',
    setup() {
      const form = ref({
        url: '',
        headers: '',
      });
      const submit = () => {
        console.log('form submitted', form);
      };

      return {
        form,
        submit,
      };
    },
  });
</script>
