import React from 'react';
import { IoHeartSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className='py-14 mx-28 border-t border-t-black border-opacity-10'>
      <div className='flex items-center font-light text-gray-600'>
        <p>© {new Date().getFullYear()}. Made with</p>
        <IoHeartSharp className='mx-1 text-lg text-red-600' />
        <p>
          by{' '}
          <a
            href='https://www.instagram.com/kkn22.kebonsari/'
            className='text-sky-500 hover:underline'
          >
            KKN-P kebonsari
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
