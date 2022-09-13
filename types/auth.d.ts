declare module '#app' {
  interface NuxtApp {
    $db(): IDBPDatabase<MyDB>;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $db(): IDBPDatabase<MyDB>;
  }
}

export {};
