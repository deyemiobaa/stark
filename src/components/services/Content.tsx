import FloatingCard from "../../ui/FloatingCard";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import image from "../../assets/sv-image2.svg";
const Content = () => {
  return (
    <div className="p-5 py-14 md:py-30 ">
      <div className="hidden lg:flex justify-between gap-5 xl:gap-10">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col   space-y-10 p-5">
            <p className="text-white text-3xl lg:text-4xl xl:text-[54px] text-left max-w-md font-light tracking-tighter">
              CONTENT CREATION AND PRODUCTION
            </p>
            <p className="text-white  max-w-sm 2xl:text-2xl font-light">
              EchooRoom is the creative and content production arm of Starks
              Creative Production Limited, a trailblazing creative agency in
              Nigeria. We possess a level of Creativity that involves deep we
              bring ideas to life through innovative storytelling, high quality
              production, and culturally relevant content that resonates deeply
              with audiences.
            </p>
          </div>
          <div></div>
        </div>
        <FloatingCard>
          <img src={image} alt="" />
        </FloatingCard>

        <div className="flex flex-col justify-between p-5 space-y-10">
          <div></div>
          <div className="space-y-5">
            <p className="text-white  max-w-sm 2xl:text-2xl font-light">
              Our approach to creativity is rooted in deep exploration ensuring
              that every outcome is not just visually striking, but
              strategically aligned. exploration for a suitable outcome.
            </p>
            <Link to="/contact">
              <button className="flex items-center gap-3 pl-4 p-[4px] cursor-pointer rounded-full bg-white text-[16px] font-[400] leading-[1.4] text-black  transition hover:scale-110 focus:scale-105 active:scale-105">
                <span>Start the Conversation</span>
                <img src={arrow} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/**Mobile section */}
      <div className="flex flex-col space-y-10 justify-center items-center lg:hidden">
        <p className="text-white text-center text-5xl lg:text-[54px]  max-w-md font-light tracking-tighter">
          CONTENT CREATION AND PRODUCTION
        </p>
        <div>
          <img src={image} alt="" />
        </div>
        <div className="text-center flex flex-col items-center space-y-5">
          <p className="text-white  lg:max-w-sm text-lg 2xl:text-2xl font-light">
            EchooRoom is the creative and content production arm of Starks
            Creative Production Limited, a trailblazing creative agency in
            Nigeria. We possess a level of Creativity that involves deep we
            bring ideas to life through innovative storytelling, high quality
            production, and culturally relevant content that resonates deeply
            with audiences.Our approach to creativity is rooted in deep
            exploration ensuring that every outcome is not just visually
            striking, but strategically aligned. exploration for a suitable
            outcome.
          </p>
          <Link to="/contact">
            <button className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:pl-4 sm:p-[4px] cursor-pointer rounded-full bg-white text-lg sm:text-[16px] font-[400] leading-[1.4] text-black transition hover:scale-110 focus:scale-105 active:scale-105">
              <span>Start the Conversation</span>
              <img src={arrow} alt="" className="w-5 h-5 sm:w-auto sm:h-auto" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
