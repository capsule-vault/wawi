import React, { ReactNode, Fragment, useContext, useCallback } from 'react';

import { Transition } from '@headlessui/react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

import { Context } from '../pages/_app';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { state, dispatch } = useContext(Context);

  const openMenu = useCallback(() => {
    dispatch({
      type: 'OPEN_MENU',
    });
  }, []);
  const closeMenu = useCallback(() => {
    dispatch({
      type: 'CLOSE_MENU',
    });
  }, []);

  return (
    <>
      <Header isMobile={state.isMobile} onOpenMenuBtnClick={openMenu}></Header>
      {children}
      <Footer></Footer>
      <Transition
        as={Fragment}
        show={state.isMenuOpen}
        enter="transform transition-all duration-500"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transform transition-all duration-500"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
      >
        <Menu isMobile={state.isMobile} onCloseBtnClick={closeMenu}></Menu>
      </Transition>
      {!state.isMobile && (
        <div
          className={`${
            state.isMenuOpen ? 'fixed' : 'hidden'
          } inset-0 z-40 bg-bg opacity-50`}
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default Layout;
