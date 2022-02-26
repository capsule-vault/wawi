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
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox from 'react-image-lightbox';

import Layout from '../components/Layout';

import { Context } from './_app';

import iconCloseImg from '../public/icons/close.png';

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
];

type ArtistByName = {
  [key: string]: {
    name: string;
    description: ReactNode;
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
  const [lightbox1Idx, setLightbox1Idx] = useState(0);

  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const openStoryModal = useCallback(() => {
    setIsStoryModalOpen(true);
  }, []);
  const closeStoryModal = useCallback(() => {
    setIsStoryModalOpen(false);
  }, []);

  const [isRoadmapModalOpen, setIsRoadmapModalOpen] = useState(false);
  const openRoadmapModal = useCallback(() => {
    setIsRoadmapModalOpen(true);
  }, []);
  const closeRoadmapModal = useCallback(() => {
    setIsRoadmapModalOpen(false);
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
          <p>
            {`As a light artist, aka_chang focuses on the textures and the senses of the temperature from multiple lighting materials. Use the ray of light materials to construct the sculpture that sites in space and interacts with the sound. Early entry into the visual arts field as a VJ, he is the founder of the "muse-whisper VJ Team" and the first VJ info platform written by Mandarin:" Zuirens." He is an important promoter of the rise of Taiwan's contemporary VJ culture.`}
          </p>
        ),
        image: artist01Img,
      },
      CACHOU: {
        name: 'CACHOU',
        description: (
          <p>
            We will reveal the story in our Discord’s #artist-spotlight channel
            soon.
          </p>
        ),
        image: artist02Img,
      },
      CL_SOUL_: {
        name: 'CL_SOUL_',
        description: (
          <p>
            We will reveal the story in our Discord’s #artist-spotlight channel
            soon.
          </p>
        ),
        image: artist03Img,
      },
      equinoz: {
        name: 'equinoz',
        description: (
          <>
            <p>
              equinoz is a Taiwanese creator with a distinctive Sci-Fi style,
              often seen in a lot of his characters and landscape works, he has
              been an iconic explorer among his peers. Besides constantly
              creating astonishing 3D high-res characters, equinoz is also
              talented in delivering the full picture to express his ideology
              around the Metaverse concept. As equinoz states in the Visible
              Future collection descrption, “My works are all about the mixture
              of Culture, technology, bright, elegant, and a little futuristic
              crazy nonsense, those are the symbols in my art, and it is the
              future I am eager for.”
            </p>
            <br />
            <p>
              equinoz is constantly exploring the possibilities around
              co-creations. In 2021, his collaboration with RTFKT Studios for
              the Capsule Space Drip collection made his name appears to the
              greater NFT lovers. equinoz is currently building his PFP project
              — Project E within the Elysium System.
            </p>
            <br />
            <p>
              equinoz’s Special Edition 1/1 NFT It is Capsule Vault’s honor to
              have equinoz as our @creature collaborator to create three special
              editions. These works wish to demonstrate the connection between
              cyborg-like biomechatronic features and death symbols in the
              Wasted Wild collection.
            </p>
            <br />
            <p>
              {`"I added elements such as human skulls and death in the three 1/1s I created for the collection and also incorporated animal, human, and mechanical parts to symbolize that the fate of these species and the fate of ours are closely intertwined. However, the blue crystals are there to remind us of the scarce and purely natural resources we still have left."`}
            </p>
          </>
        ),
        image: artist04Img,
      },
      'Jona Hsu': {
        name: 'Jona Hsu',
        description: (
          <p>
            We will reveal the story in our Discord’s #artist-spotlight channel
            soon.
          </p>
        ),
        image: artist05Img,
      },
      KhooKG: {
        name: 'KhooKG',
        description: (
          <p>
            We will reveal the story in our Discord’s #artist-spotlight channel
            soon.
          </p>
        ),
        image: artist06Img,
      },
      'Toma Tang': {
        name: 'Toma Tang',
        description: (
          <p>
            We will reveal the story in our Discord’s #artist-spotlight channel
            soon.
          </p>
        ),
        image: artist07Img,
      },
      'Ray Han': {
        name: 'Ray Han',
        description: (
          <p>
            We will reveal the story in our Discord’s #artist-spotlight channel
            soon.
          </p>
        ),
        image: artist08Img,
      },
      'Sic Lee': {
        name: 'Sic Lee',
        description: (
          <>
            <p>
              {`Sic Lee is an illustrator / tattoo artist based in Taiwan, a member of the "Moon Face Dragon Temple" creative team (IG: mfdt606). He adopts simplistic lines and dynamic colors to create a distinguished style and often spices up his work with a bit of dark humor and sarcasm.`}
            </p>
            <br />
            <p>
              {`Sic's Special Edition 1/1 Dodo “I have no idea what NFT truly is when Capsule Vault approached me for collaboration. I thought this was just a typical collaboration. After I acknowledged the NFT community that Capsule Vault team is trying to establish, all of a sudden I felt like I am down in the rabbit hole. That's when I came up with this human in disguise who is trying to survive in the Wasted Wild world. I find this character shares a lot of similarities with myself, a traditional creator entering the NFT world.”`}
            </p>
            <br />
            <p>
              Sic is working on the collaboration with artist Raimochi from Rug
              Pull Frens collection. You can find out more info about this
              raffle in Rug Pull Frens Discord server!
            </p>
          </>
        ),
        image: artist09Img,
      },
      ZHIXIAN: {
        name: 'ZHIXIAN',
        description: (
          <p>
            We will reveal the story in our Discord’s #artist-spotlight channel
            soon.
          </p>
        ),
        image: artist10Img,
      },
    }),
    [],
  );

  return (
    <Layout>
      <section className="container mx-auto sm:flex sm:mt-[128px] px-[24px]">
        <div className="sm:flex-1 mt-[24px] sm:mt-[unset] sm:px-[48px] bg-primary]">
          <video src="/intro.mp4" muted autoPlay loop></video>
        </div>
        <div className="sm:flex-1">
          <h2 className="h3 sm:h2 font-bold uppercase sm:whitespace-nowrap mt-[32px] sm:mt-[unset]">
            Mint For Our Ecology
          </h2>
          <div className="tab mt-[16px] sm:text-right">
            Wasted Wild NFTs By Capsule Vault
          </div>
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
          <h2 className="h3 font-bold uppercase">Wasted Wild NFT</h2>
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
                  key={img.src}
                  onClick={() => {
                    setIsLightbox1Open(true);
                    setLightbox1Idx(idx);
                  }}
                >
                  <div className="w-full">
                    <Image
                      src={img}
                      layout="responsive"
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
          <h2 className="h3 font-bold uppercase">Goal</h2>
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
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-bg" />
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
                  <section className="relative max-h-screen sm:max-h-[80vh] sm:container sm:mx-auto sm:top-1/2 sm:transform sm:-translate-y-1/2 px-[24px] sm:px-0 pt-[30px] pb-[50px] overflow-y-auto">
                    <div className="flex justify-between items-center">
                      <h3 className="h3 sm:h1 uppercase font-bold">Story</h3>
                      <button className="w-[32px]" onClick={closeStoryModal}>
                        <Image src={iconCloseImg} layout="responsive"></Image>
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
                          Capsule Vault proudly presents Wasted Wild, a
                          collection of 4200 imaginary beings thriving in the
                          post-human age. Preceded by Absurd Arboretum, the
                          project inherits and embodies the core ethos of
                          becoming an integral part of our ecology by planting
                          trees with initial primary sales and with each
                          secondary sale continuously.
                        </p>
                        <br />
                        <p>
                          These procedurally generated life forms are not only
                          digital, non-fungible tokens living on the Ethereum
                          blockchain, stored as ERC-721 tokens and materialized
                          as high-resolution images crafted with sophisticated
                          techniques, but also haunting caricatures of their
                          endangered ancestors living in the physical world with
                          us today. These evolved descendants remind humans of
                          the looming tragedy if we continue to ignore the alert
                          Nature has been signaling us.
                        </p>
                        <br />
                        <p>
                          The mutated Wildlings in Wasted Wild are both victims
                          and deities in a quasi-dystopian world that has become
                          increasingly intolerable for pure biological organisms
                          that we were familiar with. They have adapted to live
                          in undesirable conditions filled with waste, the
                          majority of which has been produced by human
                          activities and post-industrial civilizations; a lot of
                          these creatures have even developed varying levels of
                          cyborg-like biomechatronic features to augment their
                          daily lives.
                        </p>
                      </div>
                    </div>
                  </section>
                </Transition.Child>
              </Dialog>
            </Transition.Root>
            <button
              className="flex justify-center items-center w-full sm:w-[268px] h-[48px] mt-[24px] sm:mt-0 border rounded-full"
              onClick={openRoadmapModal}
            >
              Roadmap
            </button>
            <Transition.Root show={isRoadmapModalOpen} as={Fragment}>
              <Dialog
                className="fixed inset-0 z-40"
                open={isRoadmapModalOpen}
                onClose={closeRoadmapModal}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-bg" />
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
                  <section className="relative max-h-screen sm:max-h-[80vh] sm:container sm:mx-auto sm:top-1/2 sm:transform sm:-translate-y-1/2 px-[24px] sm:px-0 pt-[30px] pb-[50px] overflow-y-auto">
                    <div className="flex justify-between items-center">
                      <h3 className="h3 sm:h1 uppercase font-bold">Roadmap</h3>
                      <button className="w-[32px]" onClick={closeRoadmapModal}>
                        <Image src={iconCloseImg} layout="responsive"></Image>
                      </button>
                    </div>
                    <div className="tab sm:h4 mt-[20px]">
                      Welcome to the Wasted Wild ROADMAP ! Like Absurd Arboretum
                      and the epic BONFIRE Festival that followed, we have many
                      exciting giveaways, events, and charities coming up for
                      Wasted Wild. All three projects are parts of one big story
                      in the Capsule Vault metaverse.
                    </div>
                    {[
                      {
                        title: `11% Physical Manifestation`,
                        description: (
                          <>
                            <p>
                              Continuing the tradition to manifest our tokens
                              both digitally and physically.
                            </p>
                            <br />
                            <p>
                              • Holders of 5 or more Wildlings will receive 3D
                              printing sculpture!
                              <br />• Special edition LARGE 3D prints raffle for
                              all current holders ! (1 NFT = 1 entry)
                            </p>
                          </>
                        ),
                        image: roadmap01Img,
                      },
                      {
                        title: `22% Special Edition Reveal`,
                        description: (
                          <>
                            <p>
                              24 Special Artist Editions from 11 Top-Tier
                              Artists will be revealed with exclusive raffles
                              for all Wildling holders.
                            </p>
                            <br />
                            <p>
                              Special Edition holders will have exclusive
                              utilities in the future.
                            </p>
                          </>
                        ),
                        image: roadmap02Img,
                      },
                      {
                        title: `55% Capsule Vault Dao`,
                        description: (
                          <>
                            <p>
                              Establish a community-owned Capsule Vault DAO to
                              partner and support projects with sustainability
                              missions!
                            </p>
                            <br />
                            <p>More details to be revealed …</p>
                          </>
                        ),
                        image: roadmap03Img,
                      },
                      {
                        title: `66% Adopt A Rhino`,
                        description: (
                          <>
                            <p>
                              As we continue to plant trees, with Wa-Wi, we will
                              dive into the protection of wildlife, too!
                            </p>
                            <br />
                            <p>
                              The contribution will be recurring with periodic
                              updates on our Rhino which will be shared with the
                              community. As technology advances, we should all
                              utilize it to not only create innovative work and
                              beautiful art but also contribute to important
                              causes such as improving the environment and
                              ecology.
                            </p>
                          </>
                        ),
                        image: roadmap04Img,
                      },
                      {
                        title: `88% Into The Metaverse`,
                        description: (
                          <>
                            <p>
                              Assets Reveal for either Decentraland or The
                              Sandbox!
                            </p>
                            <br />
                            <p>
                              {`As all of the images are first meticulously modeled, procedurally generated, and rendered in 3D, our assets may be fed into the metaverse quite well, some tweaks would of course be required, given the different requirements and standards of the various platforms, but we're on it!`}
                            </p>
                          </>
                        ),
                        image: roadmap05Img,
                      },
                      {
                        title: `100% Wasted Evolution`,
                        description: (
                          <>
                            <p>BONFIRE Festival Part 2 to be announced ...</p>
                            <br />
                            <p>
                              Various activities, airdrops, and tokenomics will
                              ensue, combined with the charity component of the
                              project!
                            </p>
                          </>
                        ),
                        image: roadmap06Img,
                      },
                    ].map(({ title, description, image }) => (
                      <div
                        className="flex flex-col sm:flex-row mt-[32px]"
                        key={title}
                      >
                        <div className="sm:shrink-0 w-full sm:w-[168px]">
                          <Image
                            src={image}
                            layout="responsive"
                            placeholder="blur"
                          ></Image>
                        </div>
                        <div className="mt-[32px] sm:mt-0 sm:ml-[32px]">
                          <h4 className="h4 sm:h3 text-[22px]">{title}</h4>
                          <div className="mt-[24px]">{description}</div>
                        </div>
                      </div>
                    ))}
                  </section>
                </Transition.Child>
              </Dialog>
            </Transition.Root>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-[32px] mt-[40px] space-y-[40px] sm:space-y-0">
          <div>
            <Image src={goal01Img}></Image>
            <h3 className="h4 mt-[32px] uppercase">An Unique Community</h3>
            <p className="mt-[24px]">
              Continue to grow our amazing community that has started and been
              flourishing since June 2021 with Chapter 1 of the Capsule Vault
              Trilogy : Absurd Arboretum. Now we gather both tree lovers and
              animal lovers in one place!
            </p>
          </div>
          <div>
            <Image src={goal02Img}></Image>
            <h3 className="h4 mt-[32px] uppercase">Physical Plus Digital</h3>
            <p className="mt-[24px]">
              Continue the tradition to manifest our tokens both digitally and
              physically. There will be giveaways to early supporters like how
              we gave away Infinite Objects in Absurd Arboretum. We are also
              preparing for assets deployable in the Metaverse!
            </p>
          </div>
          <div>
            <Image src={goal03Img}></Image>
            <h3 className="h4 mt-[32px] uppercase">Platform & Collabs</h3>
            <p className="mt-[24px]">
              With Ab-Ar, we had the Venation and the Fireworks where we worked
              with artists beyond our core team; and in Wa-Wi, there are even
              more collaborations this time, and we will gradually reveal all
              the surprises!
            </p>
          </div>
          <div>
            <Image src={goal04Img}></Image>
            <h3 className="h4 mt-[32px] uppercase">
              Commitment To the Environment
            </h3>
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
        <h2 className="h3 font-bold uppercase">Artists</h2>
        <div className="h4 mt-[40px]">
          COLLABORATORS for Special Editions, click images to read details.
        </div>
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
              ].map(({ img, name }) => (
                <SwiperSlide
                  className="relative w-[300px] py-[132px]"
                  key={name}
                >
                  <div
                    className="w-full"
                    onClick={handleArtistModalOpenBtnClick(name)}
                  >
                    <Image
                      src={img}
                      layout="responsive"
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
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-bg" />
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
              <section className="relative max-h-screen sm:max-h-[80vh] sm:container sm:mx-auto sm:top-1/2 sm:transform sm:-translate-y-1/2 px-[24px] sm:px-0 pt-[30px] pb-[50px] overflow-y-auto">
                <div className="flex justify-between items-center">
                  <Dialog.Title className="h3 sm:h1 font-bold">
                    Artist - {artistByName[currArtistName].name}
                  </Dialog.Title>
                  <button className="w-[32px]" onClick={closeArtistModal}>
                    <Image src={iconCloseImg} layout="responsive"></Image>
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
                  <div className="mt-[32px] sm:mt-0 sm:mr-[48px]">
                    {artistByName[currArtistName].description}
                  </div>
                </div>
              </section>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </section>

      <section className="container mx-auto mt-[50px] sm:mt-[128px] px-[24px] sm:px-0 py-[50px]">
        <h2 className="h3 font-bold uppercase">Team</h2>
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
                <Image src={img} layout="responsive" placeholder="blur"></Image>
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
