import type { NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';
import { FirstView } from '@/components/Elements/Hero/FirstView';
import { Container, SimpleGrid, Space, Title } from '@mantine/core';
import { CountryCard } from '@/components/Elements';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <FirstView />
      <Container size={1376}>
        <Space h={40} />
        <Title order={2}>エリアから探す</Title>
        <Space h={40} />
        <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <CountryCard
            image="/image/CountryCards/Europe/anthony-delanoix-aDxmYZtYj7g-unsplash.jpg"
            title="Europe"
          />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Home;
