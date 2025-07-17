import { AnimatePresence, motion } from "framer-motion";

import FloatingCard from "../ui/FloatingCard";
import logo from "../assets/landing-logo.svg";
import rectangleone from "../assets/rectangle-one.svg";
import rectanglethree from "../assets/rectangle-three.svg";
import rectangletwo from "../assets/rectangle-two.svg";
import smile from "../assets/smile.svg";
import { useState } from "react";

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.location.href = "/home";
  };

  return (
    <div className="intro-bg h-screen p-5 flex items-center justify-center relative">
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-[5%] left-0 shadow-lg"
            >
              <FloatingCard>
                <img
                  src={rectangleone}
                  alt="card1"
                  className="w-full h-full object-cover"
                />
              </FloatingCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-5 left-[25%] shadow-lg"
            >
              <FloatingCard>
                <img
                  src={rectangletwo}
                  alt="card2"
                  className="w-full h-full object-cover"
                />
              </FloatingCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-[20%] right-[15%] shadow-lg"
            >
              <FloatingCard>
                <img
                  src={rectanglethree}
                  alt="card3"
                  className="w-full h-full object-cover"
                />
              </FloatingCard>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-10 items-center">
        <img src={logo} alt="Logo" />

        <motion.div
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-3 border p-3 rounded-full cursor-pointer border-[#999999]"
        >
          <img src={smile} alt="emoji" />
          <p className="text-white">click to continue</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
