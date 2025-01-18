import React from "react";

const Revenue = () => {
  return (
    <section className="bg-gray-100">
      <div className="w-[80%]  md:mr-[315px] md:w-[60%] m-auto bg-white py-5 md:py-10 px-5 md:px-10 rounded-bl-lg rounded-br-lg shadow-2xl">
        <h2 className="font-medium text-sm md:text-base text-blue-600	">
          ESTIMATED 24 HOUR REVENUE:
        </h2>
        <div className="block md:flex gap-2 font-bold text-[28px] md:text-[32px] mt-5">
          <p>0.055 130 59 ETH</p>
          <p className="text-blue-600"> ($1275)</p>
        </div>
        <p className="font-normal text-base	text-gray-600 mt-3 ">
          Revenue will change based on mining difficulty and Ethereum price.
        </p>
      </div>
    </section>
  );
};

export default Revenue;
