import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import image from "../../assets/sv-image1.svg";
const Help = () => {
  return (
    <div className="p-5 py-14 sv-sectiontwo-bg">
      <div className="flex flex-col items-center space-y-10">
        <div className="flex flex-col p-5 md:flex-row items-center justify-between gap-10 text-center md:text-left w-full">
          <p className="text-[36px] lg:text-[56px] text-white tracking-tighter leading-[120%]">
            WHAT WE <br />
            HELP YOU DO
          </p>
          <p className="max-w-[445px] text-[#F1F1F1] text-[16px] lg:text-lg ">
            We are a vibrant and adaptable creative media company committed to
            realizing your idea by creating memorable experiences specifically
            tailored for your brand and project, from captivating visual
            narratives to engrossing audioscapes.
          </p>
        </div>
        <img src={image} alt="" />
        <p className="max-w-[626px] text-center text-[#F1F1F1] text-[16px] lg:text-lg ">
          Our unparalleled experience in video creation is well complemented by
          our creative services. Regardless of the work, we provide top-notch
          quality across all spectrum. With a wide range of services spanning
          many media and platforms, we offer customized concepts that satisfy
          every aspect of your imaginative vision
        </p>
        <Link to="/contact">
          <button className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:pl-4 sm:p-[4px] cursor-pointer rounded-full bg-white text-lg sm:text-[16px] font-[400] leading-[1.4] text-black transition hover:scale-110 focus:scale-105 active:scale-105">
            <span>Start the Conversation</span>
            <img src={arrow} alt="" className="w-5 h-5 sm:w-auto sm:h-auto" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Help;
