import React from 'react';

const Footer = () => {
  return (
    <footer className='md:py-14 py-8 xl:mx-28 mx-8 border-t border-t-black border-opacity-10 flex md:justify-start justify-center'>
      <div className='items-center font-light text-gray-600'>
        <span>
          © {new Date().getFullYear()}. Made by{' '}
          <a
            target={'_blank'}
            rel={'noopener noreferrer'}
            href='https://www.instagram.com/kkn22.kebonsari/'
            className='text-sky-500 hover:underline'
          >
            KKN-P KEBONSARI
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
