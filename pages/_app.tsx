import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useReducer, useEffect, useRef } from 'react';
import Onboard from 'bnc-onboard';
import { ethers } from 'ethers';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'react-image-lightbox/style.css';

import '../styles/globals.css';

// import wawiAbi from '../wawiAbi.json';

const title = 'Wasted Wild';
const description =
  'Capsule Vault proudly presents Wasted Wild, Chapter 2 of the Trilogy - a collection of imaginary beings thriving in the post-human age. Preceded by Absurd Arboretum, the project inherits and embodies the core ethos of becoming an integral part of our ecology.';

type State = {
  signerAddress: string;
  signerEns: string;
  price: string;
  maxSupply: string;
  maxTokensPerTx: string;
  lang: string;
  isMenuOpen: boolean;
  isMobile: boolean;
};

type Action = {
  type: string;
  payload?: any;
};

type Reducer = (state: State, action: Action) => State;

type RefValue = {
  onboard: any;
  provider: any;
  wawiContract: any;
};

type ContextValue = {
  state: State;
  dispatch: (action: Action) => void;
  ref: React.MutableRefObject<RefValue>;
};

const initialState: State = {
  signerAddress: '',
  signerEns: '',
  price: '0.07',
  maxSupply: '6666',
  maxTokensPerTx: '5',
  lang: 'en',
  isMenuOpen: false,
  isMobile: true,
};

export const Context = React.createContext({} as ContextValue);

const reducer: Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_SIGNER_ADDRESS': {
      const signerAddress = action.payload;
      return {
        ...state,
        signerAddress,
      };
    }
    case 'SET_SIGNER_ENS': {
      const signerEns = action.payload;
      return {
        ...state,
        signerEns,
      };
    }
    case 'SET_PRICE': {
      const price = action.payload;
      return {
        ...state,
        price,
      };
    }
    case 'SET_MAX_SUPPLY': {
      const maxSupply = action.payload;
      return {
        ...state,
        maxSupply,
      };
    }
    case 'SET_MAX_TOKENS_PER_TX': {
      const maxTokensPerTx = action.payload;
      return {
        ...state,
        maxTokensPerTx,
      };
    }
    case 'SET_LANG': {
      const lang = action.payload;
      return {
        ...state,
        lang,
      };
    }
    case 'OPEN_MENU': {
      return {
        ...state,
        isMenuOpen: true,
      };
    }
    case 'CLOSE_MENU': {
      return {
        ...state,
        isMenuOpen: false,
      };
    }
    case 'SET_IS_MOBILE': {
      const isMobile = action.payload;
      return {
        ...state,
        isMobile,
      };
    }
    default: {
      return state;
    }
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const ref = useRef({
    onboard: null,
    provider: null,
    wawiContract: null,
  } as RefValue);
  useEffect(() => {
    // ref.current.onboard = Onboard({
    //   dappId: process.env.NEXT_PUBLIC_BN_API_KEY,
    //   networkId: process.env.NEXT_PUBLIC_NETWORK === 'homestead' ? 1 : 4,
    //   darkMode: true,
    //   walletSelect: {
    //     wallets: [
    //       { walletName: 'metamask', preferred: true },
    //       {
    //         walletName: 'walletConnect',
    //         rpc: {
    //           [process.env.NEXT_PUBLIC_NETWORK === 'homestead' ? 1 : 4]:
    //             process.env.NEXT_PUBLIC_RPC_URL,
    //         },
    //       },
    //     ],
    //   },
    //   subscriptions: {
    //     wallet: (wallet) => {
    //       ref.current.provider = new ethers.providers.Web3Provider(
    //         wallet.provider,
    //       );
    //     },
    //     address: (address) => {
    //       if (address) {
    //         dispatch({
    //           type: 'SET_SIGNER_ADDRESS',
    //           payload: address,
    //         });
    //       }
    //     },
    //     ens: (ens) => {
    //       if (ens) {
    //         dispatch({
    //           type: 'SET_SIGNER_ENS',
    //           payload: ens.name,
    //         });
    //       }
    //     },
    //   },
    // });
  }, []);
  useEffect(() => {
    const init = async () => {
      // const price = await ref.current.wawiContract.PRICE_PER_TOKEN();
      // dispatch({
      //   type: 'SET_PRICE',
      //   payload: ethers.utils.formatEther(price),
      // });
      // const maxSupply = await ref.current.wawiContract._maxSupply();
      // dispatch({
      //   type: 'SET_MAX_SUPPLY',
      //   payload: maxSupply.toString(),
      // });
      // const maxTokensPerTx = await ref.current.wawiContract._maxPerTxn();
      // dispatch({
      //   type: 'SET_MAX_TOKENS_PER_TX',
      //   payload: maxTokensPerTx.toString(),
      // });
    };
    // if (!ref.current.provider) {
    //   ref.current.provider = new ethers.providers.AlchemyProvider(
    //     process.env.NEXT_PUBLIC_NETWORK,
    //     process.env.NEXT_PUBLIC_RPC_URL.split('/').pop(),
    //   );
    // }
    // ref.current.wawiContract = new ethers.Contract(
    //   process.env.NEXT_PUBLIC_WAWI_ADDRESS,
    //   wawiAbi,
    //   ref.current.provider,
    // );
    init();
  }, []);

  useEffect(() => {
    dispatch({
      type: 'SET_IS_MOBILE',
      payload: !!window.matchMedia('only screen and (max-width: 640px)')
        .matches,
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://app.wastedwild.life/images/preview.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://wastedwild.life" />
        <meta
          property="og:image"
          content="https://app.wastedwild.life/images/preview.png"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Context.Provider value={{ state, dispatch, ref }}>
        <Component {...pageProps} />
      </Context.Provider>
    </>
  );
}

export default MyApp;
