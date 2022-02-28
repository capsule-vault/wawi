import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useCallback, useContext, Fragment } from 'react';
import { Transition, Dialog, Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

import Menu from '../components/Menu';

import { Context } from '../pages/_app';

import logoImg from '../public/logo.png';
import iconMenuImg from '../public/icons/menu.png';
import iconCloseImg from '../public/icons/close.png';

const Header = () => {
  const { state } = useContext(Context);

  const router = useRouter();

  const price = 0.02;
  const maxNumMints = 3;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const [isHolderModalOpen, setIsHolderModalOpen] = useState(false);
  const openHolderModal = useCallback(() => {
    setIsHolderModalOpen(true);
  }, []);
  const closeHolderModal = useCallback(() => {
    setIsHolderModalOpen(false);
  }, []);

  const handleMenuOpenHolderBtnClick = useCallback(() => {
    closeMenu();
    openHolderModal();
  }, [openHolderModal, closeMenu]);

  const [currNumMints, setCurrNumMints] = useState(maxNumMints);
  const handleMintListboxChange = useCallback((n) => {
    console.log(n);
    setCurrNumMints(n);
  }, []);

  return (
    <header className="flex justify-between items-center h-[80px] sm:h-[112px] border-b border-primary">
      <div className="w-[182px] ml-[17px] sm:ml-[64px]">
        <Image src={logoImg} layout="responsive" priority></Image>
      </div>
      <div className="self-stretch flex">
        {!state.isMobile && (
          <>
            <button className="flex justify-center items-center w-[208px] border-l">
              Connect Wallet
            </button>
            <button
              className="flex justify-center items-center w-[208px] border-l"
              onClick={openHolderModal}
            >
              Existing Holders
            </button>
            <Link href="/" locale={router.locale === 'en' ? 'tw' : 'en'}>
              <button className="flex justify-center items-center w-[208px] border-l">
                English / 繁中
              </button>
            </Link>
          </>
        )}
        <div className="flex justify-center items-center w-[88px] sm:w-[208px] h-full border-l">
          <button className="w-[40px]" onClick={openMenu}>
            <Image src={iconMenuImg} layout="responsive" priority></Image>
          </button>
        </div>
      </div>

      <Menu
        isOpen={isMenuOpen}
        onCloseBtnClick={closeMenu}
        onOpenHolderBtnClick={handleMenuOpenHolderBtnClick}
      ></Menu>

      <Transition.Root show={isHolderModalOpen} as={Fragment}>
        <Dialog
          className="fixed inset-0 z-40"
          open={isHolderModalOpen}
          onClose={closeHolderModal}
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
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <section className="relative max-h-screen sm:max-h-[80vh] sm:container sm:mx-auto sm:top-1/2 sm:transform sm:-translate-y-1/2 px-[24px] sm:px-0 pt-[30px] pb-[50px] overflow-y-auto">
              <div className="flex justify-between items-center">
                <h2 className="h3 sm:h1 font-bold">Existing Holders</h2>
                <button className="w-[32px]" onClick={closeHolderModal}>
                  <Image
                    src={iconCloseImg}
                    layout="responsive"
                    priority
                  ></Image>
                </button>
              </div>
              <div className="flex flex-col mt-[40px] px-[24px] pt-[40px] pb-[28px] space-y-[48px] border">
                <div className="space-y-[32px]">
                  <h3 className="h4">Absurd Arboretum Holders Minting</h3>
                  <Listbox
                    value={currNumMints}
                    onChange={handleMintListboxChange}
                  >
                    <div className="relative">
                      <Listbox.Button className="relative w-full sm:w-[426px] h-[48px] border rounded-full">
                        <div>{currNumMints}</div>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-[24px] pointer-events-none">
                          <ChevronDownIcon
                            className="w-[20px] h-[20px] text-primary"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute w-full sm:w-[426px] mt-[12px] border rounded-3xl overflow-hidden">
                        {new Array(maxNumMints)
                          .fill(null)
                          .map((_, idx) => maxNumMints - idx)
                          .map((n) => (
                            <Listbox.Option
                              className="flex justify-center items-center w-full h-[48px] bg-bg cursor-pointer"
                              key={n}
                              value={n}
                            >
                              {n}
                            </Listbox.Option>
                          ))}
                      </Listbox.Options>
                    </div>
                  </Listbox>
                  <button className="w-full sm:w-[426px] h-[48px] bg-primary rounded-full">
                    <div className="tab text-bg uppercase">Mint</div>
                    <div className="caption2 text-bg uppercase mt-[-6px]">
                      Total {(currNumMints * price).toFixed(2)} ETH
                    </div>
                  </button>
                  <p>
                    Please first connect your wallet, each eligible Absurd
                    Arboretum holder may mint up to {maxNumMints} Wasted Wild
                    NFT(s) at a discounted price of {price} ETH each.
                  </p>
                </div>
                <div className="space-y-[32px]">
                  <h3 className="h4">Wasted Wild Holders Claiming</h3>
                  <button className="w-full sm:w-[426px] h-[48px] bg-primary rounded-full">
                    <div className="tab text-bg uppercase">Claim</div>
                  </button>
                  <p>
                    Please first connect your wallet, each eligible Wasted Wild
                    holder may claim the amount that matches their holding at
                    the time of snapshot for FREE.
                  </p>
                </div>
                <div className="tab">
                  Notice : Snapshot was taken on 2022/02/08 11:59
                </div>
              </div>
            </section>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default Header;
