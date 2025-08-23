import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import image from "../../assets/exp-image.svg";

const Move = () => {
  return (
    <div className=" p-5 py-14">
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between explore-bg rounded-2xl py-15">
        <div className="flex flex-col items-center justify-between p-10">
          <div></div>
          <div className="space-y-5 flex flex-col items-center  lg:items-start">
            <p className="text-white text-3xl md:text-[56px] text-center lg:text-left lg:max-w-2xl leading-[120%] tracking-tighter font-[400] ">
              Let's Move
            </p>
            <div className="flex  text-white ">
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

export default Move;
