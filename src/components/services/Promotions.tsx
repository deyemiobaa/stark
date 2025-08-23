import { Link } from "react-router-dom";
import image from "../../assets/sv-image3.svg";

const Promotions = () => {
  return (
    <div className="p-5 py-14 sv-sectiontwo-bg">
      <div className="flex flex-col items-center space-y-10">
        <div className="flex flex-col p-5  items-center justify-between gap-10 text-center  w-full">
          <p className="text-[36px] lg:text-[56px] text-white tracking-tighter leading-[120%]">
            PROMOTIONS & ACTIVATION
          </p>
          <p className="max-w-[752px] text-[#F1F1F1] text-[16px] lg:text-lg ">
            Through dynamic promotions and on-ground activations, we transform
            brand strategies into memorable experiences. Your brand is worthy of
            more than just attention; it requires action.
          </p>
        </div>
        <img src={image} alt="" />
        <p className="max-w-[752px] text-center text-[#F1F1F1] text-[16px] lg:text-lg ">
          We are experts at increasing engagement and achieving your business
          goals and objectives where it counts most.
        </p>
        <Link
          to="/contact"
          className="text-[#999999] text-base underline transition hover:scale-110 focus:scale-105 active:scale-105 "
        >
          Start the Conversation
        </Link>
      </div>
    </div>
  );
};

export default Promotions;
