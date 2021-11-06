import { Layout } from '~/components/meta/Layout';
import Resume from '~/components/resume/Resume';
import { Body } from '~/components/typography/Body';
import { Title } from '~/components/typography/Title';

const Home = () => (
  <Layout>
    <Title mb={16}>Hey hey hey, I&apos;m Troy.</Title>
    <Body mb={16}>
      I&apos;m a front-end software engineer (and award-winning songwriter) with
      years of experience in the React ecosystem. I&apos;ve worked with everyone
      from the biggest corporate conglomos to the smallest independent
      fishmongers in New York building apps for media sharing, streaming, and
      creation.
    </Body>
    <Resume />
  </Layout>
);

export default Home;
