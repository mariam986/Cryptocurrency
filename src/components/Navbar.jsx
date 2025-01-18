import React, { useState } from "react";
import crypto from "../assets/images/crypto.png";
import { FaGripLinesVertical } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-backgroundcolor ">
      <div className="md:pt-24 flex md:gap-80 md:pb-10 md:w-4/5 md:m-auto">
        <div className="flex md:gap-4 gap-2">
          <img className="ml-4 md:ml-0" src={crypto} />
          <h1 className="mt-3 text-lg font-semibold text-white">CRAPPO</h1>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none ml-48 text-blue-600 "
        >
          ☰
        </button>
        <div
          className={`md:flex md:gap-32 md:items-center ${
            isOpen ? "block" : "hidden"
          } z-10 fixed md:relative bg-blue-950 md:bg-backgroundcolor h-full transition-all duration-300 ease-in-out w-[70%] md:w-[80%]`}
        >
          <button onClick={() => setIsOpen(false)}>
            <FaXmark className="md:hidden mt-5 ml-40 text-white " />
          </button>
          <div className="md:flex md:gap-14 text-base font-normal text-white ">
            <h2 className="mt-5 md:mt-0 ml-3 md:ml-0">Products</h2>
            <h2 className="mt-5 md:mt-0 ml-3 md:ml-0">Features</h2>
            <h2 className="mt-5 md:mt-0 ml-3 md:ml-0">About</h2>
            <h2 className="mt-5 md:mt-0 ml-3 md:ml-0">Contact</h2>
          </div>
          <div className="md:flex md:gap-20 text-white font-medium text-base items-center	">
            <h1 className="mt-5 md:mt-0 ml-3 md:ml-0">Login</h1>
            <FaGripLinesVertical className="hidden md:block" />
            <button className="bg-blue-600 py-4 px-10 rounded-full relative mt-5 md:mt-0  ">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
