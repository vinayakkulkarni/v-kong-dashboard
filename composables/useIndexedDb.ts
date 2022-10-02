import { openDB, type IDBPDatabase } from 'idb';
import type { MyDB } from '~/types/auth';

/**
 * Composable for using idb
 *
 * @returns {Promise<IDBPDatabase<MyDB>>} - The IndexDB database
 */
async function useIdb(): Promise<IDBPDatabase<MyDB>> {
  const db = await openDB<MyDB>('kong-db', 1, {
    upgrade(db) {
      const authStore = db.createObjectStore('auth', {
        keyPath: 'url',
      });
      authStore.createIndex('by-url', 'url');
    },
  });
  return db;
}

export { useIdb };
