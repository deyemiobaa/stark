"use client";

import { motion } from "framer-motion";
import scrollimage from "../../assets/scroll-image.svg";

const CreativityScroll = () => {
  const items = [
    { type: "text", content: "Creativity" },
    { type: "image", src: scrollimage },
    { type: "text", content: "Tech" },
    { type: "image", src: scrollimage },
  ];

  const loopItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden intro-bg py-20 relative">
      <motion.div
        className="flex gap-10 whitespace-nowrap items-center will-change-transform"
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
                className="text-white text-[25px] md:text-[60px] lg:text-[120px] xl:text-[120px] italic flex-shrink-0"
              >
                {item.content}
              </span>
            );
          }

          if (item.type === "image") {
            return (
              <div
                key={index}
                className="rounded-full overflow-hidden w-[150px] md:w-[200px] lg:w-[300px] h-24 flex-shrink-0"
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
  );
};

export default CreativityScroll;
