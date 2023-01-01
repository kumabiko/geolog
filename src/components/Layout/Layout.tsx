import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { HeaderSimple } from '@/components/Head/Header';
import { HEADER_LINKS } from '@/common/constants';

type Title = {
  title: string;
  children: ReactNode;
};
export const Layout: FC<Title> = ({ children, title = 'Todo app' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <HeaderSimple links={HEADER_LINKS.links}></HeaderSimple>
        <main className="flex-1">{children}</main>
        <footer className="flex h-12 w-full items-center justify-center border-t"></footer>
      </div>
    </div>
  );
};
