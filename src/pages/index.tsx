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
        <SimpleGrid
          cols={4}
          spacing="md"
          breakpoints={[
            { maxWidth: 'lg', cols: 3, spacing: 'md' },
            { maxWidth: 'md', cols: 2, spacing: 'sm' },
            { maxWidth: 'xs', cols: 1, spacing: 'sm' },
          ]}
          className="justify-items-center items-center"
        >
          <CountryCard
            image="/image/CountryCards/Asia/su-san-lee-E_eWwM29wfU-unsplash.jpg"
            title="Asia"
          />
          <CountryCard
            image="/image/CountryCards/Europe/anthony-delanoix-aDxmYZtYj7g-unsplash.jpg"
            title="Europe"
          />
          <CountryCard
            image="/image/CountryCards/NorthAmerica/clay-banks-iTsNwMB-79M-unsplash.jpg"
            title="North America"
          />
          <CountryCard
            image="/image/CountryCards/SouthAmerica/f-cary-snyder-76L0Hup2Zyo-unsplash.jpg"
            title="South America"
          />
          <CountryCard
            image="/image/CountryCards/Africa/damian-patkowski-T-LfvX-7IVg-unsplash.jpg"
            title="Africa"
          />
          <CountryCard
            image="/image/CountryCards/Oceania/florencia-lewis-hfJVxvfGNAQ-unsplash.jpg"
            title="Oceania"
          />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Home;
