import React from 'react';
import Image from 'next/image';

import iconMediumImg from '../public/icons/medium.png';
import iconTwitterImg from '../public/icons/twitter.png';
import iconInstagramImg from '../public/icons/instagram.png';
import iconDiscordImg from '../public/icons/discord.png';
import iconOpenseaImg from '../public/icons/opensea.png';

type Props = {
  isInMenu?: boolean;
};

const Footer = ({ isInMenu = false }: Props) => (
  <footer
    className={`flex flex-col px-[25px] ${
      isInMenu
        ? 'pt-0 sm:pt-[50px] pb-[25px]'
        : 'pt-[50px] pb-[100px] sm:flex-row sm:justify-between sm:px-[136px]'
    }`}
  >
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
    <div
      className={`flex flex-col sm:justify-between ${
        isInMenu ? 'pt-[48px]' : 'pt-[61px] sm:pt-[unset]'
      }`}
    >
      <div className="flex justify-between items-center sm:space-x-[40px]">
        <div className="w-[32px]">
          <Image src={iconMediumImg} layout="responsive"></Image>
        </div>
        <div className="w-[32px]">
          <Image src={iconTwitterImg} layout="responsive"></Image>
        </div>
        <div className="w-[32px]">
          <Image src={iconInstagramImg} layout="responsive"></Image>
        </div>
        <div className="w-[32px]">
          <Image src={iconDiscordImg} layout="responsive"></Image>
        </div>
        <div className="w-[32px]">
          <Image src={iconOpenseaImg} layout="responsive"></Image>
        </div>
      </div>
      <p
        className={`mt-[61px] sm:pb-[24px] text-center ${
          isInMenu ? '' : 'sm:text-right'
        }`}
      >
        Copyright © 2022 Capsule Vault.
      </p>
    </div>
  </footer>
);
export default Footer;
