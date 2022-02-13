import React, { useCallback, useContext } from 'react';
import Image from 'next/image';

import logoImg from '../public/logo.png';
import iconMenuImg from '../public/icons/menu.png';

import { Context } from '../pages/_app';

type Props = {
  isMobile?: boolean;
};

const Header = React.forwardRef(({ isMobile = false }: Props, ref) => {
  const [state, dispatch] = useContext(Context);

  const handleOpenMenuBtnClick = useCallback(() => {
    dispatch({
      type: 'TOGGLE_MENU',
    });
  }, []);

  return (
    <header
      className="flex justify-between items-center h-[80px] sm:h-[112px] border-b border-primary"
      ref={ref}
    >
      <div className="w-[182px] ml-[17px] sm:ml-[64px]">
        <Image src={logoImg} layout="responsive"></Image>
      </div>
      <div className="self-stretch flex">
        {!isMobile && (
          <>
            <button className="flex justify-center items-center w-[208px] border-l">
              Connect Wallet
            </button>
            <button className="flex justify-center items-center w-[208px] border-l">
              Existing Holders
            </button>
            <button className="flex justify-center items-center w-[208px] border-l">
              English / 繁中
            </button>
          </>
        )}
        <div className="flex justify-center items-center w-[88px] sm:w-[208px] h-full border-l">
          <button className="w-[40px]" onClick={handleOpenMenuBtnClick}>
            <Image src={iconMenuImg} layout="responsive"></Image>
          </button>
        </div>
      </div>
    </header>
  );
});

export default Header;
