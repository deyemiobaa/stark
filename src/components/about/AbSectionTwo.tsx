import image from "../../assets/ab-image2.svg";

const AbSectionTwo = () => {
  return (
    <div className="p-5 flex items-center ab-sectiontwo-bg">
      <div className="space-y-10">
        <img src={image} alt="" />
        <div className="max-w-[682px] space-y-3">
          <p className="text-2xl md:text-[40px] text-[#F1F1F1] font-[400] leading-[128%] tracking-tight ">
            “Our craft goes beyond using the right tech We are nestled in
            delivering remarkable experiences that attest to a perfect blend of
            creativity and innovation.”
          </p>
          <p className="text-white leading-[144%] font-[18px]">
            Olusegun M.S Adeniran
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbSectionTwo;
