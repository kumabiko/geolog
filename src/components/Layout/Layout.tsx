import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { HeaderSimple } from '@/components/Navigation/Header';
import { Footer } from '@/components/Navigation/Footer';
import { HEADER_LINKS, FOOTER_DATA } from '@/common/constants';

type Title = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Title> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <HeaderSimple links={HEADER_LINKS.links}></HeaderSimple>
        <main className="flex-1">{children}</main>
        <Footer data={FOOTER_DATA.data}></Footer>
      </div>
    </div>
  );
};
