import React from 'react';

import PageWrapper from '~/components/PageWrapper';
import { CurrentGig } from '~/components/portfolio/CurrentGig';
import { Experiments } from '~/components/portfolio/Experiments';
import { Other } from '~/components/portfolio/Other';
import { Work } from '~/components/portfolio/Work';

const Portfolio = () => (
  <PageWrapper>
    <CurrentGig />
    <Experiments />
    <Work />
    <Other />
  </PageWrapper>
);

export default Portfolio;
