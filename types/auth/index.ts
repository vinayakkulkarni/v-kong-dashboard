import type { DBSchema } from 'idb';

export type Auth = {
  url: string;
  headers?: string;
};

export interface MyDB extends DBSchema {
  auth: {
    value: Auth;
    key: string;
    indexes: { 'by-url': string };
  };
}
