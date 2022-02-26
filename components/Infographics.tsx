import React from 'react';

const Data = [
  { id: 1, name: 'Wilayah Dusun', value: 1 },
  { id: 2, name: 'Penduduk', value: 5451 },
  { id: 3, name: 'Keluarga', value: 1393 },
  { id: 4, name: 'UMKM', value: 48 },
];

const Infographics = () => {
  return (
    <section className='xl:px-32 md:px-12 px-6'>
      <div className='text-center xl:w-1/2 w-full pb-6 mx-auto'>
        <h2 className='md:text-4xl text-2xl font-bold text-gray-800'>
          Infografis Desa
        </h2>
        <p className='my-4 md:text-xl text-md text-gray-500'>
          Data infografis terkait pemerintahan desa kebonsari yang sudah diolah.
        </p>
      </div>
      <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:py-12 py-6 xl:gap-x-4 2xl:gap-x-6 gap-4'>
        {Data.map((item) => (
          <div
            key={item.id}
            className='border border-black border-opacity-20 rounded-lg px-12 py-14 2xl:py-20 text-center'
          >
            <p className='md:text-4xl text-2xl font-bold text-gray-800'>
              {item.value}
            </p>
            <p className='my-4 md:text-xl text-md text-gray-600'>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Infographics;
