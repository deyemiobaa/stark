import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import image from "../../assets/exp-image.svg";
import { useState } from "react";
const Exploration = () => {
  const [hovered, setHovered] = useState<"first" | "second" | null>("first");
  return (
    <div className=" p-5 py-14">
      <div className="flex justify-between explore-bg rounded-2xl py-15">
        <div className="flex flex-col items-center justify-between p-10">
          <div></div>
          <div className="space-y-5 flex flex-col items-center lg:items-start">
            <p className="text-white text-3xl md:text-[56px] text-center lg:text-left lg:max-w-2xl leading-[120%] tracking-tighter font-[400] ">
              Join us in the exploration of creativity and innovation
            </p>
            <div className="flex md:flex-row flex-col items-center gap-5 text-white ">
              {hovered === "second" ? (
                <Link
                  onMouseEnter={() => setHovered("first")}
                  onMouseLeave={() => setHovered(null)}
                  to="/work"
                >
                  <button className="flex items-center gap-2 sm:gap-3 cursor-pointer px-4 py-2 sm:pl-4 sm:p-[4px] rounded-full border border-white font-[400] text-lg sm:text-[16px] text-white transition hover:scale-110 focus:scale-110 active:scale-105">
                    <span className="leading-[1.4]">
                      See our work in action
                    </span>
                    <img
                      src={arrow}
                      alt=""
                      className="w-5 h-5 sm:w-auto sm:h-auto"
                    />
                  </button>
                </Link>
              ) : (
                <Link to="/work">
                  <button className="flex items-center gap-2 sm:gap-3 cursor-pointer px-4 py-2 sm:pl-4 sm:p-[4px] rounded-full bg-white text-lg sm:text-[16px] font-[400] leading-[1.4] text-black transition hover:scale-110 focus:scale-105 active:scale-105">
                    <span>See our work in action</span>
                    <img
                      src={arrow}
                      alt=""
                      className="w-5 h-5 sm:w-auto sm:h-auto"
                    />
                  </button>
                </Link>
              )}

              {hovered === "first" ? (
                <Link
                  onMouseEnter={() => setHovered("second")}
                  onMouseLeave={() => setHovered(null)}
                  to="/services"
                >
                  <button className="flex items-center gap-2 sm:gap-3 cursor-pointer px-4 py-2 sm:pl-4 sm:p-[4px] rounded-full border border-white font-[400] text-lg sm:text-[16px] text-white transition hover:scale-110 focus:scale-110 active:scale-105">
                    <span className="leading-[1.4]">Talk to the team</span>
                    <img
                      src={arrow}
                      alt=""
                      className="w-5 h-5 sm:w-auto sm:h-auto"
                    />
                  </button>
                </Link>
              ) : (
                <Link to="/services">
                  <button className="flex items-center gap-2 sm:gap-3 cursor-pointer px-4 py-2 sm:pl-4 sm:p-[4px] rounded-full bg-white text-lg sm:text-[16px] font-[400] leading-[1.4] text-black transition hover:scale-110 focus:scale-105 active:scale-105">
                    <span>Talk to the team</span>
                    <img
                      src={arrow}
                      alt=""
                      className="w-5 h-5 sm:w-auto sm:h-auto"
                    />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Exploration;
