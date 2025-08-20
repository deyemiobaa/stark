import { Link } from "react-router-dom";
import NavBar from "../../ui/NavBar";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

const Hero = () => {
  const [hovered, setHovered] = useState<"first" | "second" | null>("first");

  return (
    <>
      {/* DESKTOP SECTION */}
      <div className="p-5 hidden md:block  space-y-4">
        <NavBar />
        <div className="home-bg rounded-xl p-5 flex flex-col space-y-5">
          <div className="h-full flex flex-col  justify-between ">
            <div className="text-[70px] lg:text-[92px] font-medium text-white leading-17 lg:leading-24 tracking-tighter">
              Crafting <br />
              <span className="ml-20 font-extralight italic">Excellence</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-10">
                <p className="text-white max-w-xs lg:text-[20px] leading-8 tracking-tight">
                  Every project is an opportunity to explore and push beyond the
                  boundaries of creative expression.
                </p>
                <div className="flex md:flex-row flex-col items-center gap-5 text-white ">
                  {hovered === "second" ? (
                    <Link
                      onMouseEnter={() => setHovered("first")}
                      onMouseLeave={() => setHovered(null)}
                      to="/work"
                    >
                      <button className="flex items-center gap-3  cursor-pointer pl-4 p-[4px] rounded-full border border-white font-[400] text-white transition hover:scale-110 focus:scale-110 active:scale-105">
                        <span className="leading-[1.4]">See Our Work</span>
                        <img src={arrow} alt="" />
                      </button>
                    </Link>
                  ) : (
                    <Link to="/work">
                      <button className="flex items-center gap-3 pl-4 p-[4px] cursor-pointer rounded-full bg-white text-[16px] font-[400] leading-[1.4] text-black  transition hover:scale-110 focus:scale-105 active:scale-105">
                        <span>See Our Work</span>
                        <img src={arrow} alt="" />
                      </button>
                    </Link>
                  )}

                  {hovered === "first" ? (
                    <Link
                      onMouseEnter={() => setHovered("second")}
                      onMouseLeave={() => setHovered(null)}
                      to="/services"
                    >
                      <button className="flex items-center gap-3 pl-4 p-[4px] cursor-pointer rounded-full border border-white font-[400] text-white transition hover:scale-110 focus:scale-110 active:scale-105">
                        <span className="leading-[1.4]">Explore Services</span>
                        <img src={arrow} alt="" />
                      </button>
                    </Link>
                  ) : (
                    <Link to="/services">
                      <button className="flex items-center gap-3 pl-4 p-[4px] cursor-pointer rounded-full bg-white text-[16px] font-[400] leading-[1.4] text-black  transition hover:scale-110 focus:scale-105 active:scale-105">
                        <span>Explore Services</span>
                        <img src={arrow} alt="" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>

              <div className="text-[70px] lg:text-[92px] font-medium text-white leading-17 lg:leading-24 tracking-tighter text-right">
                With A <br />
                <span className="font-extralight italic">Unique Touch</span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col space-y-8">
            <span className="border-2  border-white w-full"></span>
            <div className="space-y-2"></div>
          </div>
        </div>
      </div>

      {/* MOBILE SECTION */}
      <div className="md:hidden home-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="relative z-10">
          <NavBar />
          <div className="flex flex-col justify-center items-center h-[80vh] space-y-10 p-5">
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
            <div className="flex md:flex-row flex-col items-center gap-5 text-white ">
              <Link to="/work">
                <button className="text-black flex gap-2 items-center pl-4 p-[2px] rounded-full transition hover:scale-110 focus:scale-105 active:scale-105 bg-white cursor-pointer">
                  See our work
                  <img src={arrow} alt="" />
                </button>
              </Link>

              <Link
                to="/services"
                className="text-[#999999] font-light tracking-tighter cursor-pointer hover:underline text-[16px] "
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
