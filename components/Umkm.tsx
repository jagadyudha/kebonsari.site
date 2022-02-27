import React from 'react';
import Image from 'next/image';

const Umkm = () => {
  var today = new Date();
  return (
    <section className='xl:px-32 md:px-12 px-6'>
      <div className='text-center xl:w-1/2 w-full pb-6 mx-auto' id='infografis'>
        <h2 className='md:text-4xl text-2xl font-bold text-gray-800'>
          Dukung UMKM
        </h2>
        <p className='my-4 md:text-xl text-md text-gray-600'>
          Data infografis terkait pemerintahan desa kebonsari yang sudah diolah.
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 xl:py-12 py-6 md:gap-x-4 2xl:gap-x-8 gap-5'>
        {umkm.map((item) => (
          <div key={item.id}>
            <div className='w-full overflow-hidden rounded-lg'>
              <Image
                src={item.image}
                height='100%'
                width='100%'
                layout='responsive'
                objectFit='cover'
                alt={item.name}
              />
            </div>
            <div className='my-2 sm:my-4'>
              <h3 className='md:text-2xl text-xl text-gray-800'>{item.name}</h3>
              <div>
                {' '}
                {today.getHours() > parseInt(item.close.split(':')[0]) &&
                today.getHours() < parseInt(item.open.split(':')[0]) ? (
                  <>
                    <p className='text-red-500 text-sm md:text-md'>Tutup</p>
                    <p className='text-sm md:text-md text-gray-600 '>
                      Buka pukul {item.open}
                    </p>
                  </>
                ) : (
                  <>
                    <p className='text-green-500 text-sm md:text-md'>Buka</p>
                    <p className='text-sm md:text-md text-gray-600 '>
                      Tutup pukul {item.close}
                    </p>
                  </>
                )}
              </div>

              <div className='mt-4 md:mt-8'>
                <a
                  href={item.link}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className='text-blue-500 sm:text-lg text-md'
                >
                  Google Maps →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Umkm;

const umkm = [
  {
    id: 1,
    name: 'McDonalds',
    image:
      'https://images.unsplash.com/photo-1583779791512-eeccdee5c5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    open: '10:00',
    close: '22:00',
    link: 'https://media.suara.com/pictures/970x544/2018/09/13/63559-ilustrasi-pocong-screenshot-youtube.jpg',
  },
  {
    id: 2,
    name: 'Burger King',
    image:
      'https://images.unsplash.com/photo-1587476353394-d031d13188ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=655&q=80',
    open: '08:00',
    close: '21:00',
    link: 'https://media.suara.com/pictures/970x544/2018/09/13/63559-ilustrasi-pocong-screenshot-youtube.jpg',
  },
  {
    id: 3,
    name: 'Shell',
    image:
      'https://images.unsplash.com/photo-1632762301294-a8e29f090ba8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    open: '01:00',
    close: '23:20',
    link: 'https://media.suara.com/pictures/970x544/2018/09/13/63559-ilustrasi-pocong-screenshot-youtube.jpg',
  },
];
