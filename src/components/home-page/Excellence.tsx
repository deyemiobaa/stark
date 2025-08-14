import FloatingCard from "../../ui/FloatingCard";
import image from "../../assets/ex-image.svg";

const Excellence = () => {
  return (
    <div className=" p-5 py-14 ">
      <div className="hidden lg:flex justify-between gap-5 xl:gap-10">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col  mt-20 space-y-10 p-5">
            <p className="text-white text-3xl lg:text-4xl xl:text-[54px] text-left max-w-md font-light tracking-tighter">
              <span className="italic">Our Excellence</span> <br /> Speaks For
              Itself!
            </p>
            <p className="text-white  max-w-sm 2xl:text-2xl font-light">
              <p>We don’t follow trends; </p>
              We set them by staying dedicated to unmatched quality and
              ingenuity.
            </p>
          </div>
          <div></div>
        </div>
        <FloatingCard>
          <img src={image} alt="" />
        </FloatingCard>

        <div className="flex flex-col justify-between p-5 space-y-10">
          <div></div>
          <div className="">
            <p className="text-white  max-w-sm 2xl:text-2xl font-light">
              Transforming ideas into breathtaking masterpieces is at the heart
              of what we do and as innovative thinkers, we are content that goes
              beyond just visuals.
            </p>
          </div>
        </div>
      </div>

      {/**Mobile section */}
      <div className="flex flex-col space-y-10 justify-center items-center lg:hidden">
        <p className="text-white text-center text-5xl lg:text-[54px]  max-w-md font-light tracking-tighter">
          <span className="italic">Our Excellence</span> <br /> Speaks For
          Itself!
        </p>
        <div>
          <img src={image} alt="" />
        </div>
        <div className="text-center">
          <p className="text-white  max-w-sm text-lg 2xl:text-2xl font-light">
            <p>We don’t follow trends; </p>
            We set them by staying dedicated to unmatched quality and
            ingenuity.Transforming ideas into breathtaking masterpieces is at
            the heart of what we do and as innovative thinkers, we are content
            that goes beyond just visuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Excellence;
