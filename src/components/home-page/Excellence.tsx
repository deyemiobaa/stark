import FloatingCard from "../../ui/FloatingCard";
import frameone from "../../assets/frame-one.svg";
import framethree from "../../assets/frame-three.svg";
import frametwo from "../../assets/frame-two.svg";
const Excellence = () => {
  return (
    <div className="intro-bg py-5 md:py-14 md:h-[90vh] relative ">
      <FloatingCard className="absolute top-[20%] hidden md:block">
        <img src={frameone} alt="" className="w-[80%] lg:w-full" />
      </FloatingCard>
      <FloatingCard className="absolute top-[10%] right-[15%] hidden md:block">
        <img src={frametwo} alt="" className="w-[80%] lg:w-full" />
      </FloatingCard>
      <FloatingCard className="absolute bottom-5  left-[25%] hidden md:block">
        <img src={framethree} alt="" className="w-[80%] lg:w-full" />
      </FloatingCard>

      <div className="flex flex-col items-center justify-center h-full space-y-10 p-5">
        <p className="text-white text-3xl lg:text-[54px] text-center max-w-md font-light tracking-tighter">
          <span className="italic">Our Excellence</span> <br /> Speaks For
          Itself!
        </p>
        <p className="text-white text-center md:text-left md:ml-60 max-w-sm 2xl:text-2xl font-light">
          <p>We don’t follow trends; </p>
          We set them by staying dedicated to unmatched quality and ingenuity.
          Transforming ideas into breathtaking masterpieces is at the heart of
          what we do and as innovative thinkers, we craft content that goes
          beyond just visuals.
        </p>
      </div>
    </div>
  );
};

export default Excellence;
