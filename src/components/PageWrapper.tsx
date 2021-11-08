import styled from '@emotion/styled';

import { FlexBox } from './box/FlexBox';

interface PageWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const PageContainer = styled(FlexBox)`
  width: 100%;
  max-width: ${({ theme }) => `${theme.breakpointValues.md}px`};
`;

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className,
}) => (
  <FlexBox className={className} flex={1} justifyContent="space-around" px={16}>
    <PageContainer column>{children}</PageContainer>
  </FlexBox>
);
