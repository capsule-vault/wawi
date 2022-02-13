import type { NextPage } from 'next';
import Image from 'next/image';

import Layout from '../components/Layout';

import introImg from '../public/images/intro.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="container mx-auto grid grid-cols-12 sm:mt-[128px] px-[24px]">
        <div className="col-span-full sm:col-span-6 mt-[24px] sm:mt-[unset] sm:p-[24px] bg-primary]">
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
          <div></div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
