import styled from '@emotion/styled';

import { FlexBox } from '~/components/box/FlexBox';
import { Layout } from '~/components/meta/Layout';
import { pxToRem } from '~/logic/util/styles/pxToRem';

const FourOhFourText = styled.span(({ theme }) => ({
  color: theme.colors.text,
  fontSize: pxToRem(72),
  fontFamily: theme.fontFamily.decorative,
}));

const FourOhFour = () => (
  <Layout>
    <FlexBox center>
      <FourOhFourText>404</FourOhFourText>
    </FlexBox>
  </Layout>
);

export default FourOhFour;
