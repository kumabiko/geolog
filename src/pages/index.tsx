import type { NextPage } from 'next';
import { Layout } from '@/components/Layout';
import { FirstView } from '@/components/FirstView';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <FirstView />
    </Layout>
  );
};

export default Home;
