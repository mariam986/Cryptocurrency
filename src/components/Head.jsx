import React, { useState } from "react";
import Arrow from "../assets/images/Arrow.png";
import bitcoin from "../assets/images/bitcoin.png";

const Head = () => {
  return (
    <section className={`bg-backgroundcolor `}>
      <div className="w-[90%] m-auto flex md:pt-32 pt-20 md:w-[80%]">
        <div className="w-[90%] md:w-[50%] ">
          <div>
            <div className="relative bg-gray-400 text-white md:pl-28 pl-20 py-1 rounded-full  md:text-base text-[12px]	font-normal w-[80%] md:w-[60%] ">
              For the Black Friday Weekend
              <button className="absolute top-0 left-0 bg-white text-blue-900 px-3 py-1 rounded-full md:text-base text-[12px]	font-medium">
                75% Save
              </button>
            </div>
            <div className="text-3xl md:text-6xl font-bold text-white">
              <h1 className="md:mt-5 mt-3">Fastest & secure</h1>
              <h1 className="md:mt-5 mt-3">platform to invest</h1>
              <h1 className="md:mt-5 mt-3">in crypto</h1>
            </div>
            <div className="md:text-base text-sm	font-normal text-white">
              <p className="mt-10">
                Buy and sell cryptocurrencies,trusted by 10M wallets
              </p>
              <p className="mt-2">with over $30 billion in transactions.</p>
            </div>
            <div className="relative mt-10">
              <button className=" bg-blue-600 md:py-4 py-2 md:pl-10 pl-8 pr-20 rounded-full font-medium text-lg text-white">
                Try for FREE
              </button>
              <img
                className="absolute md:top-3 top-2 md:left-44 left-40 "
                src={Arrow}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden md:block">
          <img src={bitcoin} />
        </div>
      </div>
    </section>
  );
};

export default Head;
