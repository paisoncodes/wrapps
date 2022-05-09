import { WebPlugin } from '@capacitor/core';

import type { WrappsPlugin } from './definitions';

export class WrappsWeb extends WebPlugin implements WrappsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
