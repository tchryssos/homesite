import { useContext } from 'react';

import { Layout } from '~/components/meta/Layout';
import { CurrentGig } from '~/components/portfolio/CurrentGig';
import { Experiments } from '~/components/portfolio/Experiments';
import { Other } from '~/components/portfolio/Other';
import { Work } from '~/components/portfolio/Work';
import { AnimationContext } from '~/logic/contexts/animation';

const Portfolio = () => {
  const { isAnimating } = useContext(AnimationContext);

  return (
    <Layout>
      {!isAnimating && (
        <>
          <CurrentGig />
          <Experiments />
          <Work />
          <Other />
        </>
      )}
    </Layout>
  );
};

export default Portfolio;
