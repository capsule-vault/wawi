import Image from 'next/image';
import React from 'react';

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
      <div className="tab uppercase">Links</div>
      <div className="mt-[32px] space-y-[48px]">
        {[
          {
            text: '➔ Smart Contract 智能合約',
            href: 'https://etherscan.io/address/0x9A894BFED8DEE52ADB437b897eCb65FD2052BE46',
          },
          {
            text: '➔ Wasted Wild Opensea 荒野購買平台',
            href: 'https://opensea.io/collection/wastedwild',
          },
          {
            text: '➔ Absurd Arboretum Website 荒謬植物園',
            href: 'https://ab-ar.art/',
          },
        ].map(({ text, href }) => (
          <a
            className="block text-[16px] font-light leading-[16px] tracking-[0.8px] no-underline"
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {text}
          </a>
        ))}
        <div className="block text-[16px] font-light leading-[16px] tracking-[0.8px] opacity-30">
          ➔ How To Mint 購買教學
        </div>
      </div>
    </div>
    <div
      className={`flex flex-col sm:justify-between ${
        isInMenu ? 'mt-[48px]' : 'mt-[61px] sm:mt-[unset]'
      }`}
    >
      <div className="flex justify-between items-center sm:space-x-[40px]">
        {[
          {
            iconImg: iconMediumImg,
            href: 'https://medium.com/@capsulevault',
          },
          {
            iconImg: iconTwitterImg,
            href: 'https://twitter.com/wastedwild_',
          },
          {
            iconImg: iconInstagramImg,
            href: 'https://www.instagram.com/capsulevault/',
          },
          {
            iconImg: iconDiscordImg,
            href: 'https://discord.gg/capsulevault',
          },
          {
            iconImg: iconOpenseaImg,
            href: 'https://opensea.io/collection/wastedwild',
          },
        ].map(({ iconImg, href }) => (
          <a
            className="w-[32px]"
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={iconImg} layout="responsive"></Image>
          </a>
        ))}
      </div>
      <p className={`mt-[61px] text-center ${isInMenu ? '' : 'sm:text-right'}`}>
        Copyright © 2022 Capsule Vault.
      </p>
    </div>
  </footer>
);
export default Footer;
