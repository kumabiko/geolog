import { FC } from 'react';
import { Paper, Title } from '@mantine/core';

type CountryCardProps = {
  image: string;
  title: string;
};

export const CountryCard: FC<CountryCardProps> = ({ image, title }) => {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className="h-80 w-80 flex flex-col justify-between items-start bg-cover bg-center"
    >
      <div>
        <Title order={3} className="font-bold text-white text-3xl leading-tight">
          {title}
        </Title>
      </div>
    </Paper>
  );
};
