"use client";

import { motion } from "framer-motion";
import scrollimage from "../../assets/red-arrow.svg";

const CreativityScroll = () => {
  const items = [
    { type: "text", content: "CREATIVITY" },
    { type: "image", src: scrollimage },
    { type: "text", content: "TECHNOLOGY" },
    { type: "image", src: scrollimage },
    { type: "text", content: "EXPLORATION" },
    { type: "image", src: scrollimage },
  ];

  const loopItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  return (
    <div className="w-full overflow-hidden pb-20 relative">
      <div className="border-white/15 border-t border-b py-3">
        <motion.div
          className="flex gap-10 whitespace-nowrap items-center  will-change-transform"
          style={{ x: 0 }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
        >
          {loopItems.map((item, index) => {
            if (item.type === "text") {
              return (
                <span
                  key={index}
                  className="text-white text-[16px] font-bold italic flex-shrink-0"
                >
                  {item.content}
                </span>
              );
            }

            if (item.type === "image") {
              return (
                <div
                  key={index}
                  className="rounded-full overflow-hidden  flex-shrink-0"
                >
                  <img
                    src={item.src}
                    alt="scroll visual"
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            }

            return null;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default CreativityScroll;
