import React from 'react';
//seo
import { NextSeo } from 'next-seo';
import DataSeo from '../_data/seo.json';
import { cardTwitter } from '../lib/seo';
import Image from 'next/image';

const data = [
  {
    id: 1,
    name: 'Sirih Merah',
    manfaat:
      'Mempercepat penyembuhan luka, obat diabetes, mencegah infeksi bakteri, mengobati rheumatoid arthritis.',
    image: '/assets/images/toga/1.png',
  },
  {
    id: 2,
    name: 'Sirih Putih',
    manfaat:
      'Menghentikan pendarahan, mengobati sakit gigi, menurunkan berat badan, obat batuk.',
    image: '/assets/images/toga/2.png',
  },
  {
    id: 3,
    name: 'Temu Kunci',
    manfaat:
      'Meredakan batuk kering, meningkatkan kualitas sperma, mencegah kanker payudara, menyembuhkan COVID-19.',
    image: '/assets/images/toga/3.png',
  },
  {
    id: 4,
    name: 'Lidah Buaya',
    manfaat:
      'Mengatasi kulit kering, menghilangkan jerawat, membersihkan make up, mempercepat penyembuhan luka.',
    image: '/assets/images/toga/4.png',
  },
  {
    id: 5,
    name: 'Kemangi',
    manfaat:
      'Melawan radidak bebas, membantu pertumbuhan tulang, mengobati sariawan, menghilangkan bau mulut.',
    image: '/assets/images/toga/5.png',
  },
  {
    id: 6,
    name: 'Lengkuas',
    manfaat:
      'Meningkatkan imunitas, meredakan asma, mencegah diabetes, mengobati demam dengan pembesaran limpa.',
    image: '/assets/images/toga/6.png',
  },
  {
    id: 7,
    name: 'Jahe',
    manfaat:
      'Mengurangi mual, mengurangi rasa sakit, membantu proses detoksifikasi dan mencegah penyakit kulit, anti peradangan.',
    image: '/assets/images/toga/7.png',
  },
  {
    id: 8,
    name: 'Kencur',
    manfaat:
      'Mengobati batuk, mengobati diare, bahan dasar jamu, mencegah karies gigi.',
    image: '/assets/images/toga/8.png',
  },
  {
    id: 9,
    name: 'Temulawak',
    manfaat:
      'Mengatasi gangguan pencernaan, menambah nafsu makan, mencegah kanker, meningkatkan daya tahan tubuh..',
    image: '/assets/images/toga/9.png',
  },
  {
    id: 10,
    name: 'Kunyit',
    manfaat:
      'Mencegah penyakit jantung, melancarkan buang air besar, mengatasi asam lambung.',
    image: '/assets/images/toga/10.png',
  },
];

const Tanaman = () => {
  const title = 'Tanaman Toga';
  const description = `Jenis-jenis tanaman toga yang ada di kebonsari.`;
  return (
    <main className='my-20 w-full xl:px-32 md:px-12 px-6'>
      <NextSeo
        title={`${title} - Pemerintah Desa Kebonsari`}
        description={description}
        canonical={`${DataSeo.url}/contact`}
        openGraph={{
          url: `${DataSeo.url}/activities`,
          title: `${title} - Pemerintah Desa Kebonsari`,
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
      <div className='sm:my-10 my-5'>
        <h1 className='text-center font-sans font-bold text-gray-800 sm:text-4xl text-2xl my-5'>
          Tanaman Toga
        </h1>
        <p className='text-center text-gray-600 sm:text-lg text-md mx-auto max-w-2xl pb-3 whitespace-pre-line'>
          Jenis-jenis tanaman toga yang ada di Kebonsari.
        </p>
      </div>

      <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-10 gap-5'>
        {data.map((item) => (
          <div key={item.id}>
            <div className='w-full overflow-hidden rounded-lg my-4'>
              <Image
                src={item.image}
                height='80%'
                width='100%'
                layout='responsive'
                objectFit='cover'
                alt={item.name}
              />
            </div>
            <h3 className='md:text-2xl text-xl text-gray-800'>{item.name}</h3>
            <p className='text-sm md:text-md text-gray-600 '>{item.manfaat}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Tanaman;
