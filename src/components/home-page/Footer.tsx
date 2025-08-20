import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import imageOne from "../../assets/stark.svg";
import instagram from "../../assets/instagram.svg";
import linkedln from "../../assets/linkedln.svg";
const Footer = () => {
  return (
    <div className=" py-10 md:pt-20 pb-5  flex flex-col px-5 lg:px-10 space-y-8">
      <div className="flex flex-col  md:flex-row  justify-between items-center">
        <div className="flex gap-5 lg:gap-10 text-[#999999] leading-7 font-light text-[14px] md:text-[16px] lg:text-[20px] xl:text-2xl">
          <Link to="/about" className="hover:underline cursor-pointer">
            About
          </Link>
          <Link to="/work" className="hover:underline cursor-pointer">
            Our Work
          </Link>
          <Link to="/services" className="hover:underline cursor-pointer">
            Our services
          </Link>
          <Link to="/blogs" className="hover:underline cursor-pointer">
            Privacy Policy
          </Link>
        </div>
        <div className="text-white text-2xl lg:text-[32px] font-light leading-16">
          <p>starkcreative@starkscpl.com</p>
        </div>
      </div>
      <div className="border-t border-[#525252] py-10 flex text-white gap-5 md:gap-20 text-[16px] lg:text-[20px]">
        <div className="flex flex-col gap-1 ">
          <p>Contact Us</p>
          <p className="font-light text-[#999999]">
            starkscreative@starkscpl.com
            <br />
            echooroom@starksltd.com
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-2 lg:gap-20 overflow-hidden  ">
        <div>
          {" "}
          <img
            src={imageOne}
            alt=""
            className="w-[150px] md:w-[300px] xl:w-[587px]"
          />
        </div>
        <div className="flex flex-col justify-around">
          <div></div>
          <div className="flex items-center  gap-5">
            <p className="text-[#999999] text-xl md:text-2xl">2025</p>
            <img src={linkedln} alt="" className="cursor-pointer" />
            <img src={facebook} alt="" className="cursor-pointer" />
            <img src={instagram} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
