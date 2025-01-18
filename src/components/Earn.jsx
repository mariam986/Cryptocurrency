import React from "react";

import { FaArrowDown } from "react-icons/fa6";

const Earn = () => {
  return (
    <section className="bg-backgroundcolor pt-20 md:pt-60 ">
      <div className="w-[90%] md:w-80% m-auto">
        <div className=" md:text-center w-[90%] m-auto md:w-[100%] ">
          <h2 className="font-bold text-[40px] md:text-[40px] text-white ">
            Check how much you can earn
          </h2>
          <div className="font-normal text-[18px] md:text-lg text-white mt-10">
            <p>
              Let’s check your hash rate to see how much you will earn today,
            </p>
            <p> Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        <div className="w-[90%] md:w-[66.7%] m-auto bg-gray-100 py-5 md:py-10 mt-10 rounded-tl-lg rounded-tr-lg block  md:flex gap-32 px-3 md:px-10  md:mr-[236px]">
          <input
            className="border-0 border-b-2 bg-gray-100 w-[100%] md:w-[50%] py-2 placeholder-gray-900 "
            placeholder="Enter your hash rate"
          />
          <div className="relative w-[100%] md:w-[30%]">
            <input
              className="border-0 border-b-2 bg-gray-100 py-3 placeholder-gray-900"
              placeholder="TH/s"
            />
            <FaArrowDown className="absolute top-3 right-0 md:right-7 text-gray-300" />
          </div>

          <button className="bg-blue-600 py-2 md:py-4 px-10 text-white rounded-full mt-5 md:mt-0">
            calculate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Earn;
