import React from "react";
import crypto from "../assets/images/crypto.png";
import Visa from "../assets/images/Visa.png";
import mastercard from "../assets/images/mastercard.png";
import bit from "../assets/images/bit.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-backgroundcolor pb-10">
      <div className="w-4/5 m-auto block md:flex justify-between">
        <div className="flex gap-3">
          <img className="w-[10%] md:w-[50%]  h-10" src={crypto} />
          <p className="mt-2 text-white text-lg font-semibold">CRAPPO</p>
        </div>
        <div>
          <h1 className=" text-white text-lg font-semibold md:mt-0 mt-10">
            Quick Link
          </h1>
          <div className="text-base font-normal text-white mt-5">
            <p>Home</p>
            <p className="mt-2">Products</p>
            <p className="mt-2">About</p>
            <p className="mt-2">Features</p>
            <p className="mt-2">Contact</p>
          </div>
        </div>
        <div>
          <h1 className=" text-white text-lg font-semibold  md:mt-0 mt-10">
            Resources
          </h1>
          <div className="text-base font-normal text-white mt-5">
            <p>Download Whitepapper</p>
            <p className="mt-2">Smart Token</p>
            <p className="mt-2">Blockchain Explorer</p>
            <p className="mt-2">Crypto API</p>
            <p className="mt-2">Interest</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className=" text-white text-lg font-semibold  md:mt-0 mt-10">
              {" "}
              We accept following
            </h1>
            <h1 className=" text-white text-lg font-semibold">
              payment systems
            </h1>
          </div>
          <div className="flex gap-5 mt-10 ">
            <img className="w-[20%] md:w-[30%] " src={Visa} />
            <img className="w-[20%] md:w-[30%]  " src={mastercard} />
            <img className="w-[20%] md:w-[30%] " src={bit} />
          </div>
        </div>
      </div>
      <footer className=" w-4/5 m-auto md:flex block md:justify-between mt-32 ">
        <div className="text-white ">
          &copy; 2021 CRAPPO. All rights reserved.
        </div>
        <div className="flex w-[80%] md:w-[40%]  md:gap-7 mt-10 md:mt-0 ">
          <FaFacebook className="text-white w-[50%]" />
          <FaInstagram className="text-white w-[50%]" />
          <FaYoutube className="text-white w-[50%]" />
          <FaTwitter className="text-white w-[50%]" />
          <FaLinkedin className="text-white w-[50%]" />
        </div>
      </footer>
    </section>
  );
};

export default Footer;
