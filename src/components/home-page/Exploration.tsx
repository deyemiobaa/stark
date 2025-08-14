import arrow from "../../assets/arrow.svg";
import image from "../../assets/exp-image.svg";
const Exploration = () => {
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
              <button className="text-black flex  gap-2 items-center pl-4 p-[2px] rounded-full bg-white cursor-pointer">
                See our work in action
                <img src={arrow} alt="" />
              </button>
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] ">
                {" "}
                <p className=" font-light tracking-tighter text-[16px] ">
                  Talk to the team
                </p>
              </span>
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
