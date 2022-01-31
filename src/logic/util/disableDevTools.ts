/* eslint-disable no-underscore-dangle */
// Credit to https://github.com/facebook/react-devtools/issues/191#issuecomment-443607190

import { getWindow } from './window';

export const disableDevTools = (): void => {
  const noop = (): void => undefined;

  const window = getWindow();
  let DEV_TOOLS;
  if (window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;
  }
  if (typeof DEV_TOOLS === 'object') {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(DEV_TOOLS)) {
      DEV_TOOLS[key] = typeof value === 'function' ? noop : null;
    }
  }
};
