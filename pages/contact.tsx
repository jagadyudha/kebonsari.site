import React from 'react';

const Contact = () => {
  return (
    <main className='mx-5'>
      <div className='text-center xl:mt-20 mt-5 mb-10'>
        <h1 className='font-sans font-bold text-gray-800 sm:text-4xl text-2xl my-2'>
          Kontak
        </h1>
        <p className='text-gray-600 sm:text-lg text-md mx-auto max-w-2xl border-b pb-3'>
          Telepon: (031) 8945235
        </p>
        <p className='text-gray-600 sm:text-lg text-md mx-auto max-w-2xl pt-3'>
          Jl. Kebonsari RT.26 RW.04 Kebonsari, Kebonsari, Bulusidokare, Kec.
          Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61214
        </p>
      </div>
      <div className='sm:mb-28 sm:mx-24 h-[80vh] mb-10'>
        <iframe
          className='rounded-lg'
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3956.030929557593!2d112.719381!3d-7.4618301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6d2411b95d1%3A0x663ae7184d9a4ba4!2sBalai%20RW%20Kebonsari!5e0!3m2!1sid!2sid!4v1645855829168!5m2!1sid!2sid'
          width='100%'
          height='100%'
          loading='lazy'
        />
      </div>
    </main>
  );
};

export default Contact;
