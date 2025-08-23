import { Link } from "react-router-dom";
import NavBar from "../../ui/NavBar";
import arrow from "../../assets/arrow.svg";
const ServicesHero = () => {
  return (
    <>
      {/* DESKTOP SECTION */}
      <div className="p-5 hidden md:block  space-y-4">
        <NavBar />
        <div className="services-bg rounded-xl p-5 flex flex-col justify-between">
          <div></div>
          <div className="flex flex-col space-y-10">
            <div className="max-w-2xl space-y-5">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] font-[400] tracking-tighter  text-[16px] ">
                Services
              </p>
              <p className="text-[#F1F1F1] leading-16 tracking-tighter  text-[68px] ">
                Our excellence
                <br /> Speaks for itself.
              </p>
              <p className=" text-[#F1F1F1] tracking-tight text-lg font-bold leading-[144%]">
                Every project reflects a promise of innovation and Creativity
              </p>
              <p className="max-w-[479px] text-[#F1F1F1] text-lg  leading-[144%]">
                Transforming ideas into breathtaking masterpieces is at the
                heart of what we do and as innova ve thinkers, we craft content
                that goes beyond just visuals.{" "}
              </p>
            </div>
            <span className="border-2  border-white w-full"></span>
            <div className="flex justify-between">
              <p></p>
              <p className="max-w-[479px] text-[#F1F1F1] text-lg font-[400] leading-[144%]">
                We are the innovator, entertainer, trailblazer, and beacon that
                propels creativity in all fields. We don't merely envision
                greatness; we truly accomplish it. Our projects are innovative
                and exceptional and we create experiences that will be remember.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SECTION */}
      <div className="md:hidden services-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="relative z-10">
          <NavBar />
          <div className="flex flex-col justify-center items-center h-[80vh] space-y-10 p-5">
            <div>
              <p className="text-[45px] font-[400] leading-12  text-white tracking-tighter text-center">
                <span className="font-extralight tracking-normal text-[28px]">
                  {" "}
                  Services
                </span>
                <br />
                Our excellence <br /> speaks for itself
              </p>
            </div>
            <div className="space-y-5">
              <p className=" text-[#F1F1F1] text-center tracking-tight text-lg font-bold leading-[144%]">
                Every project reflects a promise of innovation and Creativity
              </p>
              <p className="text-white text-center font-[400] text-[20px] leading-8 tracking-tight">
                Transforming ideas into breathtaking masterpieces is at the
                heart of what we do and as innova ve thinkers, we craft content
                that goes beyond just visuals.
              </p>
              <p className="text-white text-center font-[400] text-[20px] leading-8 tracking-tight">
                We believe in creating meaningful impact, one masterpiece at a
                me. Our unwavering drive to push the boundaries of creativity
                has set us on a path of endless exploration, where innova on
                knows no limits.
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-5 text-white ">
              <Link to="/work">
                <button className="text-black flex items-center gap-2 sm:gap-3 px-4 py-2 sm:pl-4 sm:p-[2px] rounded-full bg-white cursor-pointer text-lg sm:text-[16px] font-[400] leading-[1.4] transition hover:scale-110 focus:scale-105 active:scale-105">
                  See our work
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
      </div>
    </>
  );
};

export default ServicesHero;
