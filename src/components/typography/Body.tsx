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
