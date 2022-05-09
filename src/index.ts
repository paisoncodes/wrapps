import { registerPlugin } from '@capacitor/core';

import type { WrappsPlugin } from './definitions';

const Wrapps = registerPlugin<WrappsPlugin>('Wrapps', {
  web: () => import('./web').then(m => new m.WrappsWeb()),
});

export * from './definitions';
export { Wrapps };
