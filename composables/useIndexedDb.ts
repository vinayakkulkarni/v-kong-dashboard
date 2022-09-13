import { openDB, type IDBPDatabase } from 'idb';
import type { MyDB } from '~/@types/auth';

/**
 * Composable for using idb
 *
 * @returns {Promise<IDBPDatabase<MyDB>>} - The IndexDB database
 */
async function useIdb(): Promise<IDBPDatabase<MyDB>> {
  const db = await openDB<MyDB>('db', 1, {
    upgrade(db) {
      // Create User Store
      const authStore = db.createObjectStore('auth', {
        keyPath: 'token',
      });
      authStore.createIndex('by-token', 'token');
    },
  });
  return db;
}

export { useIdb };
