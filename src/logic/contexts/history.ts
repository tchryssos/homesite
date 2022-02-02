import { createContext } from 'react';

export const HistoryContext = createContext<
  [string | undefined, string | undefined]
>([undefined, undefined]);
