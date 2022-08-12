import Link from 'next/link';
import { Button, Stack } from '@mantine/core';
import { ReplyIcon } from '@heroicons/react/solid';
import { Layout } from '@/components/Layout';
import { BrandGithub, ThreeDCubeSphere } from 'tabler-icons-react';

const ButtonDemo = () => {
  return (
    <Layout title="Button">
      <Stack align="center">
        <Button
          classNames={{
            leftIcon: 'text-pink-500 h-6 w-6',
            rightIcon: 'text-orange-500 h-6 w-6',
          }}
          color="cyan"
          radius="lg"
          uppercase
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Press
        </Button>
        <Button mt="md">Click</Button>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Stack>
    </Layout>
  );
};

export default ButtonDemo;
