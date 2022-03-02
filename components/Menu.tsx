import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';

import Footer from './Footer';

import { Context } from '../pages/_app';

import iconMenuCloseImg from '../public/icons/menu_close.png';

type Props = {
  isOpen?: boolean;
  onCloseBtnClick: () => void;
  onOpenHolderBtnClick: () => void;
};

const Menu = ({
  isOpen = false,
  onCloseBtnClick,
  onOpenHolderBtnClick,
}: Props) => {
  const { state } = useContext(Context);

  const router = useRouter();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        className="fixed inset-0 z-40"
        open={isOpen}
        onClose={onCloseBtnClick}
      >
        {!state.isMobile && (
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
        )}
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
                  <Link href="/#">
                    <button
                      className="tab block mb-[24px] no-underline"
                      onClick={onCloseBtnClick}
                    >
                      Introduction 介紹
                    </button>
                  </Link>
                  <Link href="/#mint">
                    <button
                      className="p block uppercase no-underline"
                      onClick={onCloseBtnClick}
                    >
                      Mint Now
                    </button>
                  </Link>
                </div>
                <div className="px-[24px] py-[32px] border-b">
                  <Link href="/#goal">
                    <button
                      className="tab block mb-[24px] no-underline"
                      onClick={onCloseBtnClick}
                    >
                      Core Values 核心價值
                    </button>
                  </Link>
                  <div className="space-y-[16px]">
                    <Link href="/#goal">
                      <button
                        className="p block uppercase no-underline"
                        onClick={onCloseBtnClick}
                      >
                        Story
                      </button>
                    </Link>
                    <Link href="/#roadmap">
                      <button
                        className="p block uppercase no-underline"
                        onClick={onCloseBtnClick}
                      >
                        Roadmap
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="px-[24px] py-[32px] border-b">
                  <Link href="/#artist">
                    <button
                      className="tab block no-underline"
                      onClick={onCloseBtnClick}
                    >
                      Collaborations 聯名
                    </button>
                  </Link>
                </div>
                <div className="px-[24px] py-[32px] border-b">
                  <Link href="/#team">
                    <button
                      className="tab block no-underline"
                      onClick={onCloseBtnClick}
                    >
                      Team 團隊
                    </button>
                  </Link>
                </div>
                {state.isMobile && (
                  <div className="px-[24px] py-[34px] space-y-[24px]">
                    <button
                      className="flex justify-center items-center w-full h-[48px] border rounded-full"
                      disabled
                    >
                      Connect Wallet
                    </button>
                    <button
                      className="flex justify-center items-center w-full h-[48px] border rounded-full"
                      onClick={onOpenHolderBtnClick}
                    >
                      Existing Holders
                    </button>
                    <Link
                      href="/"
                      locale={router.locale === 'en' ? 'tw' : 'en'}
                    >
                      <button className="flex justify-center items-center w-full h-[48px] border rounded-full">
                        English / 繁中
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <Footer isInMenu></Footer>
                <div className="fixed inset-x-0 sm:inset-x-[unset] bottom-0 bg-bg">
                  <div className="flex justify-between items-center sm:w-[416px] h-[80px] px-[24px] border-t">
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
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
Menu.displayName = 'Menu';

export default Menu;
