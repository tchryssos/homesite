import { createContext } from 'react';

import { BreakpointSize } from '~/typings/theme';

export const BreakpointsContext = createContext<BreakpointSize[]>(['xxs']);
