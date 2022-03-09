import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useReducer, useEffect, useRef } from 'react';
import { appWithTranslation } from 'next-i18next';
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

import wawi2Abi from '../wawi2Abi.json';

const title = 'Wasted Wild NFT By Capsule Vault';
const description = `Mint a Wasted Wild NFT and plant a tree in the physical world. Restore the wild by protecting endangered species and habitats. So far We have planted 16,000 trees with the Capsule Vault community. 鑄造 Wasted Wild 荒野 NFT 的同時也在世界上種下一棵樹木；透過保護瀕危動物和其棲地讓自然得以重生；目前 Capsule Vault 社群已經透過 NFT 在全世界種下超過 16,000 棵樹。`;

type State = {
  signerAddress: string;
  signerEns: string;
  price: string;
  arboHolderPrice: string;
  maxSupply: string;
  maxTokensPerTx: string;
  lang: string;
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
  wawi2Contract: any;
};

type ContextValue = {
  state: State;
  dispatch: (action: Action) => void;
  ref: React.MutableRefObject<RefValue>;
};

const initialState: State = {
  signerAddress: '',
  signerEns: '',
  price: '0.05',
  arboHolderPrice: '0.02',
  maxSupply: '4200',
  maxTokensPerTx: '3',
  lang: 'en',
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
    case 'SET_ARBO_HOLDER_PRICE': {
      const arboHolderPrice = action.payload;
      return {
        ...state,
        arboHolderPrice,
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
    wawi2Contract: null,
  } as RefValue);
  useEffect(() => {
    ref.current.onboard = Onboard({
      dappId: process.env.NEXT_PUBLIC_BN_API_KEY,
      networkId: process.env.NEXT_PUBLIC_NETWORK === 'homestead' ? 1 : 4,
      darkMode: true,
      walletSelect: {
        wallets: [
          { walletName: 'metamask', preferred: true },
          {
            walletName: 'walletConnect',
            rpc: {
              [process.env.NEXT_PUBLIC_NETWORK === 'homestead' ? 1 : 4]:
                process.env.NEXT_PUBLIC_RPC_URL,
            },
          },
        ],
      },
      subscriptions: {
        wallet: (w) => {
          ref.current.provider = new ethers.providers.Web3Provider(w.provider);
          ref.current.wawi2Contract = new ethers.Contract(
            process.env.NEXT_PUBLIC_WAWI2_ADDRESS,
            wawi2Abi,
            ref.current.provider,
          );
        },
        address: (addr) => {
          if (addr) {
            dispatch({
              type: 'SET_SIGNER_ADDRESS',
              payload: addr,
            });
          }
        },
      },
    });
  }, []);
  useEffect(() => {
    const init = async () => {
      const price = await ref.current.wawi2Contract.PRICE_PER_TOKEN();
      dispatch({
        type: 'SET_PRICE',
        payload: ethers.utils.formatEther(price),
      });
      const arboHolderPrice =
        await ref.current.wawi2Contract.ARBO_HODLER_PRICE();
      dispatch({
        type: 'SET_ARBO_HOLDER_PRICE',
        payload: ethers.utils.formatEther(arboHolderPrice),
      });
      const maxSupply = await ref.current.wawi2Contract._maxSupply();
      dispatch({
        type: 'SET_MAX_SUPPLY',
        payload: maxSupply.toString(),
      });
      const maxTokensPerTx = await ref.current.wawi2Contract._maxPerTxn();
      dispatch({
        type: 'SET_MAX_TOKENS_PER_TX',
        payload: maxTokensPerTx.toString(),
      });
    };
    ref.current.provider = new ethers.providers.AlchemyProvider(
      process.env.NEXT_PUBLIC_NETWORK,
      process.env.NEXT_PUBLIC_RPC_URL.split('/').pop(),
    );
    ref.current.wawi2Contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_WAWI2_ADDRESS,
      wawi2Abi,
      ref.current.provider,
    );
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
        <title>Wasted Wild</title>
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

export default appWithTranslation(MyApp);
