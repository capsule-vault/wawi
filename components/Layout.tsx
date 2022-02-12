import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import logoImg from '../public/logo.png';
import iconMediumImg from '../public/icons/medium.png';
import iconTwitterImg from '../public/icons/twitter.png';
import iconInstagramImg from '../public/icons/instagram.png';
import iconDiscordImg from '../public/icons/discord.png';
import iconOpenseaImg from '../public/icons/opensea.png';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="flex justify-between items-center h-[80px] pl-[17px] border-b border-primary">
      <Image src={logoImg}></Image>
      <div className="flex justify-center items-center w-[88px] h-full">
        <div className="w-[40px] h-[10px] border-y"></div>
      </div>
    </header>
    {children}
    <footer className="px-[25px] pt-[51px] pb-[100px]">
      <div>
        <div className="tab mb-[8px] uppercase">Links</div>
        <a className="block py-[24px] text-[16px] font-light leading-[16px] tracking-[0.8px]">
          ➔ Smart Contract 智能合約
        </a>
        <a className="block py-[24px] text-[16px] font-light leading-[16px] tracking-[0.8px]">
          ➔ Wasted Wild Opensea 荒野購買平台
        </a>
        <a className="block py-[24px] text-[16px] font-light leading-[16px] tracking-[0.8px] whitespace-nowrap">
          ➔ Absurd Arboretum Website 荒謬植物園
        </a>
        <a className="block py-[24px] text-[16px] font-light leading-[16px] tracking-[0.8px] opacity-30">
          ➔ How To Mint 購買教學
        </a>
      </div>
      <div className="pt-[61px]">
        <div className="flex justify-between items-center">
          <Image src={iconMediumImg}></Image>
          <Image src={iconTwitterImg}></Image>
          <Image src={iconInstagramImg}></Image>
          <Image src={iconDiscordImg}></Image>
          <Image src={iconOpenseaImg}></Image>
        </div>
        <p className="mt-[61px] text-center">Copyright © 2022 Capsule Vault.</p>
      </div>
    </footer>
  </>
);

export default Layout;
