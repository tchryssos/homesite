import styled from '@emotion/styled';

import { pxToRem } from '~/logic/util/styles/pxToRem';

import { MarginProps } from '../box/types';
import { TypographyProps } from './types';

type TitleProps = Pick<MarginProps, 'mb'> & TypographyProps;

export const Title = styled.h1<TitleProps>(
  ({ theme, bold, variant = 'normal', mb = 0 }) => ({
    fontFamily: theme.fontFamily[variant],
    fontSize: theme.fontSize.title,
    marginBottom: theme.spacing[mb],
    lineHeight: theme.lineHeight.normal,
    color: theme.colors.text,
    fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.regular,
    textShadow: `${pxToRem(1)} ${pxToRem(2)} ${theme.colors.inverseText}`,
  }),
);
