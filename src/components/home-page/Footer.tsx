import imageOne from "../../assets/stark.svg";
import imageTwo from "../../assets/footerBg.svg";
const Footer = () => {
  return (
    <div className="bg-[#0C0C0C] py-10 md:pt-20 pb-5 px-10 space-y-10">
      <div className="flex flex-col  md:flex-row  justify-between items-center">
        <div className="flex gap-10 text-[#999999] leading-7 font-light text-xl lg:text-2xl">
          <p className="cursor-pointer">Services</p>
          <p className="cursor-pointer">Content</p>
          <p className="cursor-pointer">Blog</p>
          <p className="cursor-pointer">Company</p>
        </div>
        <div className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-light leading-16">
          <p>hello@Stark.com</p>
        </div>
      </div>
      <div className="border-t border-[#525252] py-10 flex text-white gap-5 md:gap-20 text-[16px] lg:text-[20px]">
        <div className="flex flex-col gap-1 ">
          <p>Raleigh</p>
          <p className="font-light text-[#999999]">
            125 N. Harrington StreetRaleigh, <br />
            NC 27603919.833.6413
          </p>
        </div>
        <div className="flex flex-col gap-1 ">
          <p>Charlotte</p>
          <p className="font-light text-[#999999]">
            220 East Peterson DriveCharlotte, <br />
            NC 28217704.333.7272
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-20 items-center    ">
        <div>
          {" "}
          <img
            src={imageOne}
            alt=""
            className="w-[150px] md:w-[300px] xl:w-[587px]"
          />
        </div>
        <div className="flex items-center gap-10">
          <p className="text-[#999999] text-xl md:text-2xl">2025</p>
          <img
            src={imageTwo}
            alt=""
            className="w-[80px] md:w-[100px] xl:w-[152px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
