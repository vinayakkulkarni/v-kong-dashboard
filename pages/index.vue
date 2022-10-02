<template>
  <section class="w-full">
    <form
      v-if="!isKong"
      class="max-w-screen-sm space-y-2 bg-white text-gray-900 rounded shadow p-4"
      action="#"
      @submit.prevent="submit"
    >
      <!-- Admin API URL -->
      <div>
        <label
          for="kong-admin-url"
          class="block text-sm font-medium text-gray-700"
        >
          Kong Admin API URL <span class="text-red-400">*</span>
        </label>
        <div class="mt-1">
          <input
            id="kong-admin-url"
            v-model="form.url"
            type="text"
            name="kong-admin-url"
            required="true"
            autofocus="true"
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
            placeholder="'{ Authorization': 'Basic 1234567890' }'"
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
    <div v-else class="rounded shadow p-4">
      <!-- Card -->
      <div class="rounded shadow dark:border dark:border-gray-700">
        <div
          class="border-b border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6"
        >
          <h3 class="text-lg font-medium leading-6">Kong Details</h3>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Kong :: v2.8.1
          </p>
        </div>
        <div class="p-4">
          {{ data }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import type { IDBPDatabase } from 'idb';
  import type { Auth, MyDB } from '~/types/auth';
  import type { KongResponse } from '~/types/kong';
  export default defineComponent({
    name: 'HomePage',
    setup() {
      let db: IDBPDatabase<MyDB>;
      const form = ref({
        url: '',
        headers: '',
      });
      const data = ref<KongResponse | null>(null);
      const isKong = ref(false);
      onMounted(async () => {
        db = await useIdb();
        if (db) {
          const kong = await db.getAllFromIndex('auth', 'by-url', undefined, 0);
          if (kong && kong.length > 0) {
            const { url, headers } = kong.at(-1) as Auth;
            console.log('url: ', url);
            console.log('headers: ', headers);
            form.value.url = url;
            form.value.headers = headers || '';
            isKong.value = true;
            await submit();
          }
        }
      });

      const submit = async () => {
        data.value = await $fetch(form.value.url, {
          method: 'GET',
          headers: {},
        });
        if (data.value && 'hostname' in data.value && !isKong.value) {
          isKong.value = true;
          await db.put('auth', {
            url: form.value.url,
            headers: form.value.headers,
          });
        }
      };

      return {
        form,
        submit,
        isKong,
        data,
      };
    },
  });
</script>
