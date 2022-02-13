import React, { ReactNode, Fragment, useContext } from 'react';

import { Transition } from '@headlessui/react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

import { Context } from '../pages/_app';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [state, dispatch, ref] = useContext(Context);

  return (
    <>
      <Header isMobile={state.isMobile}></Header>
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
        <Menu isMobile={state.isMobile}></Menu>
      </Transition>
    </>
  );
};

export default Layout;
