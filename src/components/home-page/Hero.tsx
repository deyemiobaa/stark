import { AnimatePresence, motion } from "framer-motion";

import menu from "../../assets/menu.svg";
import stark from "../../assets/stark-logo.svg";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* DESKTOP SECTION */}
      <div className="p-5 hidden md:block bg-[#020B0D] space-y-4">
        <div className="home-bg rounded-xl p-5 flex flex-col justify-between">
          <div className="text-[70px] lg:text-[92px] font-medium text-white leading-17 lg:leading-24 tracking-tighter">
            Crafting <br />
            <span className="ml-20 font-extralight italic">Excellence</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white max-w-xs lg:text-[20px] leading-8 tracking-tight">
              Every project is an opportunity to explore and push beyond the
              boundaries of creative expression.
            </p>
            <div className="text-[70px] lg:text-[92px] font-medium text-white leading-17 lg:leading-24 tracking-tighter text-right">
              With A <br />
              <span className="font-extralight italic">Unique Touch</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center bg-[#1A1A1A] px-5 py-1 rounded-xl">
          <img src={stark} alt="logo" />
          <div className="flex text-white bg-[#252525] p-5 gap-20 rounded-2xl">
            <p className="cursor-pointer">home</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Services</p>
          </div>
          <button className="text-black p-4 rounded-2xl bg-white cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>

      {/* MOBILE SECTION */}
      <div className="md:hidden home-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-center bg-[#1A1A1A] p-5">
            <img src={stark} alt="logo" />
            <button
              className="text-black px-4 py-2 flex gap-2 rounded-2xl bg-white"
              onClick={HandleClick}
            >
              Menu
              <img src={menu} alt="menu icon" />
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-24 right-5 bg-[#252525] text-white space-y-3 font-bold w-1/2 p-5 rounded-2xl z-10"
              >
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">About</p>
                <p className="cursor-pointer">Services</p>
                <button className="text-black p-4 rounded-2xl bg-white cursor-pointer">
                  Contact Us
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col justify-center items-center h-[80vh] space-y-5 p-5">
            <div>
              <p className="text-[50px] font-medium text-white tracking-tighter text-center">
                Crafting Excellence <br />
                <span className="font-extralight italic">
                  {" "}
                  With A Unique Touch
                </span>
              </p>
            </div>
            <div>
              <p className="text-white text-center text-[20px] leading-8 tracking-tight">
                Every project is an opportunity to explore and push beyond the
                boundaries of creative expression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
