// import styled from '@emotion/styled';

// import { MarginProps } from '../box/types';
// import { createTextSharedStyles } from './styles';
// import { TypographyProps } from './types';

// type SubBodyProps = Pick<MarginProps, 'mb'> & TypographyProps;

// export const SubBody = styled.p<SubBodyProps>(
//   ({ theme, variant = 'normal', ...rest }) => ({
//     ...createTextSharedStyles(theme, { variant, ...rest }),
//     fontSize:
//       variant === 'normal' ? theme.fontSize.subBody : theme.fontSize.bigSubBody,
//   }),
// );

import styled from '@emotion/styled';

import { MarginProps } from '../box/types';
import { createTextSharedStyles } from './styles';
import { TypographyProps } from './types';

type SubBodyProps = Pick<MarginProps, 'mb'> & TypographyProps;

export const SubBody = styled.p<SubBodyProps>`
  ${({ theme, variant = 'normal', ...rest }) =>
    createTextSharedStyles(theme, { ...rest, variant })};
  font-size: ${({ theme, variant }) =>
    variant === 'normal' ? theme.fontSize.subBody : theme.fontSize.bigSubBody};
`;
