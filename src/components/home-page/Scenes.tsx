import scene1 from "../../assets/scene1.svg";
import scene2 from "../../assets/scene2.svg";
import scene3 from "../../assets/scene3.svg";
import scene4 from "../../assets/scene4.svg";
import scene5 from "../../assets/scene5.svg";
import scene6 from "../../assets/scene6.svg";
import { useState } from "react";

type ImgItem = { src: string; mt: string };

const images: ImgItem[] = [
  { src: scene1, mt: "mt-0 sm:mt-1 md:mt-2 lg:mt-4 xl:mt-8" },
  { src: scene2, mt: "mt-1 sm:mt-2 md:mt-4 lg:mt-6 xl:mt-20" },
  { src: scene3, mt: "mt-1 sm:mt-2 md:mt-3 lg:mt-6 xl:mt-32" },
  { src: scene4, mt: "mt-2 sm:mt-3 md:mt-5 lg:mt-8 xl:mt-0" },
  { src: scene5, mt: "mt-1 sm:mt-2 md:mt-4 lg:mt-6 xl:mt-20" },
  { src: scene6, mt: "mt-2 sm:mt-3 md:mt-5 lg:mt-8 xl:mt-0" },
];

export default function Scenes() {
  const [hovered, setHovered] = useState<number | null>(null);

  const getFlexGrow = (index: number) => {
    if (hovered === null) return 1;
    if (index === hovered) return 2;
    return (images.length - 2) / (images.length - 1);
  };

  return (
    <section className="scenes-bg px-4 py-10 md:py-20 lg:px-25 xl:px-40">
      <div className="flex flex-col items-center space-y-6 md:space-y-10">
        <header className="text-white text-center space-y-2">
          <h1 className="text-3xl lg:text-4xl xl:text-[56px] font-normal tracking-tighter">
            “BEHIND THE SCENES”
          </h1>
          <p className="text-lg 2xl:text-2xl text-[#F1F1F1] font-normal">
            We believe in creating impact, one masterpiece at a time.
          </p>
        </header>

        <div
          className="flex items-center gap-2 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] overflow-hidden"
          onMouseLeave={() => setHovered(null)}
        >
          {images.map(({ src, mt }, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center bg-black ${mt}`}
              style={{
                flexGrow: getFlexGrow(index),
                flexBasis: 0,
                transition: "flex-grow 0.45s ease",
                overflow: "hidden",
              }}
              onMouseEnter={() => setHovered(index)}
            >
              <img
                src={src}
                alt={`scene-${index}`}
                className="w-full h-full object-contain transition-all duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-white text-center max-w-2xl">
          <p className="text-lg 2xl:text-2xl font-normal leading-[132%]">
            Our resolve to push the boundaries of creativity has led us on a
            path to explore endless possibilities. Redefining your experience is
            what matters most; taking you from ordinary to extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
}
