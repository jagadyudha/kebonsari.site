import React from "react";

const Navbar = () => {
  return (
    <nav className="xl:px-20 px-6 sticky top-0 bg-white z-40 flex justify-between h-[8vh]">
      <div className="flex items-center w-1/3 xl:w-1/2">
        <img src="/assets/images/logo.png" />
      </div>
      <button>
        <p className="flex justify-center items-center border border-sky-600 md:px-4 px-2 md:py-2 py-1 rounded-md text-sky-600 font-medium hover:text-white hover:bg-sky-600 transition-all duration-300">
          Hubungi Kami
        </p>
      </button>
    </nav>
  );
};

export default Navbar;
