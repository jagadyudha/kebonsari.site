import React from "react";
import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="xl:h-[92vh] h-screen bg-gray-200 flex xl:block justify-center">
      <div className="flex justify-between items-center">
        <div className="mx-auto xl:w-[50vw] w-full xl:px-40 md:px-12 px-6">
          <h1 className="md:text-6xl text-4xl font-bold text-gray-800">
            Pemerintah Desa <span className="text-sky-600">KEBONSARI</span>
          </h1>
          <p className="my-4 md:text-xl text-md text-gray-600">
            Programming today is a race between software engineers striving to
            build bigger and better idiot-proof programs, and the Universe
            trying to produce bigger and better idiots. So far, the Universe is
            winning.
          </p>
          <button>
            <a href="#data">
              <p className="mt-10 flex justify-center items-center px-8 py-4 rounded-md text-white bg-sky-600 font-medium hover:bg-sky-800 duration-300 transition-all shadow-sky-600">
                <AiOutlineArrowDown className="mr-2 text-2xl animate-bounce" />
                Jelajahi Sekarang
              </p>
            </a>
          </button>
        </div>
        <div className="w-[49.5vw] h-full xl:block hidden">
          <Image
            src={"/assets/images/hero.png"}
            width="100wh"
            height="92vh"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
