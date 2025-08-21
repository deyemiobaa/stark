import firstImage from "../../assets/f-image1.svg";
import secondImage from "../../assets/f-image2.svg";
import thirdImage from "../../assets/f-image3.svg";
const Foundation = () => {
  return (
    <div className=" p-5 py-14 overflow-hidden">
      <div className="flex flex-col items-center md:flex-row gap-5 w-full justify-between">
        <div className="order-2 md:order-1">
          <img src={firstImage} alt="" />
        </div>
        <div className="order-1 md:order-2 ">
          <img src={secondImage} alt="" />
        </div>
        <div className="order-3 md:order-3">
          <img src={thirdImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Foundation;
