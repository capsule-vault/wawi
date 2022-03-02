import React, { ReactNode } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header></Header>
    <div className="w-full h-[80px] sm:h-[112px]"></div>
    {children}
    <Footer></Footer>
  </>
);

export default Layout;
