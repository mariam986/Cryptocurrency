import React from "react";
import Icon from "../assets/images/Icon.png";
import Base from "../assets/images/Base.png";
import world from "../assets/images/world.png";

const Body = () => {
  return (
    <section className="bg-backgroundcolor ">
      <div className=" md:w-4/5 w-[90%] m-auto md:flex block justify-between md:pt-60 pt-20 ">
        <div className="flex items-center md:gap-10 gap-5">
          <img src={Icon} />
          <div>
            <h1 className="font-bold md:text-[40px] text-[30px]  text-white">
              $30B
            </h1>
            <p className="md:text-base text-sm	 font-normal text-white">
              Digital Currency Exchanged
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 md:gap-10 mt-5 md:mt-0">
          <img src={Base} />
          <div>
            <h1 className="font-bold md:text-[40px] text-[30px] text-white">
              10M+
            </h1>
            <p className="md:text-base text-sm	 font-normal text-white">
              Trusted Wallets Investors
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 md:gap-10 md:mt-0 mt-5">
          <img src={world} />
          <div>
            <h1 className="font-bold md:text-[40px] text-[30px] text-white">
              195
            </h1>
            <p className="md:text-base text-sm	 font-normal text-white">
              Countries Supported
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
