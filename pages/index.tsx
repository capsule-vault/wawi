import type { NextPage } from 'next';
import Image from 'next/image';
import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useContext,
  useMemo,
  Fragment,
  ReactNode,
} from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox from 'react-image-lightbox';

import Layout from '../components/Layout';

import { Context } from './_app';

import iconCloseImg from '../public/icons/close.png';
import iconSliderPrevImg from '../public/icons/slider_prev.png';
import iconSliderNextImg from '../public/icons/slider_next.png';
import iconBottomArrowImg from '../public/icons/bottom_arrow.png';
import iconBottomDiscordImg from '../public/icons/bottom_discord.png';

import preview01Img from '../public/images/preview_01.png';
import preview02Img from '../public/images/preview_02.png';
import preview03Img from '../public/images/preview_03.png';
import preview04Img from '../public/images/preview_04.png';
import preview05Img from '../public/images/preview_05.png';
import preview06Img from '../public/images/preview_06.png';
import preview07Img from '../public/images/preview_07.png';
import preview08Img from '../public/images/preview_08.png';
import preview09Img from '../public/images/preview_09.png';
import preview10Img from '../public/images/preview_10.png';
import preview11Img from '../public/images/preview_11.png';
import preview12Img from '../public/images/preview_12.png';

import goal01Img from '../public/images/goal_01.png';
import goal02Img from '../public/images/goal_02.png';
import goal03Img from '../public/images/goal_03.png';
import goal04Img from '../public/images/goal_04.png';

import storyImg from '../public/images/story.png';

import roadmap01Img from '../public/images/roadmap_01.png';
import roadmap02Img from '../public/images/roadmap_02.png';
import roadmap03Img from '../public/images/roadmap_03.png';
import roadmap04Img from '../public/images/roadmap_04.png';
import roadmap05Img from '../public/images/roadmap_05.png';
import roadmap06Img from '../public/images/roadmap_06.png';

import se01Img from '../public/images/se_01.png';
import se02Img from '../public/images/se_02.png';
import se03Img from '../public/images/se_03.png';
import se04Img from '../public/images/se_04.png';
import se05Img from '../public/images/se_05.png';
import se06Img from '../public/images/se_06.png';
import se07Img from '../public/images/se_07.png';
import se08Img from '../public/images/se_08.png';
import se09Img from '../public/images/se_09.png';
import se10Img from '../public/images/se_10.png';

import artist01Img from '../public/images/artist_01.png';
import artist02Img from '../public/images/artist_02.png';
import artist03Img from '../public/images/artist_03.png';
import artist04Img from '../public/images/artist_04.png';
import artist05Img from '../public/images/artist_05.png';
import artist06Img from '../public/images/artist_06.png';
import artist07Img from '../public/images/artist_07.png';
import artist08Img from '../public/images/artist_08.png';
import artist09Img from '../public/images/artist_09.png';
import artist10Img from '../public/images/artist_10.png';

import team01Img from '../public/images/team_01.png';
import team02Img from '../public/images/team_02.png';
import team03Img from '../public/images/team_03.png';
import team04Img from '../public/images/team_04.png';
import team05Img from '../public/images/team_05.png';
import team06Img from '../public/images/team_06.png';
import team07Img from '../public/images/team_07.png';
import team08Img from '../public/images/team_08.png';
import team09Img from '../public/images/team_09.png';
import team10Img from '../public/images/team_10.png';
import team11Img from '../public/images/team_11.png';
import team12Img from '../public/images/team_12.png';

const swiper1Images = [
  '/images/preview_01.png',
  '/images/preview_02.png',
  '/images/preview_03.png',
  '/images/preview_04.png',
  '/images/preview_05.png',
  '/images/preview_06.png',
  '/images/preview_07.png',
  '/images/preview_08.png',
  '/images/preview_09.png',
  '/images/preview_10.png',
  '/images/preview_11.png',
  '/images/preview_12.png',
];

type ArtistByName = {
  [key: string]: {
    name: string;
    description: ReactNode;
    ig: string;
    twitter: string;
    image: StaticImageData;
  };
};

