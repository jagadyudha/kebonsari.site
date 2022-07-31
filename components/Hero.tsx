import React from 'react';
import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Hero = () => {
  return (
    <section className='relative h-[94vh] bg-[#F2F4F5] flex xl:block justify-center items-center'>
      <div className='flex justify-between items-center h-full'>
        <div className='mx-auto xl:w-[50vw] w-full xl:px-32 md:px-12 px-6 z-10'>
          <h1 className='2xl:text-5xl text-4xl font-bold text-gray-800'>
            Pemerintah Desa <span className='text-sky-600'>KEBONSARI</span>
          </h1>
          <p className='my-4 2xl:text-xl md:text-lg text-md text-gray-500'>
            Merupakan salah satu Desa yang berada pada wilayah Kabupaten
            Sidoarjo. Desa ini berada dibawah naungan Pemerintah Daerah dan
            KemenDesa.
          </p>
          <p className='my-4 2xl:text-xl md:text-lg text-md text-gray-500'>
            Desa KEBONSARI juga terdapat banyak program swadaya, wisata,
            kemasyarakatan dan acara rakyat untuk meningkatkan kesejahteraan
            masyarakat dalam wilayahnya.
          </p>
          <button className='mt-10 '>
            <a href='#infografis'>
              <p className='flex justify-center items-center px-5 py-3 sm:px-8 sm:py-4 rounded-md text-white bg-sky-600 font-medium hover:bg-sky-800 duration-300 transition-all shadow-sky-600'>
                <AiOutlineArrowDown className='mr-2 text-2xl animate-bounce' />
                Jelajahi Sekarang
              </p>
            </a>
          </button>
        </div>
        <div className='w-1/2 h-full xl:block hidden'></div>
        <div className='w-full lg:w-3/4 h-full top-0 right-0 absolute'>
          <Image
            className='object-cover object-center w-full h-full opacity-40 lg:opacity-100'
            src={'/assets/images/hero.png'}
            layout='fill'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
