import logo from "../../assets/stark-logo.svg";

const Results = () => {
  return (
    <div className="p-5 py-14 md:py-30 flex items-center ab-sectiontwo-bg">
      <div className="space-y-5 p-5 flex flex-col items-center w-full">
        <p className=" text-xl md:text-2xl  lg:text-[40px] text-[#F1F1F1] text-center leading-[128%] tracking-tight max-w-[965px]">
          Every project reflects a promise of innova on and quality, brought to
          life by a team passionate about perfection. From incep on to execu on,
          we redefine possibili es using state-of-the-art equipment that bring
          your vision to life. We go above and beyond to ensure your content
          connects with the right audience, delivering outstanding results.
        </p>
        <div className="border-t-[0.6px] border-white/80 w-30  py-5 px-7">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Results;
