import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[92vh] bg-gray-200">
      <div className="flex justify-between items-center">
        <div className="mx-auto w-[50vw] pl-40 pr-40">
          <h1 className="text-6xl font-bold text-gray-800">
            Pemerintah Desa{" "}
            <span className="text-sky-600 hover:underline transition-all duration-300">
              KEBONSARI
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="w-[49.5vw] h-full">
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
