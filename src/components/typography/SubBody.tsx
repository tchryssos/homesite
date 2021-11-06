import styled from '@emotion/styled';

import { MarginProps } from '../box/types';
import { TypographyProps } from './types';

type SubBodyProps = Pick<MarginProps, 'mb'> & TypographyProps;

export const SubBody = styled.p<SubBodyProps>(
  ({ theme, bold, variant = 'normal', mb = 0, italic }) => ({
    fontFamily: theme.fontFamily[variant],
    fontSize:
      variant === 'normal' ? theme.fontSize.subBody : theme.fontSize.bigSubBody,
    marginBottom: theme.spacing[mb],
    lineHeight: theme.lineHeight.normal,
    color: theme.colors.text,
    fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.regular,
    fontStyle: italic ? 'italic' : '',
  }),
);
