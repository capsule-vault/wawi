import React, { useContext, ReactNode } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Context } from '../pages/_app';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { state } = useContext(Context);

  return (
    <>
      <Header isMobile={state.isMobile}></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
