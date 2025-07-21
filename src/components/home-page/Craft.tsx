import vector from "../../assets/vector-two.svg";
const Craft = () => {
  return (
    <div className="intro-bg p-5 py-20 px-12 lg:px-10 xl:px-35 2xl:px-50">
      <div className=" space-y-10 md:space-y-20">
        <p className=" text-xl sm:text-[35px] md:text-[60px] lg:text-[90px] xl:text-[120px] md:leading-16 lg:leading-28 xl:leading-36 font-light tracking-tight text-white capitalize ">
          “OUR CRAFT GOES BEYOND USING THE RIGHT TECH...
        </p>
        <div>
          <div className="flex justify-between">
            <div></div>
            <div className="text-left lg:leading-10 text-white md:max-w-md lg:max-w-lg space-y-10 ml-32 ">
              <p className="text-[16px] lg:text-xl xl:text-2xl font-light max-w-sm">
                We are nestled in delivering remarkable experiences that attest
                to a perfect blend of creativity and innovation.”
              </p>
              <p className="text-[16px] lg:text-xl xl:text-2xl font-light ">
                Mr Stark, Founder
              </p>
            </div>
          </div>

          <div className="hidden md:block md:-mt-24 lg:-mt-44 w-[90%] lg:w-full">
            <img src={vector} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craft;
