import image from "../../assets/bts.svg";

const Scenes = () => {
  return (
    <div className="intro-bg p-5 md:py-20 lg:px-25 xl:px-40">
      <div className="flex flex-col-reverse justify-center gap-10 items-center lg:flex-row lg:justify-between ">
        <div className="flex flex-col text-white lg:max-w-lg xl:max-w-2xl space-y-8 lg:w-1/2">
          <p className="text-[30px] md:text-[44px] xl:text-[64px] md:leading-11 text-center lg:text-left font-medium xl:leading-16 tracking-tight">
            Behind <br />
            <span className="italic font-light">The Scenes!</span>
          </p>
          <p className="text-xl xl:text-2xl font-medium text-center lg:text-left">
            We believe in creating impact, one masterpiece at a time.
          </p>
          <p className="text-xl xl:text-2xl font-medium text-center lg:text-left">
            Our resolve to push the boundaries of creativity has led us on a
            path to explore endless possibilities. Redefining your experience is
            what matters most; taking you from ordinary to extraordinary.{" "}
          </p>
        </div>
        <div className="">
          <img src={image} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Scenes;
