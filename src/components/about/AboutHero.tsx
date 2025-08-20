import { Link } from "react-router-dom";
import NavBar from "../../ui/NavBar";
import arrow from "../../assets/arrow.svg";

const AboutHero = () => {
  return (
    <>
      {/* DESKTOP SECTION */}
      <div className="p-5 hidden md:block  space-y-4">
        <NavBar />
        <div className="about-bg rounded-xl p-5 flex flex-col justify-between">
          <div></div>
          <div className="flex flex-col space-y-10">
            <div className="max-w-2xl space-y-5">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] font-[400] tracking-tighter  text-[16px] ">
                Who we are
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#8B8B8B] to-[#ffffff] font-[400] leading-16 tracking-tighter  text-[68px] ">
                The Beacon <br /> Driving Creativity Across Every Spectrum.
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
      <div className="md:hidden about-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="relative z-10">
          <NavBar />
          <div className="flex flex-col justify-center items-center h-[80vh] space-y-10 p-5">
            <div>
              <p className="text-[45px] font-[400] leading-12  text-white tracking-tighter text-center">
                <span className="font-extralight tracking-normal text-[28px]">
                  {" "}
                  Who We are
                </span>
                <br />
                The Beacon Driving Creativity Across Every Spectrum.
              </p>
            </div>
            <div>
              <p className="text-white text-center font-[400] text-[20px] leading-8 tracking-tight">
                We are the innovator, entertainer, trailblazer, and beacon that
                propels creativity in all fields. We don't merely envision
                greatness; we truly accomplish it. Our projects are innovative
                and exceptional and we create experiences that will be remember.
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-5 text-white ">
              <button className="text-black flex gap-2 items-center pl-4 p-[2px] rounded-full bg-white cursor-pointer">
                See our work
                <img src={arrow} alt="" />
              </button>

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

export default AboutHero;
