import styled from '@emotion/styled';

import { MarginProps } from '../box/types';
import { createTextSharedStyles } from './styles';
import { TypographyProps } from './types';

type SubTitleProps = Pick<MarginProps, 'mb'> & TypographyProps;

export const SubTitle = styled.h2<SubTitleProps>`
  ${({ theme, variant = 'decorative', ...rest }) =>
    createTextSharedStyles(theme, { ...rest, variant })}
  font-size: ${({ theme }) => theme.fontSize.bigBody};
  ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
  }
`;
