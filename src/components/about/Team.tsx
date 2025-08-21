import FloatingCard from "../../ui/FloatingCard";
import image from "../../assets/team.svg";

const Team = () => {
  return (
    <div className="p-5 py-14 ">
      <div className="hidden lg:flex justify-between gap-5 xl:gap-10">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col  mt-20 space-y-10 p-5">
            <p className="text-white text-3xl lg:text-4xl xl:text-[54px] text-left max-w-md font-light tracking-tighter">
              Our Team
            </p>
            <p className="text-white  max-w-sm 2xl:text-2xl font-light">
              Behind every stunning visual interpretation is a team whose talent
              and exper se shine through. From concept to delivery, every
              project reflects a deep well of crea vity, skill, and innova on.
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
              But we don’t stop there; we amplify your content’s reach, connec
              ng it with the right audience through strategic storytelling and
              promo on, delivering results that exceed expecta ons.
            </p>
          </div>
        </div>
      </div>

      {/**Mobile section */}
      <div className="flex flex-col space-y-10 justify-center items-center lg:hidden">
        <p className="text-white text-center text-5xl lg:text-[54px]  max-w-md font-light tracking-tighter">
          Our Team
        </p>
        <div>
          <img src={image} alt="" />
        </div>
        <div className="text-center">
          <p className="text-white  lg:max-w-sm text-lg 2xl:text-2xl font-light">
            Behind every stunning visual interpretation is a team whose talent
            and exper se shine through. From concept to delivery, every project
            reflects a deep well of crea vity, skill, and innova on. But we
            don’t stop there; we amplify your content’s reach, connec ng it with
            the right audience through strategic storytelling and promo on,
            delivering results that exceed expecta ons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
