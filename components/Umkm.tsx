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

      <div className='grid grid-cols-1 md:grid-cols-2 xl:py-12 py-6 md:gap-x-4 2xl:gap-x-8 gap-5'>
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
    name: `UD DO'A BUNDA (UMKM TELOR ASIN)`,
    image: '/assets/images/umkm/1.jpg',
    open: '8:00',
    close: '20:00',
    link: 'https://maps.app.goo.gl/tBYZBcCV7jznjLjN9',
  },
  {
    id: 2,
    name: 'UD ENDURO JOYO (UMKM LOYANG)',
    image: '/assets/images/umkm/2.jpg',
    open: '08:00',
    close: '22:00',
    link: 'https://goo.gl/maps/zx3GpDYvPnWgTzE49',
  },
];
