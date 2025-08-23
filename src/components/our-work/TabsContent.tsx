import { AnimatePresence, motion } from "framer-motion";

import imageThree from "../../assets/live-one.svg";
import imagefive from "../../assets/show-one.svg";
import imagefour from "../../assets/live-two.svg";
import imageone from "../../assets/podcast-one.svg";
import imagesix from "../../assets/show-two.svg";
import imagetwo from "../../assets/podcast-two.svg";

interface TabsContentProps {
  activeTab: "podcast" | "live performances" | "shows";
}

const TabsContent: React.FC<TabsContentProps> = ({ activeTab }) => {
  return (
    <div className="p-5 md:py-15">
      <AnimatePresence mode="wait">
        {activeTab === "podcast" && (
          <motion.div
            key="podcast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          >
            <div className="flex flex-col h-full">
              <img
                src={imageone}
                alt=""
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <div className="flex-1 text-white border-[0.5px] border-t-0 rounded-b-3xl border-[#ffffff]/28 p-5 md:px-10 space-y-2">
                <p className="font-bold text-lg tracking-tighter">
                  EchooRoom Podcast “TheLinkUP”
                </p>
                <p className="max-w-sm text-[14px] text-[#ffffff]/75 leading-5 tracking-tight">
                  Your command center for real-time clarity, aligned reporting,
                  and strategic proof.
                </p>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src={imagetwo}
                alt=""
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <div className="flex-1 text-white border-[0.5px] border-t-0 rounded-b-3xl border-[#ffffff]/28 p-5 md:px-10 space-y-2">
                <p className="font-bold text-lg tracking-tighter">
                  “Say My Piece Podcast"
                </p>
                <p className="max-w-sm text-[14px] text-[#ffffff]/75 leading-5 tracking-tight">
                  Your command center for real-time clarity, aligned reporting,
                  and strategic proof.
                </p>
              </div>
            </div>
          </motion.div>
        )}
        {activeTab === "live performances" && (
          <motion.div
            key="live performances"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          >
            <div className="flex flex-col h-full">
              <img
                src={imageThree}
                alt=""
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <div className="flex-1 text-white border-[0.5px] border-t-0 rounded-b-3xl border-[#ffffff]/28 p-5 md:px-10 space-y-2">
                <p className="font-bold text-lg tracking-tighter">
                  EchooRoom Live performance
                </p>
                <p className="max-w-2xl text-[14px] text-[#ffffff]/75 leading-5 tracking-tight">
                  The Echooroom live performance is a captivating show that
                  brings out the best of music, it gives the artist the
                  opportunity to show their creative capacity performing live
                  and it also gives the audience the opportunity to witness the
                  live performance capacity of their favorite music stars.
                </p>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src={imagefour}
                alt=""
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <div className="flex-1 text-white border-[0.5px] border-t-0 rounded-b-3xl border-[#ffffff]/28 p-5 md:px-10 space-y-2">
                <p className="font-bold text-lg tracking-tighter">
                  EchooRoom TopNotch Live performance
                </p>
                <p className="max-w-2xl text-[14px] text-[#ffffff]/75 leading-5 tracking-tight">
                  The EchooRoom live performance is a duration of 2 – 5 min
                  maximum, The EchooRoom TopNotch performance is a duration of
                  5–15 minutes maximum because it requires a combination of 3 or
                  more songs.
                </p>
              </div>
            </div>
          </motion.div>
        )}
        {activeTab === "shows" && (
          <motion.div
            key="shows"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          >
            <div className="flex flex-col h-full">
              <img
                src={imagefive}
                alt=""
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <div className="flex-1 text-white border-[0.5px] border-t-0 rounded-b-3xl border-[#ffffff]/28 p-5 md:px-10 space-y-2">
                <p className="font-bold text-lg tracking-tighter">
                  The Time show
                </p>
                <p className="max-w-sm text-[14px] text-[#ffffff]/75 leading-5 tracking-tight">
                  Get a fresh take on trending stories and hot, new topics, all
                  from a female perspective.
                </p>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                src={imagesix}
                alt=""
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <div className="flex-1 text-white border-[0.5px] border-t-0 rounded-b-3xl border-[#ffffff]/28 p-5 md:px-10 space-y-2">
                <p className="font-bold text-lg tracking-tighter">
                  Exchange Minds
                </p>
                <p className="max-w-sm text-[14px] text-[#ffffff]/75 leading-5 tracking-tight">
                  An avenue where guest debates their diverse opinion
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TabsContent;
