import React from "react";
import Illustrations from "../assets/images/Illustrations.png";

const More = () => {
  return (
    <section className="bg-backgroundcolor">
      <div className="w-[90%] md:w-[80%] m-auto md:flex pt-5 md:pt-20 gap-20">
        <div className="w-[60%]">
          <img className="w-[5000px] hidden md:block" src={Illustrations} />
        </div>
        <div className="w-[100%] md:w-[40%]">
          <div className="mt-16 md:w-[32] font-bold text-[40px] md:text-[40px] text-white">
            <p>Why you should choose</p>
            <p>CRAPPO</p>
          </div>
          <div className="text-[16px] md:text-base font-normal text-white mt-5 md:mt-10">
            <p>Experience the next generation cryptocurrency</p>
            <p>platform,no financial borders,extra fees and fake</p>
            <p>reviews.</p>
          </div>
          <div>
            <button className="bg-blue-600 text-white rounded-full px-5 md:px-10 py-2 md:py-4 mt-10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;
