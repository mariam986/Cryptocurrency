import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-gradient-to-b from-first to-second py-40">
      <div className=" md:w-4/5  w-[90%] m-auto bg-blue-500 py-10 md:px-10  px-3 rounded-lg block md:flex gap-40">
        <div>
          <h1 className="font-bold text-[32px]  text-white ">
            Start mining now
          </h1>
          <p className="font-normal text-sm md:text-base text-white mt-5 ">
            Join now with CRAPPO to get the latest news
          </p>
          <p className="font-normal text-base text-white ">
            and start mining now
          </p>
        </div>
        <div className="md:flex block gap-20 mt-8">
          <div>
            <input
              placeholder="Enter your mail "
              className="border-0 bg-blue-500 border-b-2 py-2 md:w-[400px] w-100% border-blue-200 placeholder-white"
            ></input>
          </div>
          <div>
            <button className="bg-white text-black py-2 md:py-4 px-7 md:px-10 rounded-full font-medium text-lg mt-5 md:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
