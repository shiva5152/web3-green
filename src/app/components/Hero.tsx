import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <div className="mt-40 text-7xl font-bold text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <p>
          Multitude of trending <span className="text-lime-400">Web3 </span>
        </p>
        <p>
          games on one <span className=" text-lime-400">platform</span>
        </p>
      </div>
      <div className="mt-7 text-xl font-light leading-7 tracking-wide text-center text-zinc-600 max-md:max-w-full">
        Game Terminal is a Web3 aggregator between gaming creators and gamers on
        <br />a solitary gaming platform bridging the gap between Web2 and Web3.
      </div>
      <button className="flex justify-center flex-col items-center">
        <div className="mt-16 text-xs font-medium text-center text-white whitespace-nowrap max-md:mt-10">
          Scroll down
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3834bafc453b7a2088dd481e55deae2ed9d6a35d06f06cd9a3f19f28c396b635?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="mt-3 w-0.5 aspect-[0.1] fill-[linear-gradient(0deg,#FFF_0%,rgba(255,255,255,0.00)_100%)]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9b4e35437f33e6f2eeb6eb256494afa65acf1b4824607ad731dd159379efd5?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="mt-1 w-6 aspect-square"
        />
      </button>
    </>
  );
};

export default Hero;