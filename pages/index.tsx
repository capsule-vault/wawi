import type { NextPage } from 'next';
import Image from 'next/image';

import Layout from '../components/Layout';

import introImg from '../public/images/intro.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="container mx-auto grid grid-cols-12 sm:mt-[128px] px-[24px]">
        <div className="col-span-full sm:col-span-6 mt-[24px] sm:mt-[unset] sm:px-[48px] bg-primary]">
          <Image src={introImg} layout="responsive"></Image>
        </div>
        <div className="col-span-full sm:col-span-6">
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
                <button className="relative w-[48px] h-[48px]">
                  <div className="absolute left-1/2 top-1/2 w-1/2 border-t transform -translate-x-1/2"></div>
                </button>
                <input
                  className="flex justify-center items-center w-[120px] bg-bg border-0 text-center"
                  type="number"
                  min={1}
                  max={3}
                  value={1}
                ></input>
                <button className="relative w-[48px] h-[48px]">
                  <div className="absolute left-1/2 top-1/2 w-1/2 border-t transform -translate-x-1/2"></div>
                  <div className="absolute left-1/2 top-1/2 w-1/2 border-t transform -translate-x-1/2 rotate-90"></div>
                </button>
              </div>
              <button className="w-full sm:w-[148px] sm:h-[48px] sm:ml-[24px] mt-[24px] sm:mt-0 bg-primary rounded-full">
                <div className="text-bg uppercase">Mint</div>
                <div className="caption2 text-bg uppercase">Total 0.05 ETH</div>
              </button>
            </div>
            <p className="mt-[24px]">
              Mint Wildlings - 0.05 ETH per token, 3 max per tx.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