const Home: NextPage = () => {
  const { state } = useContext(Context);

  const price = 0.05;
  const maxNumTokens = 3;
  const minNumTokens = 1;
  const [numTokens, setNumTokens] = useState(1);
  const handleNumTokensInputChange = useCallback((e) => {
    setNumTokens(
      Math.max(minNumTokens, Math.min(maxNumTokens, Number(e.target.value))),
    );
  }, []);
  const handleIncrementNumTokensBtnClick = useCallback(() => {
    setNumTokens((prev) => (prev + 1 > maxNumTokens ? prev : prev + 1));
  }, []);
  const handleDecrementNumTokensBtnClick = useCallback(() => {
    setNumTokens((prev) => (prev - 1 < minNumTokens ? prev : prev - 1));
  }, []);

  const prevPreviewRef = useRef(null);
  const nextPreviewRef = useRef(null);
  const [isLightbox1Open, setIsLightbox1Open] = useState(false);
  const [lightbox1Idx, setLightbox1Idx] = useState(0);

  const prevArtistRef = useRef(null);
  const nextArtistRef = useRef(null);

  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const openStoryModal = useCallback(() => {
    setIsStoryModalOpen(true);
  }, []);
  const closeStoryModal = useCallback(() => {
    setIsStoryModalOpen(false);
  }, []);

  const [isArtistModalOpen, setIsArtistModalOpen] = useState(false);
  const [currArtistName, setCurrArtistName] = useState('aka_chang');
  const openArtistModal = useCallback(() => {
    setIsArtistModalOpen(true);
  }, []);
  const closeArtistModal = useCallback(() => {
    setIsArtistModalOpen(false);
  }, []);
  const handleArtistModalOpenBtnClick = useCallback(
    (name) => () => {
      setCurrArtistName(name);
      openArtistModal();
    },
    [openArtistModal],
  );

  const artistByName: ArtistByName = useMemo(
    () => ({
      aka_chang: {
        name: 'aka_chang',
        description: (
          <Trans i18nKey="aka_chang.description" ns="artist"></Trans>
        ),
        ig: 'https://www.instagram.com/aka_chang/',
        twitter: 'https://twitter.com/changfunju',
        image: artist01Img,
      },
      CACHOU: {
        name: 'CACHOU',
        description: <Trans i18nKey="CACHOU.description" ns="artist"></Trans>,
        image: artist02Img,
        ig: 'https://www.instagram.com/c.a.chou/',
        twitter: 'https://twitter.com/cachou1993',
      },
      CL_SOUL_: {
        name: 'CL_SOUL_',
        description: <Trans i18nKey="CL_SOUL_.description" ns="artist"></Trans>,
        image: artist03Img,
        ig: 'https://www.instagram.com/cl_soul_/',
        twitter: 'https://twitter.com/CL_SOUL_',
      },
      equinoz: {
        name: 'equinoz',
        description: <Trans i18nKey="equinoz.description" ns="artist"></Trans>,
        image: artist04Img,
        ig: 'https://www.instagram.com/equ1noz/',
        twitter: 'https://twitter.com/equ1noz',
      },
      'Jona Hsu': {
        name: 'Jona Hsu',
        description: <Trans i18nKey="Jona Hsu.description" ns="artist"></Trans>,
        image: artist05Img,
        ig: 'https://www.instagram.com/jona.hsu/',
        twitter: 'https://twitter.com/Jona_HsuVisual',
      },
      KhooKG: {
        name: 'KhooKG',
        description: <Trans i18nKey="KhooKG.description" ns="artist"></Trans>,
        image: artist06Img,
        ig: 'https://www.instagram.com/khookhaikun/',
        twitter: 'https://twitter.com/khookhaikun',
      },
      'Toma Tang': {
        name: 'Toma Tang',
        description: (
          <Trans i18nKey="Toma Tang.description" ns="artist"></Trans>
        ),
        image: artist07Img,
        ig: 'https://www.instagram.com/tomatotoyota01/',
        twitter: '',
      },
      'Ray Han': {
        name: 'Ray Han',
        description: <Trans i18nKey="Ray Han.description" ns="artist"></Trans>,
        image: artist08Img,
        ig: 'https://www.instagram.com/fromraytothebay/',
        twitter: '',
      },
      'Sic Lee': {
        name: 'Sic Lee',
        description: (
          <Trans
            i18nKey="Sic Lee.description"
            ns="artist"
            components={{
              aMoon: (
                <a
                  href="https://www.instagram.com/mfdt606/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              ),
            }}
          ></Trans>
        ),
        image: artist09Img,
        ig: 'https://www.instagram.com/sic_lee/',
        twitter: 'https://twitter.com/Sic_Lee',
      },
      ZHIXIAN: {
        name: 'ZHIXIAN',
        description: <Trans i18nKey="ZHIXIAN.description" ns="artist"></Trans>,
        image: artist10Img,
        ig: 'https://www.instagram.com/goodboixian/',
        twitter: 'https://twitter.com/goodboixian',
      },
    }),
    [],
  );

  const [isToTopBtnVisible, setIsToTopBtnVisible] = useState(false);
  const handleScroll = useCallback(() => {
    setIsToTopBtnVisible(document.documentElement.scrollTop > 0);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  const handleToTopBtnClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Layout>
      <section
        className="container mx-auto sm:flex px-[24px] sm:px-0 pt-[24px] sm:pt-[128px] pb-[50px] sm:pb-[200px]"
        id="mint"
      >
        <div className="sm:shrink-0 sm:w-[520px] sm:h-[520px] bg-primary]">
          <video src="/intro.mp4" muted autoPlay loop playsInline></video>
        </div>
        <div className="sm:flex-1 sm:ml-[80px]">
          <h2 className="h3 sm:h2 font-bold uppercase sm:whitespace-nowrap mt-[32px] sm:mt-[unset]">
            Mint For Our Ecology
          </h2>
          <div className="flex items-center mt-[16px]">
            {!state.isMobile && <div className="w-[184px] border-b"></div>}
            <div className="tab sm:ml-[16px]">
              Wasted Wild NFTs By Capsule Vault
            </div>
          </div>
          <p className="mt-[32px]">
            <Trans i18nKey="description" ns="intro"></Trans>
          </p>
          <div className="border sm:border-0 mt-[32px] p-[24px] pb-[32px] sm:p-0">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:py-[24px] sm:border">
              <div className="flex justify-between items-center w-full sm:w-[unset]">
                <button
                  className="relative w-[48px] h-[48px]"
                  onClick={handleDecrementNumTokensBtnClick}
                  disabled={numTokens === minNumTokens}
                >
                  <div className="absolute left-1/2 top-1/2 w-1/2 border-t transform -translate-x-1/2"></div>
                </button>
                <input
                  className="flex justify-center items-center w-[120px] bg-bg border-0 text-center"
                  value={numTokens}
                  onChange={handleNumTokensInputChange}
                ></input>
                <button
                  className="relative w-[48px] h-[48px]"
                  onClick={handleIncrementNumTokensBtnClick}
                  disabled={numTokens === maxNumTokens}
                >
                  <div className="absolute left-1/2 top-1/2 w-1/2 border-t transform -translate-x-1/2"></div>
                  <div className="absolute left-1/2 top-1/2 w-1/2 border-t transform -translate-x-1/2 rotate-90"></div>
                </button>
              </div>
              <button
                className="w-full sm:w-[148px] sm:h-[48px] sm:ml-[24px] mt-[24px] sm:mt-0 bg-primary rounded-full"
                disabled
              >
                <div className="tab text-bg uppercase">Mint</div>
                <div className="caption2 text-bg uppercase mt-[-6px]">
                  Total {(numTokens * price).toFixed(2)} ETH
                </div>
              </button>
            </div>
            <p className="mt-[24px]">
              <Trans
                i18nKey="mint"
                ns="intro"
                values={{ price, maxNumTokens }}
              ></Trans>
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-[24px] sm:px-0 pt-[50px] sm:pt-[120px]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h2 className="h3 sm:h1 font-bold uppercase">Wasted Wild NFT</h2>
          <a
            className="button flex justify-center items-center w-full sm:w-[268px] h-[48px] mt-[24px] sm:mt-0 border rounded-full no-underline"
            href="https://opensea.io/collection/wastedwild"
            target="_blank"
            rel="noreferrer"
          >
            Opensea
          </a>
        </div>
        <div className="sm:flex sm:justify-center sm:items-center sm:space-x-[20px] mt-[40px]">
          <button
            ref={prevPreviewRef}
            className="hidden sm:block sm:shrink-0 sm:w-[72px]"
          >
            <Image src={iconSliderPrevImg} layout="responsive" priority></Image>
          </button>
          <div className="sm:w-[1100px] mb-[-84px]">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                prevEl: prevPreviewRef.current,
                nextEl: nextPreviewRef.current,
              }}
              autoplay
              pagination={{
                clickable: true,
              }}
              slidesPerView={1}
              spaceBetween={8}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              loop
            >
              {[
                preview01Img,
                preview02Img,
                preview03Img,
                preview04Img,
                preview05Img,
                preview06Img,
                preview07Img,
                preview08Img,
                preview09Img,
                preview10Img,
                preview11Img,
                preview12Img,
              ].map((img, idx) => (
                <SwiperSlide
                  className="w-[300px] pb-[84px]"
                  key={img.src}
                  onClick={() => {
                    setIsLightbox1Open(true);
                    setLightbox1Idx(idx);
                  }}
                >
                  <button className="w-full">
                    <Image
                      src={img}
                      layout="responsive"
                      placeholder="blur"
                    ></Image>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            ref={nextPreviewRef}
            className="hidden sm:block sm:shrink-0 sm:w-[72px]"
          >
            <Image src={iconSliderNextImg} layout="responsive" priority></Image>
          </button>
        </div>
        {isLightbox1Open && (
          <Lightbox
            mainSrc={swiper1Images[lightbox1Idx]}
            nextSrc={swiper1Images[(lightbox1Idx + 1) % swiper1Images.length]}
            prevSrc={
              swiper1Images[
                (lightbox1Idx + swiper1Images.length - 1) % swiper1Images.length
              ]
            }
            onCloseRequest={() => {
              setIsLightbox1Open(false);
            }}
            onMoveNextRequest={() => {
              setLightbox1Idx((lightbox1Idx + 1) % swiper1Images.length);
            }}
            onMovePrevRequest={() => {
              setLightbox1Idx(
                (lightbox1Idx + swiper1Images.length - 1) %
                  swiper1Images.length,
              );
            }}
            enableZoom={false}
            imagePadding={50}
          />
        )}
      </section>

      <section
        className="container mx-auto px-[24px] sm:px-0 py-[50px] sm:py-[120px] mt-[134px] sm:mt-[204px]"
        id="goal"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h2 className="h3 sm:h1 font-bold uppercase">Core Values</h2>
          <div className="flex flex-col sm:flex-row sm:space-x-[32px]">
            <button
              className="flex justify-center items-center w-full sm:w-[268px] h-[48px] mt-[24px] sm:mt-0 border rounded-full"
              onClick={openStoryModal}
            >
              Story
            </button>
            <Transition.Root show={isStoryModalOpen} as={Fragment}>
              <Dialog
                className="fixed inset-0 z-40"
                open={isStoryModalOpen}
                onClose={closeStoryModal}
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
                  <section
                    className="relative max-h-screen sm:max-h-[80vh] sm:container sm:mx-auto sm:top-1/2 sm:transform sm:-translate-y-1/2 px-[24px] sm:px-0 pt-[30px] pb-[50px] sm:py-0 overflow-y-auto"
                    id="story"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="h3 sm:h1 uppercase font-bold">Story</h3>
                      <button className="w-[32px]" onClick={closeStoryModal}>
                        <Image
                          src={iconCloseImg}
                          layout="responsive"
                          priority
                        ></Image>
                      </button>
                    </div>
                    <div className="flex flex-col sm:flex-row-reverse mt-[20px]">
                      <div className="sm:shrink-0 w-full sm:w-[527px]">
                        <Image
                          src={storyImg}
                          layout="responsive"
                          placeholder="blur"
                        ></Image>
                      </div>
                      <div className="mt-[32px] sm:mt-0 sm:mr-[48px]">
                        <p>
                          <Trans
                            i18nKey="description"
                            ns="story"
                            components={{
                              aAbar: (
                                <a
                                  href="https://ab-ar.art/"
                                  target="_blank"
                                  rel="noreferrer"
                                ></a>
                              ),
                            }}
                          ></Trans>
                        </p>
                      </div>
                    </div>
                  </section>
                </Transition.Child>
              </Dialog>
            </Transition.Root>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-x-[32px] sm:gap-y-[48px] mt-[40px] space-y-[40px] sm:space-y-0">
          <div>
            <Image src={goal01Img}></Image>
            <h3 className="h4 mt-[32px] uppercase">
              <Trans i18nKey="01.title" ns="goal"></Trans>
            </h3>
            <p className="mt-[24px]">
              <Trans
                i18nKey="01.description"
                ns="goal"
                components={{
                  aAbar: (
                    <a
                      href="https://ab-ar.art/"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  ),
                }}
              ></Trans>
            </p>
          </div>
          <div>
            <Image src={goal02Img}></Image>
            <h3 className="h4 mt-[32px] uppercase">
              <Trans i18nKey="02.title" ns="goal"></Trans>
            </h3>
            <p className="mt-[24px]">
              <Trans
                i18nKey="02.description"
                ns="goal"
                components={{
                  aIo: (
                    <a
                      href="https://infiniteobjects.com/"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  ),
                }}
              ></Trans>
            </p>
          </div>
          <div>
            <Image src={goal03Img}></Image>
            <h3 className="h4 mt-[32px] uppercase">
              <Trans i18nKey="03.title" ns="goal"></Trans>
            </h3>
            <p className="mt-[24px]">
              <Trans
                i18nKey="03.description"
                ns="goal"
                components={{
                  aVen: (
                    <a
                      href="https://ab-ar.art/exclusive/"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  ),
                  aFire: (
                    <a
                      href="https://opensea.io/collection/arbofireworks"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  ),
                }}
              ></Trans>
            </p>
          </div>
          <div>
            <Image src={goal04Img}></Image>
            <h3 className="h4 mt-[32px] uppercase">
              <Trans i18nKey="04.title" ns="goal"></Trans>
            </h3>
            <p className="mt-[24px]">
              <Trans
                i18nKey="04.description"
                ns="goal"
                components={{
                  aRe: (
                    <a
                      href="https://www.rewild.org/"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  ),
                  aWild: (
                    <a
                      href="https://wild.org/"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  ),
                }}
              ></Trans>
            </p>
          </div>
        </div>
      </section>

      <section
        className="container mx-auto px-[24px] sm:px-0 pt-[50px] sm:pt-[120px]"
        id="artist"
      >
        <h2 className="h3 sm:h1 font-bold uppercase">Collaborations</h2>
        <div className="tab sm:h4 mt-[40px]">
          <Trans i18nKey="subtitle" ns="artist"></Trans>
        </div>
        <div className="sm:flex sm:justify-center sm:items-center sm:space-x-[20px] mt-[40px]">
          <button
            ref={prevArtistRef}
            className="hidden sm:block sm:shrink-0 sm:w-[72px]"
          >
            <Image src={iconSliderPrevImg} layout="responsive" priority></Image>
          </button>
          <div className="sm:w-[1100px] mb-[-132px]">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                prevEl: prevArtistRef.current,
                nextEl: nextArtistRef.current,
              }}
              autoplay
              pagination={{
                clickable: true,
              }}
              slidesPerView={1}
              spaceBetween={8}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              loop
            >
              {[
                { img: se01Img, name: 'aka_chang' },
                { img: se02Img, name: 'CACHOU' },
                { img: se03Img, name: 'CL_SOUL_' },
                { img: se04Img, name: 'equinoz' },
                { img: se05Img, name: 'Jona Hsu' },
                { img: se06Img, name: 'KhooKG' },
                { img: se07Img, name: 'Toma Tang' },
                { img: se08Img, name: 'Ray Han' },
                { img: se09Img, name: 'Sic Lee' },
                { img: se10Img, name: 'ZHIXIAN' },
              ].map(({ img, name }) => (
                <SwiperSlide
                  className="relative w-[300px] pb-[132px]"
                  key={name}
                >
                  <button
                    className="w-full"
                    onClick={handleArtistModalOpenBtnClick(name)}
                  >
                    <Image
                      src={img}
                      layout="responsive"
                      placeholder="blur"
                    ></Image>
                  </button>
                  <div className="tab absolute bottom-[84px] w-full text-center">
                    {name}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            ref={nextArtistRef}
            className="hidden sm:block sm:shrink-0 sm:w-[72px]"
          >
            <Image src={iconSliderNextImg} layout="responsive" priority></Image>
          </button>
        </div>

        <Transition.Root show={isArtistModalOpen} as={Fragment}>
          <Dialog
            className="fixed inset-0 z-40"
            open={isArtistModalOpen}
            onClose={closeArtistModal}
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
              <section className="relative max-h-screen sm:max-h-[80vh] sm:container sm:mx-auto sm:top-1/2 sm:transform sm:-translate-y-1/2 px-[24px] sm:px-0 pt-[30px] pb-[50px] sm:py-0 overflow-y-auto">
                <div className="flex justify-between items-center">
                  <Dialog.Title className="h3 sm:h1 font-bold">
                    Artist - {artistByName[currArtistName].name}
                  </Dialog.Title>
                  <button className="w-[32px]" onClick={closeArtistModal}>
                    <Image
                      src={iconCloseImg}
                      layout="responsive"
                      priority
                    ></Image>
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row-reverse mt-[20px]">
                  <div className="sm:shrink-0 w-full sm:w-[527px]">
                    <Image
                      src={artistByName[currArtistName].image}
                      layout="responsive"
                      placeholder="blur"
                    ></Image>
                  </div>
                  <div className="sm:flex-1 mt-[32px] sm:mt-0 sm:mr-[48px]">
                    <p>{artistByName[currArtistName].description}</p>
                    <div className="sm:flex w-full space-y-[24px] sm:space-x-[32px] sm:space-y-0 mt-[40px]">
                      <a
                        className="button sm:flex-1 flex justify-center items-center w-full h-[48px] border rounded-full no-underline"
                        href={artistByName[currArtistName].ig}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                      <a
                        className="button sm:flex-1 flex justify-center items-center w-full h-[48px] border rounded-full no-underline"
                        href={artistByName[currArtistName].twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </section>

      <section
        className="container mx-auto px-[24px] sm:px-0 py-[50px] sm:py-[120px] mt-[182px] sm:mt-[252px]"
        id="roadmap"
      >
        <h2 className="h3 sm:h1 font-bold uppercase">Roadmap</h2>
        <div className="tab sm:h4 mt-[40px]">
          <Trans i18nKey="subtitle" ns="roadmap"></Trans>
        </div>
        <div className="mt-[32px] space-y-[32px] sm:space-y-[48px]">
          {[
            {
              title: <Trans i18nKey="01.title" ns="roadmap"></Trans>,
              description: (
                <Trans i18nKey="01.description" ns="roadmap"></Trans>
              ),
              image: roadmap01Img,
            },
            {
              title: <Trans i18nKey="02.title" ns="roadmap"></Trans>,
              description: (
                <Trans i18nKey="02.description" ns="roadmap"></Trans>
              ),
              image: roadmap02Img,
            },
            {
              title: <Trans i18nKey="03.title" ns="roadmap"></Trans>,
              description: (
                <Trans i18nKey="03.description" ns="roadmap"></Trans>
              ),
              image: roadmap03Img,
            },
            {
              title: <Trans i18nKey="04.title" ns="roadmap"></Trans>,
              description: (
                <Trans i18nKey="04.description" ns="roadmap"></Trans>
              ),
              image: roadmap04Img,
            },
            {
              title: <Trans i18nKey="05.title" ns="roadmap"></Trans>,
              description: (
                <Trans
                  i18nKey="05.description"
                  ns="roadmap"
                  components={{
                    aDl: (
                      <a
                        href="https://decentraland.org/"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    ),
                    aSand: (
                      <a
                        href="https://www.sandbox.game/en/"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    ),
                  }}
                ></Trans>
              ),
              image: roadmap05Img,
            },
            {
              title: <Trans i18nKey="06.title" ns="roadmap"></Trans>,
              description: (
                <Trans
                  i18nKey="06.description"
                  ns="roadmap"
                  components={{
                    aBon: (
                      <a
                        href="https://festival.ab-ar.art/"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    ),
                  }}
                ></Trans>
              ),
              image: roadmap06Img,
            },
          ].map(({ title, description, image }) => (
            <div
              className="flex flex-col sm:flex-row space-y-[32px] sm:space-y-0 sm:space-x-[32px]"
              key={image.src}
            >
              <div className="sm:shrink-0 w-full sm:w-[168px]">
                <Image
                  src={image}
                  layout="responsive"
                  placeholder="blur"
                ></Image>
              </div>
              <div className="space-y-[24px]">
                <h4 className="h4 sm:h3 text-[22px]">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="container mx-auto px-[24px] sm:px-0 py-[50px] sm:py-[120px]"
        id="team"
      >
        <h2 className="h3 sm:h1 font-bold uppercase">Team</h2>
        <div className="grid grid-cols-2 gap-x-[16px] sm:gap-x-[32px] gap-y-[32px] sm:gap-y-[40px] mt-[40px]">
          {[
            {
              img: team01Img,
              name: 'Chuforreal',
              bio: 'Storyteller',
              href: 'https://twitter.com/chuforreal',
            },
            {
              img: team02Img,
              name: 'apeinacoupe',
              bio: 'Design and technical captain',
              href: 'https://twitter.com/apeinacoupe',
            },
            {
              img: team03Img,
              name: 'jannie.oioi',
              bio: 'Art direction and coordination',
              href: 'https://twitter.com/jannie_oioi',
            },
            {
              img: team04Img,
              name: 'yellow_river',
              bio: 'Solidity Developer',
              href: '',
            },
            {
              img: team05Img,
              name: 'AshΞAnn',
              bio: 'CGI Hobbyist',
              href: 'https://twitter.com/_asheannart',
            },
            {
              img: team06Img,
              name: 'jyjinn',
              bio: 'Pipeline TD',
              href: 'https://twitter.com/jiayujinn',
            },
            {
              img: team07Img,
              name: 'PxtrickPin',
              bio: 'CG Artist',
              href: 'https://twitter.com/pxtrickpin',
            },
            {
              img: team08Img,
              name: 'harry830622',
              bio: 'Solidity / Web Developer',
              href: 'https://y.at/unicorn.laptop.rocket',
            },
            {
              img: team09Img,
              name: 'Vera',
              bio: 'Community Manager',
              href: 'https://twitter.com/VeraYunLee',
            },
            {
              img: team10Img,
              name: 'wenpanghsiang',
              bio: 'Brand Designer',
              href: 'https://twitter.com/wenpanghsiang',
            },
            {
              img: team11Img,
              name: 'zivshock',
              bio: 'Marketing Lead',
              href: 'https://twitter.com/zivshock',
            },
            {
              img: team12Img,
              name: 'Bitman',
              bio: 'Community Manager',
              href: 'https://twitter.com/Bitmen_',
            },
          ].map(({ img, name, bio, href }) => (
            <div key={name} className="sm:grid sm:grid-cols-3 sm:gap-[32px]">
              <a
                className="button cursor-pointer no-underline w-full sm:col-span-1"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <Image src={img} layout="responsive" placeholder="blur"></Image>
              </a>
              <div className="sm:col-span-2">
                <h4
                  className={`${
                    state.isMobile ? 'text-[16px]' : ''
                  } mt-[16px] sm:mt-0 text-center sm:text-left`}
                >
                  {name}
                </h4>
                <p
                  className={`${
                    state.isMobile ? 'caption1' : ''
                  } mt-[8px] sm:mt-[16px] text-center sm:text-left`}
                >
                  {bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full border-b"></div>
      {isToTopBtnVisible && (
        <div className="hidden sm:flex sm:flex-col sm:fixed sm:right-[40px] sm:bottom-[40px] sm:space-y-[32px] sm:z-30">
          <a
            className="button w-[40px]"
            href="https://discord.gg/capsulevault"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={iconBottomDiscordImg}
              layout="responsive"
              priority
            ></Image>
          </a>
          <button className="w-[40px]" onClick={handleToTopBtnClick}>
            <Image
              src={iconBottomArrowImg}
              layout="responsive"
              priority
            ></Image>
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'intro',
        'goal',
        'artist',
        'story',
        'roadmap',
      ])),
    },
  };
}
