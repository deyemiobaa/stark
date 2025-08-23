import { Link } from "react-router-dom";
import firstImage from "../../assets/f-image1.svg";
import thirdImage from "../../assets/f-image3.svg";

const Product = () => {
  return (
    <div className="p-5 py-14 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full gap-5 items-center md:items-stretch justify-center">
        <div className="order-2 md:order-1 aspect-square max-w-[438px] w-full   rounded-xl">
          <img
            src={firstImage}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="order-1 md:order-2 aspect-square max-w-[438px] w-full flex items-center justify-center product-bg rounded-xl">
          <div className="flex flex-col items-center justify-center p-4 md:p-8 space-y-4 text-center">
            <h1 className="text-white text-3xl md:text-4xl font-semibold leading-snug tracking-tighter">
              PRODUCT COMMERCIAL
            </h1>
            <p className="text-[#F1F1F1] text-base leading-relaxed tracking-tight">
              We work with a wide range of products for both commercial and
              consumer-focused campaigns depending on the goals of each campaign
              or brief.
            </p>
            <Link
              to="/contact"
              className="text-[#999999] text-base underline transition hover:scale-110 focus:scale-105 active:scale-105 "
            >
              Start the Conversation
            </Link>
          </div>
        </div>

        <div className="order-3 md:order-3 aspect-square max-w-[438px] w-full  rounded-xl">
          <img
            src={thirdImage}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
