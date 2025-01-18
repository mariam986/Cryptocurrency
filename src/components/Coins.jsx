import React from "react";
import bitcoins from "../assets/images/bitcoins.png";
import ethereum from "../assets/images/ethereum.png";
import litecoin from "../assets/images/litecoin.png";
import Arrowright from "../assets/images/Arrowright.png";
import right from "../assets/images/right.png";

const Coins = () => {
  return (
    <section className="bg-gray-100 pt-32 pb-32">
      <div className=" w-[90%] md:w-4/5 m-auto ">
        <div className="text-center font-bold text-[30px] md:text-[40px] w-[90%] md:w-[100%] m-auto ">
          <h1>Trade securely and manage the high</h1>
          <h1>growth cryptocurrencies.</h1>
        </div>
        <div className="block md:flex justify-between mt-16 ">
          <div className="relative bg-white shadow-lg rounded-xl w-[70%] m-auto md:w-[30%] p-3 md:p-5 text-center group hover:bg-blue-950 h-96 hover:text-white">
            <img className="ml-20 md:ml-32" src={bitcoins} />
            <div className="flex justify-center items-center mt-10 gap-3">
              <h1 className="font-bold text-[32px] ">Bitcoin</h1>
              <p className="text-lg font-medium">BTC</p>
            </div>
            <div className="mt-5 font-normal text-[13px] md:text-base">
              <p>Digital currency in which a record of </p>
              <p> transactions is maintained.</p>
            </div>
            <div>
              <img
                className="absolute right-[100px] md:right-40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 mt-5"
                src={Arrowright}
              />
            </div>
            <div className="relative bg-blue-600 text-white flex gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-5  py-2 md:py-4 px-10 md:px-10  rounded-full w-[80%] md:w-[50%] ml-7 md:ml-20">
              <button className="">start mining</button>
              <img className="absolute right-2 top-1 md:top-3" src={right} />
            </div>
          </div>
          <div className="relative bg-white shadow-lg rounded-xl w-[70%] m-auto md:w-[30%] p-5 text-center group hover:bg-blue-950 h-96 hover:text-white mt-5 md:mt-0">
            <img className="ml-20 md:ml-32" src={ethereum} />
            <div className="flex justify-center items-center mt-10 gap-3">
              <h1 className="font-bold text-[32px] ">Ethereum</h1>
              <p className="text-lg font-medium">ETH</p>
            </div>
            <div className="mt-5 font-normal text-[13px] md:text-base">
              <p> Blockchain technology to create and run </p>
              <p> decentralized digital applications.</p>
            </div>
            <div>
              <img
                className="absolute right-[100px] md:right-40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 mt-5"
                src={Arrowright}
              />
            </div>
            <div className="relative bg-blue-600 text-white flex gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-5 py-2 md:py-4 px-10 md:px-10 rounded-full w-[80%] md:w-[50%] ml-7 md:ml-20">
              <button className="">start mining</button>
              <img className="absolute right-2 top-1 md:top-3" src={right} />
            </div>
          </div>
          <div className="relative bg-white shadow-lg rounded-xl w-[70%] m-auto md:w-[30%] p-5 text-center group hover:bg-blue-950 h-96 hover:text-white  mt-5 md:mt-0">
            <img className="ml-20 md:ml-32" src={litecoin} />
            <div className="flex justify-center items-center mt-10 gap-3">
              <h1 className="font-bold text-[32px] ">Litecoin</h1>
              <p className="text-lg font-medium">LTC</p>
            </div>
            <div className="mt-5 font-normal text-[13px] md:text-base">
              <p>Cryptocurrency that enables instant </p>
              <p> payments to anyone in the world.</p>
            </div>
            <div>
              <img
                className="absolute right-[100px] md:right-40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 mt-5"
                src={Arrowright}
              />
            </div>
            <div className="relative bg-blue-600 text-white flex gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-5 py-2 md:py-4 px-10 md:px-10  rounded-full w-[80%] md:w-[50%] ml-7 md:ml-20">
              <button className="">start mining</button>
              <img className="absolute right-2 top-1 md:top-3" src={right} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coins;
