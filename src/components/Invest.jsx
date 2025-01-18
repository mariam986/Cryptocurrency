import React from "react";
import Chart from "../assets/images/Chart.png";
import Statistic from "../assets/images/Statistic.png";
import Table from "../assets/images/Table.png";

const Invest = () => {
  return (
    <section className="bg-background pt-20">
      <div className="">
        <div className="text-center font-bold text-[30px] md:text-[40px] text-white w-[90%] m-auto md:w-[100%]">
          <h1>Market sentiments, portfolio, and run </h1>
          <h1>the infrastructure of your choice</h1>
        </div>
        <div className="md:flex block mt-20 md:mt-32 gap-0 md:gap-96 w-[90%] m-auto  md:w-4/5   ">
          <div>
            <h1 className="font-bold text-[32px] md:text-[32px] text-white mt-5">
              Invest Smart
            </h1>
            <div className="font-normal text-[16px] md:text-base text-white mt-7">
              <p>Get full statistic information about the behaviour of </p>
              <p>buyers and sellers will help you to make the decision. </p>
            </div>
            <button className="bg-blue-600 text-white px-7 md:px-10 py-2 md:py-4 rounded-full mt-10">
              Learn More
            </button>
          </div>
          <div className="w-[80%] md:w-[100%] mt-5 md:mt-0 ">
            <img src={Chart} />
          </div>
        </div>
        <div className="w-[90%] m-auto md:m-0 md:w-4/5 mt-32 gap-40 block md:flex">
          <div className="w-[80%] md:w-[100%] ">
            <img src={Statistic} />
          </div>
          <div>
            <h1 className="font-bold text-[32px] md:text-[32px] text-white mt-20">
              Detailed Statistics
            </h1>
            <div className="font-normal text-[16px] md:text-base text-white mt-7">
              <p>View all mining related information in realtime, at any </p>
              <p> point at any location and decide which polls you want</p>
              <p> to mine in.</p>
            </div>
            <button className="bg-blue-600 text-white px-7 md:px-10 py-2 md:py-4 rounded-full mt-10">
              Learn More
            </button>
          </div>
        </div>
        <div className=" md:w-4/5 w-[90%] m-auto block md:flex mt-32 gap-20">
          <div>
            <div className="font-bold text-[32px] md:text-[32px] text-white mt-10 ">
              <h1>Grow your profit and track </h1>
              <h1> your investments</h1>
            </div>
            <div className="font-normal text-[16px] md:text-base text-white mt-7">
              <p>Use advanced analytical tools. Clear TradingView </p>
              <p> charts let you track current and historical profit</p>
              <p> investments.</p>
            </div>
            <button className="bg-blue-600 text-white px-7 md:px-10 py-2 md:py-4 rounded-full mt-10">
              Learn More
            </button>
          </div>
          <div className="w-[80%] md:w-[100%] mt-5 md:mt-0 ">
            <img src={Table} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;
