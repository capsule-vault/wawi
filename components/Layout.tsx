import React, { ReactNode, useContext, useCallback } from 'react';

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
      <Menu
        isOpen={state.isMenuOpen}
        isMobile={state.isMobile}
        onCloseBtnClick={closeMenu}
      ></Menu>
    </>
  );
};

export default Layout;
