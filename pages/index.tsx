import type { NextPage } from 'next';
import Image from 'next/image';
import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useContext,
} from 'react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox from 'react-image-lightbox';

import Layout from '../components/Layout';

import { Context } from './_app';

import preview01Img from '../public/images/preview_01.png';
import preview02Img from '../public/images/preview_02.png';
import preview03Img from '../public/images/preview_03.png';
import preview04Img from '../public/images/preview_04.png';
import preview05Img from '../public/images/preview_05.png';
import preview06Img from '../public/images/preview_06.png';
import preview07Img from '../public/images/preview_07.png';
import preview08Img from '../public/images/preview_08.png';
import preview09Img from '../public/images/preview_09.png';

import goal01Img from '../public/images/goal_01.png';
import goal02Img from '../public/images/goal_02.png';
import goal03Img from '../public/images/goal_03.png';
import goal04Img from '../public/images/goal_04.png';

const swiper1Images = [
  '/images/preview_01.png',
  '/images/preview_02.png',
  '/images/preview_03.png',
  '/images/preview_04.png',
  '/images/preview_05.png',
  '/images/preview_06.png',
];
const swiper2Images = [];

const Home: NextPage = () => {
  const { state } = useContext(Context);

  const price = 0.05;
  const maxNumTokens = 3;
  const minNumTokens = 1;
  const [numTokens, setNumTokens] = useState(1);
  const handleNumTokensInputChange = useCallback((e) => {
    setNumTokens(e.target.value);
  }, []);
  const handleIncrementNumTokensBtnClick = useCallback(() => {
    setNumTokens((prev) => (prev + 1 > maxNumTokens ? prev : prev + 1));
  }, []);
  const handleDecrementNumTokensBtnClick = useCallback(() => {
    setNumTokens((prev) => (prev - 1 < minNumTokens ? prev : prev - 1));
  }, []);

  const swiper1Ref = useRef<HTMLDivElement>(null);
  const swiper2Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    [swiper1Ref].forEach((swiperRef) => {
      swiperRef.current!.querySelector<HTMLDivElement>(
        '.swiper-button-prev',
      )!.style!.opacity = '0';
      swiperRef.current!.querySelector<HTMLDivElement>(
        '.swiper-button-next',
      )!.style!.opacity = '0';
    });
  }, []);
  const [isLightbox1Open, setIsLightbox1Open] = useState(false);
  const [isLightbox2Open, setIsLightbox2Open] = useState(false);
  const [lightbox1Idx, setLightbox1Idx] = useState(0);
  const [lightbox2Idx, setLightbox2Idx] = useState(0);

  return (
    <Layout>
      <section className="container mx-auto sm:flex sm:mt-[128px] px-[24px]">
        <div className="sm:flex-1 mt-[24px] sm:mt-[unset] sm:px-[48px] bg-primary]">
          <video src="/intro.mp4" muted autoPlay loop></video>
        </div>
        <div className="sm:flex-1">
          <h2 className="mt-[32px] sm:mt-[unset] font-bold text-[36px] leading-[36px] tracking-[1px] uppercase">
            Mint For Our Ecology
          </h2>
          <div className="tab mt-[16px]">Wasted Wild NFTs By Capsule Vault</div>
          <p className="mt-[32px]">
            Mint a Wasted Wild NFT and plant a tree in the physical world.
            Restore the wild by protecting endangered species and habitats. So
            far We have planted 16000 trees with the Capsule Vault community.
            Capsule Vault team proudly presents Wasted Wild, a collection of
            4200 imaginary beings, while every single Wildling is unique, highly
            detailed with a set of meticulously designed traits, all Wildlings
            are fairly distributed, each costing 0.05 ETH to purchase. You, the
            pioneers in the Wild, will not only receive the high-quality images
            but also be granted full commercial rights to these assets they own.
          </p>
          <div className="border sm:border-0 mt-[32px] p-[24px] pb-[32px] sm:p-0">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:py-[24px] sm:border">
              <div className="flex justify-between items-center w-full sm:w-[unset]">
                <button
                  className="relative w-[48px] h-[48px]"
                  onClick={handleDecrementNumTokensBtnClick}
                >
                  <div className="absolute left-1/2 top-1/2 w-1/2 border-t transform -translate-x-1/2"></div>
                </button>
                <input
                  className="flex justify-center items-center w-[120px] bg-bg border-0 text-center"
                  type="number"
                  min={minNumTokens}
                  max={maxNumTokens}
                  value={numTokens}
                  onChange={handleNumTokensInputChange}
                ></input>
                <button
                  className="relative w-[48px] h-[48px]"
                  onClick={handleIncrementNumTokensBtnClick}
                >
                  <div className="absolute left-1/2 top-1/2 w-1/2 border-t transform -translate-x-1/2"></div>
                  <div className="absolute left-1/2 top-1/2 w-1/2 border-t transform -translate-x-1/2 rotate-90"></div>
                </button>
              </div>
              <button className="w-full sm:w-[148px] sm:h-[48px] sm:ml-[24px] mt-[24px] sm:mt-0 bg-primary rounded-full">
                <div className="text-bg uppercase">Mint</div>
                <div className="caption2 text-bg uppercase">
                  Total {(numTokens * price).toFixed(2)} ETH
                </div>
              </button>
            </div>
            <p className="mt-[24px]">
              Mint Wildlings - {price} ETH per token, {maxNumTokens} max per tx.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-[50px] sm:mt-[128px] px-[24px] pt-[50px]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h2 className="text-[30px] font-bold leading-[36px] tracking-[1px] uppercase">
            Wasted Wild NFT
          </h2>
          <button className="flex justify-center items-center w-full sm:w-[268px] h-[48px] mt-[24px] sm:mt-0 border rounded-full">
            Opensea
          </button>
        </div>
        <div className="sm:flex sm:justify-center sm:items-center mt-[40px]">
          <div
            ref={swiper1Ref}
            className="sm:w-[1100px] mt-[-32px] sm:mt-[-64px]"
            onMouseEnter={() => {
              swiper1Ref.current!.querySelector<HTMLDivElement>(
                '.swiper-button-next',
              )!.style!.opacity = '1';
              swiper1Ref.current!.querySelector<HTMLDivElement>(
                '.swiper-button-prev',
              )!.style!.opacity = '1';
            }}
            onMouseLeave={() => {
              if (swiper1Ref === null) {
                return;
              }
              swiper1Ref.current!.querySelector<HTMLDivElement>(
                '.swiper-button-next',
              )!.style!.opacity = '0';
              swiper1Ref.current!.querySelector<HTMLDivElement>(
                '.swiper-button-prev',
              )!.style!.opacity = '0';
            }}
          >
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              navigation
              autoplay
              pagination={{
                clickable: true,
              }}
              slidesPerView={state.isMobile ? 1 : 3}
              spaceBetween={state.isMobile ? 0 : 32}
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
              ].map((img, idx) => (
                <SwiperSlide
                  className="w-[300px] py-8 sm:py-[64px]"
                  key={idx}
                  onClick={() => {
                    setIsLightbox1Open(true);
                    setLightbox1Idx(idx);
                  }}
                >
                  <div className="w-full">
                    <Image
                      src={img}
                      layout="responsive"
                      alt={`preview-${idx}`}
                      placeholder="blur"
                    ></Image>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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

      <section className="container mx-auto mt-[50px] sm:mt-[128px] px-[24px] pt-[50px]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h2 className="text-[30px] font-bold leading-[36px] tracking-[1px] uppercase">
            Goal
          </h2>
          <div className="flex flex-col sm:flex-row sm:space-x-[32px]">
            <button className="flex justify-center items-center w-full sm:w-[268px] h-[48px] mt-[24px] sm:mt-0 border rounded-full">
              Story
            </button>
            <button className="flex justify-center items-center w-full sm:w-[268px] h-[48px] mt-[24px] sm:mt-0 border rounded-full">
              Roadmap
            </button>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-[32px] mt-[40px]">
          <div>
            <Image src={goal01Img}></Image>
            <h4 className="uppercase">A Unique Community</h4>
            <p>
              Continue to grow our amazing community that has started and been
              flourishing since June 2021 with Chapter 1 of the Capsule Vault
              Trilogy : Absurd Arboretum. Now we gather both tree lovers and
              animal lovers in one place!
            </p>
          </div>
          <div>
            <Image src={goal02Img}></Image>
            <h4 className="uppercase">Physical Plus Digital</h4>
            <p>
              Continue the tradition to manifest our tokens both digitally and
              physically. There will be giveaways to early supporters like how
              we gave away Infinite Objects in Absurd Arboretum. We are also
              preparing for assets deployable in the Metaverse!
            </p>
          </div>
          <div>
            <Image src={goal03Img}></Image>
            <h4 className="uppercase">Platform & Collabs</h4>
            <p>
              With Ab-Ar, we had the Venation and the Fireworks where we worked
              with artists beyond our core team; and in Wa-Wi, there are even
              more collaborations this time, and we will gradually reveal all
              the surprises!
            </p>
          </div>
          <div>
            <Image src={goal04Img}></Image>
            <h4 className="uppercase">Commitment To the Environment</h4>
            <p>
              Donate to a community-selected NGO dedicated to the protection of
              wildlife and the restoration of habitats, such as Re:wild or
              WILD.org. As technology advances, we should all utilize it to not
              only create innovative work and beautiful art but also contribute
              to important causes for the environment and ecology.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
