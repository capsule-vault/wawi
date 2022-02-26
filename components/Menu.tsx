import React, { Fragment } from 'react';
import Image from 'next/image';
import { Transition, Dialog } from '@headlessui/react';

import Footer from './Footer';

import iconMenuCloseImg from '../public/icons/menu_close.png';

type Props = {
  isOpen?: boolean;
  isMobile?: boolean;
  onCloseBtnClick: () => void;
};

const Menu = ({ isOpen = false, isMobile = false, onCloseBtnClick }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        className="fixed inset-0 z-40"
        open={isOpen}
        onClose={onCloseBtnClick}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-98"
          leave="ease-in duration-200"
          leaveFrom="opacity-98"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-bg bg-opacity-98" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transform transition-all duration-300"
          enterFrom="opacity-0 translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transform transition-all duration-200"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-full"
        >
          <div className="fixed inset-0 z-50 sm:left-[unset] sm:w-[416px] sm:border-l bg-bg overflow-y-auto">
            <div className="flex flex-col justify-between min-h-screen">
              <div>
                <div className="px-[24px] py-[32px] border-b">
                  <div className="tab mb-[24px]">Introduction 介紹</div>
                  <p className="uppercase">Mint Now</p>
                </div>
                <div className="px-[24px] py-[32px] border-b">
                  <div className="tab mb-[24px]">Goal 目標</div>
                  <div className="space-y-[16px]">
                    <p className="uppercase">Story</p>
                    <p className="uppercase">Roadmap</p>
                  </div>
                </div>
                <div className="px-[24px] py-[32px] border-b">
                  <div className="tab">Artist 藝術家</div>
                </div>
                <div className="px-[24px] py-[32px] border-b">
                  <div className="tab">Team 團隊</div>
                </div>
                {isMobile && (
                  <div className="px-[24px] py-[34px] space-y-[24px]">
                    <button className="flex justify-center items-center w-full h-[48px] border rounded-full">
                      Connect Wallet
                    </button>
                    <button className="flex justify-center items-center w-full h-[48px] border rounded-full">
                      Existing Holders
                    </button>
                    <button className="flex justify-center items-center w-full h-[48px] border rounded-full">
                      English / 繁中
                    </button>
                  </div>
                )}
              </div>
              <div>
                <Footer isInMenu></Footer>
                <div className="flex justify-between items-center px-[24px] border-t">
                  <button onClick={onCloseBtnClick}>close</button>
                  <button className="w-[64px]" onClick={onCloseBtnClick}>
                    <Image
                      src={iconMenuCloseImg}
                      layout="responsive"
                      priority
                    ></Image>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
Menu.displayName = 'Menu';

export default Menu;
