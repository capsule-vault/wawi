import type { NextPage } from 'next';
import Image from 'next/image';
import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useContext,
} from 'react';
import { Navigation, Autoplay, Pagination } from 'swiper';
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
];
const swiper2Images = [
  '/images/se_01.png',
  '/images/se_02.png',
  '/images/se_03.png',
  '/images/se_04.png',
  '/images/se_05.png',
  '/images/se_06.png',
  '/images/se_07.png',
  '/images/se_08.png',
  '/images/se_09.png',
  '/images/se_10.png',
];

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
    [swiper1Ref, swiper2Ref].forEach((swiperRef) => {
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

      <section className="container mx-auto mt-[50px] sm:mt-[128px] px-[24px] sm:px-0 pt-[50px]">
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
            className="sm:w-[1100px] mt-[-84px]"
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
              spaceBetween={state.isMobile ? 8 : 32}
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
                  className="w-[300px] py-[84px]"
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

      <section className="container mx-auto mt-[50px] sm:mt-[128px] px-[24px] sm:px-0 pt-[50px]">
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
        <div className="sm:grid sm:grid-cols-2 sm:gap-[32px] mt-[40px] space-y-[40px] sm:space-y-0">
          <div>
            <Image src={goal01Img}></Image>
            <h4 className="mt-[32px] uppercase">An Unique Community</h4>
            <p className="mt-[24px]">
              Continue to grow our amazing community that has started and been
              flourishing since June 2021 with Chapter 1 of the Capsule Vault
              Trilogy : Absurd Arboretum. Now we gather both tree lovers and
              animal lovers in one place!
            </p>
          </div>
          <div>
            <Image src={goal02Img}></Image>
            <h4 className="mt-[32px] uppercase">Physical Plus Digital</h4>
            <p className="mt-[24px]">
              Continue the tradition to manifest our tokens both digitally and
              physically. There will be giveaways to early supporters like how
              we gave away Infinite Objects in Absurd Arboretum. We are also
              preparing for assets deployable in the Metaverse!
            </p>
          </div>
          <div>
            <Image src={goal03Img}></Image>
            <h4 className="mt-[32px] uppercase">Platform & Collabs</h4>
            <p className="mt-[24px]">
              With Ab-Ar, we had the Venation and the Fireworks where we worked
              with artists beyond our core team; and in Wa-Wi, there are even
              more collaborations this time, and we will gradually reveal all
              the surprises!
            </p>
          </div>
          <div>
            <Image src={goal04Img}></Image>
            <h4 className="mt-[32px] uppercase">
              Commitment To the Environment
            </h4>
            <p className="mt-[24px]">
              Donate to a community-selected NGO dedicated to the protection of
              wildlife and the restoration of habitats, such as Re:wild or
              WILD.org. As technology advances, we should all utilize it to not
              only create innovative work and beautiful art but also contribute
              to important causes for the environment and ecology.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-[50px] sm:mt-[128px] px-[24px] sm:px-0 pt-[50px]">
        <h2 className="text-[30px] font-bold leading-[36px] tracking-[1px] uppercase">
          Artists
        </h2>
        <h4 className="mt-[40px]">
          COLLABORATORS for Special Editions, click images to read details.
        </h4>
        <div className="sm:flex sm:justify-center sm:items-center mt-[40px]">
          <div
            ref={swiper2Ref}
            className="sm:w-[1100px] mt-[-132px]"
            onMouseEnter={() => {
              swiper2Ref.current!.querySelector<HTMLDivElement>(
                '.swiper-button-next',
              )!.style!.opacity = '1';
              swiper2Ref.current!.querySelector<HTMLDivElement>(
                '.swiper-button-prev',
              )!.style!.opacity = '1';
            }}
            onMouseLeave={() => {
              if (swiper2Ref === null) {
                return;
              }
              swiper2Ref.current!.querySelector<HTMLDivElement>(
                '.swiper-button-next',
              )!.style!.opacity = '0';
              swiper2Ref.current!.querySelector<HTMLDivElement>(
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
              spaceBetween={state.isMobile ? 8 : 32}
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
              ].map(({ img, name }, idx) => (
                <SwiperSlide
                  className="relative w-[300px] py-[132px]"
                  key={idx}
                  onClick={() => {
                    setIsLightbox2Open(true);
                    setLightbox2Idx(idx);
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
                  <div className="tab absolute bottom-[84px] w-full text-center">
                    {name}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {isLightbox2Open && (
          <Lightbox
            mainSrc={swiper2Images[lightbox2Idx]}
            nextSrc={swiper2Images[(lightbox2Idx + 1) % swiper2Images.length]}
            prevSrc={
              swiper2Images[
                (lightbox2Idx + swiper2Images.length - 1) % swiper2Images.length
              ]
            }
            onCloseRequest={() => {
              setIsLightbox2Open(false);
            }}
            onMoveNextRequest={() => {
              setLightbox2Idx((lightbox2Idx + 1) % swiper2Images.length);
            }}
            onMovePrevRequest={() => {
              setLightbox2Idx(
                (lightbox2Idx + swiper2Images.length - 1) %
                  swiper2Images.length,
              );
            }}
            enableZoom={false}
            imagePadding={50}
          />
        )}
      </section>

      <section className="container mx-auto mt-[50px] sm:mt-[128px] px-[24px] sm:px-0 py-[50px]">
        <h2 className="text-[30px] font-bold leading-[36px] tracking-[1px] uppercase">
          Team
        </h2>
        <div className="grid grid-cols-2 gap-x-[16px] sm:gap-x-[32px] gap-y-[32px] sm:gap-y-[40px] mt-[40px]">
          {[
            {
              img: team01Img,
              name: 'Chuforreal',
              bio: 'Storyteller',
            },
            {
              img: team02Img,
              name: 'apeinacoupe',
              bio: 'Design and technical captain',
            },
            {
              img: team03Img,
              name: 'jannie.oioi',
              bio: 'Art direction and coordination',
            },
            {
              img: team04Img,
              name: 'yellow_river',
              bio: 'Solidity Developer',
            },
            {
              img: team05Img,
              name: 'AshΞAnn',
              bio: 'CGI Hobbyist',
            },
            {
              img: team06Img,
              name: 'jyjinn',
              bio: 'Pipeline TD',
            },
            {
              img: team07Img,
              name: 'PxtrickPin',
              bio: 'CG Artist',
            },
            {
              img: team08Img,
              name: 'harry830622',
              bio: 'Solidity / Web Developer',
            },
            {
              img: team09Img,
              name: 'Vera',
              bio: 'Community Manager',
            },
            {
              img: team10Img,
              name: 'wenpanghsiang',
              bio: 'Brand Designer',
            },
            {
              img: team11Img,
              name: 'zivshock',
              bio: 'Marketing Lead',
            },
            {
              img: team12Img,
              name: 'Bitman',
              bio: 'Community Manager',
            },
          ].map(({ img, name, bio }) => (
            <div key={name} className="sm:grid sm:grid-cols-3 sm:gap-[32px]">
              <div className="w-full sm:col-span-1">
                <Image src={img} layout="responsive"></Image>
              </div>
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
    </Layout>
  );
};

export default Home;
