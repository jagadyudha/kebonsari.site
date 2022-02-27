import React from 'react';
//seo
import { NextSeo } from 'next-seo';
import DataSeo from '../_data/seo.json';
import { cardTwitter } from '../lib/seo';

const Contact = () => {
  const title = 'Kontak';
  const description = `Kontak terkait dengan pemerintah KEBONSARI.`;
  return (
    <main className='mx-5'>
      <NextSeo
        title={`${title} - Pemerintah Desa Kebonsari`}
        description={description}
        canonical={`${DataSeo.url}/contact`}
        openGraph={{
          url: `${DataSeo.url}/activities`,
          title: `${title} - Jagad Yudha Awali`,
          description: description,
          images: [
            {
              url: DataSeo.ogimage,
              width: 1200,
              height: 600,
              alt: title,
              type: 'image/jpeg',
            },
          ],
          site_name: title,
        }}
        twitter={cardTwitter}
      />
      <div className='text-center xl:mt-20 mt-5 mb-10'>
        <h1 className='font-sans font-bold text-gray-800 sm:text-4xl text-2xl my-5'>
          Kontak (031) 8945235
        </h1>
        <p className='text-gray-600 sm:text-lg text-md mx-auto max-w-2xl border-b pb-3 whitespace-pre-line'>
          Jam Operasional : Senin 08.00–16.00 · Selasa 08.00–16.00 · Rabu
          08.00–16.00 · Kamis 08.00–16.00 · Jumat 08.00–16.00 · Sabtu Tutup ·
          Minggu Tutup
        </p>

        <p className='text-gray-600 sm:text-lg text-md mx-auto max-w-2xl pt-3'>
          Alamat: Jl. Pandawa No.26, Sawah, Kebonsari, Kec. Candi, Kabupaten
          Sidoarjo, Jawa Timur 61271
        </p>
      </div>
      <div className='sm:mb-28 sm:mx-24 h-[80vh] mb-10'>
        <iframe
          className='rounded-lg'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8388920570824!2d112.72085321532921!3d-7.483035575865309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x452996006f3c773b!2zN8KwMjgnNTkuMCJTIDExMsKwNDMnMjMuMCJF!5e0!3m2!1sid!2sid!4v1645926894010!5m2!1sid!2sid'
          width='100%'
          height='100%'
          loading='lazy'
        />
      </div>
    </main>
  );
};

export default Contact;
