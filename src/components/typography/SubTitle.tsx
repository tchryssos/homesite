import styled from '@emotion/styled';

import { MarginProps } from '../box/types';
import { TypographyProps } from './types';

type SubTitleProps = Pick<MarginProps, 'mb'> & TypographyProps;

export const SubTitle = styled.h2<SubTitleProps>(
  ({ theme, bold, variant = 'normal', mb = 0, italic }) => ({
    fontFamily: theme.fontFamily[variant],
    fontSize: theme.fontSize.bigBody,
    marginBottom: theme.spacing[mb],
    lineHeight: theme.lineHeight.normal,
    color: theme.colors.text,
    fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.regular,
    fontStyle: italic ? 'italic' : '',
    [theme.breakpoints.sm]: {
      fontSize: theme.fontSize.subTitle,
    },
  }),
);
