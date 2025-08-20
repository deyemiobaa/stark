import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import menu from "../assets/menu.svg";
import stark from "../assets/stark-logo.svg";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const HandleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/**DESKTOP */}
      <div className="hidden justify-between items-center px-5 md:flex   rounded-xl">
        <Link to="/home">
          <img src={stark} alt="logo" />
        </Link>
        <div className="flex items-center text-[16px]  font-bold leading-4 tracking-tight text-white  gap-5 xl:gap-15 rounded-2xl">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "underline cursor-pointer"
                : "hover:underline cursor-pointer"
            }
          >
            ABOUT US
          </NavLink>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive
                ? "underline cursor-pointer"
                : "hover:underline cursor-pointer"
            }
          >
            OUR WORK
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "underline cursor-pointer"
                : "hover:underline cursor-pointer"
            }
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "underline cursor-pointer"
                : "hover:underline cursor-pointer"
            }
          >
            BLOGS
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "underline cursor-pointer"
                : "hover:underline cursor-pointer"
            }
          >
            CONTACT US
          </NavLink>
          <button className="text-black px-3 py-2 rounded-full bg-white cursor-pointer transition hover:scale-[1.1] focus:scale-[1.1] active:scale-105">
            see our work
          </button>
        </div>
      </div>

      {/**MOBILE */}
      <div className="md:hidden relative">
        <div className="flex justify-between items-center bg-[#1A1A1A] p-5">
          <Link to="/home">
            <img src={stark} alt="logo" />
          </Link>
          <button
            className="text-black px-4 py-2 flex gap-2 rounded-2xl cursor-pointer bg-white"
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
              <div className="flex flex-col space-y-5">
                <Link to="/about" className="hover:underline cursor-pointer">
                  ABOUT US
                </Link>
                <Link to="/work" className="hover:underline cursor-pointer">
                  OUR WORK
                </Link>
                <Link to="/services" className="hover:underline cursor-pointer">
                  SERVICES
                </Link>
                <Link to="/blogs" className="hover:underline cursor-pointer">
                  BLOGS
                </Link>
                <Link to="/contact" className="hover:underline cursor-pointer">
                  CONTACT US
                </Link>

                <button className="text-black px-3 py-2 rounded-full bg-white cursor-pointer transition hover:scale-[1.1] focus:scale-[1.1] active:scale-105">
                  see our work
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavBar;
