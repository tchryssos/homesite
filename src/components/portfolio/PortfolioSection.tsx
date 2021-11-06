import styled from '@emotion/styled';

import { Box } from '../box/Box';
import { GridBox } from '../box/GridBox';
import { Body } from '../typography/Body';
import { Title } from '../typography/Title';

const CodeBlockWrapper = styled(GridBox)(({ theme }) => ({
  gridTemplateColumns: '1fr',
  [theme.breakpoints.sm]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.lg]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));

const DescText = styled(Body)`
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

interface SectionProps {
  title: string;
  desc?: string;
  children: React.ReactNode;
}

export const PortfolioSection: React.FC<SectionProps> = ({
  title,
  desc,
  children,
}) => (
  <>
    <Title>{title}</Title>
    <Box mb={16}>{desc && <DescText>{desc}</DescText>}</Box>
    <CodeBlockWrapper columnGap={16} mb={16} rowGap={16}>
      {children}
    </CodeBlockWrapper>
  </>
);
