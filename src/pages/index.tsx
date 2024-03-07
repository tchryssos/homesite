import { Layout } from '~/components/meta/Layout';
import { CurrentGig } from '~/components/portfolio/CurrentGig';
import { Experiments } from '~/components/portfolio/Experiments';
import { Other } from '~/components/portfolio/Other';
import { Work } from '~/components/portfolio/Work';

function Home() {
  return (
    <Layout>
      <CurrentGig />
      <Experiments />
      <Work />
      <Other />
    </Layout>
  );
}

export default Home;
