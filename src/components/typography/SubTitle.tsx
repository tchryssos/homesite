// import clsx from 'clsx';
// import React from 'react';
// import { createUseStyles } from 'react-jss';

// import { SM_MIN_STRING } from '~/constants/styles/breakpoints';
// import { white } from '~/constants/styles/colors';
// import { monoFont } from '~/constants/styles/fonts';
// import { useShadowStyles } from '~/logic/util/styles/shadow';

// interface Props {
//   className?: string;
//   children: React.ReactNode;
// }

// const useStyles = createUseStyles({
//   h3: {
//     color: white,
//     fontSize: 22,
//     fontFamily: monoFont,
//     [SM_MIN_STRING]: {
//       fontSize: 24,
//     },
//   },
// });

// const LittleTitle: React.FC<Props> = ({ children, className }: Props) => {
//   const classes = useStyles();
//   const shadowClasses = useShadowStyles();
//   return (
//     <h3 className={clsx(classes.h3, shadowClasses.textShadow, className)}>
//       {children}
//     </h3>
//   );
// };

// export default LittleTitle;

import styled from '@emotion/styled';

import { MarginProps } from '../box/types';
import { TypographyProps } from './types';

type BodyProps = Pick<MarginProps, 'mb'> & TypographyProps;

export const Body = styled.p<BodyProps>(
  ({ theme, bold, variant = 'normal', mb = 0, italic }) => ({
    fontFamily: theme.fontFamily[variant],
    fontSize:
      variant === 'normal' ? theme.fontSize.body : theme.fontSize.bigBody,
    marginBottom: theme.spacing[mb],
    lineHeight: theme.lineHeight.normal,
    color: theme.colors.text,
    fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.regular,
    fontStyle: italic ? 'italic' : '',
  }),
);
