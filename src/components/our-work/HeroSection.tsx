import NavBar from "../../ui/NavBar";

interface HeroSectionProps {
  activeTab: "podcast" | "live performances" | "shows";
  setActiveTab: (tab: "podcast" | "live performances" | "shows") => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <>
      <div className="md:p-5 space-y-4 ">
        <NavBar />
        <div className="ourwork-bg flex flex-col justify-center items-center relative">
            <div className="  text-white  py-14">
          <p className="text-[50px] md:text-[100px] lg:text-[150px] xl:text-[200px] leading-[120%] tracking-tighter font-[400] ">
            OUR WORK
          </p>
          </div>
          <div className="flex justify-center gap-6  absolute bottom-5 left-2">
            {["podcast", "live performances", "shows"].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab as "podcast" | "live performances" | "shows")
                }
                className={`px-4 py-2  rounded-full cursor-pointer text-sm font-bold ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        
      </div>  
        </div>
       
    </>
  );
};

export default HeroSection;
