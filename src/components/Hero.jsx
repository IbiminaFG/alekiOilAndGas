import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";

import hero1 from "../assets/images/hero-background.png";
import hero2 from "../assets/images/slide1.png";
import hero3 from "../assets/images/slide2.png";
import portfolio from "../assets/ALEKIOILANDGAS2023.pdf";

const slideImages = [
  {
    url: hero1,
    caption: "We’re Here To Make A Long-term Difference..",
  },
  {
    url: hero2,
    caption: "We’re Here To Make A Long-term Difference..",
  },
  {
    url: hero3,
    caption: "We’re Here To Make A Long-term Difference..",
  },
];

const Portfolio = () => {
  return (
    <div className="">
      <a
        href={portfolio}
        target="_blank"
        rel="noreferrer"
        className="download_btn px-5 py-2 rounded-lg duration-300 text-white hover:bg-transparent"
      >
        Download Portfolio
      </a>
    </div>
  );
};

const Hero = () => {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "100svh",
  };

  return (
    <section>
      <Slide className="h-full">
        {slideImages.map((slideImage, index) => (
          <div key={index} className="h-full">
            <div
              className="h-full"
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <div className="flex justify-center items-center w-full h-full">
                <div className="w-full h-full flex flex-col gap-5 justify-center items-center we_are_card p-5">
                  <motion.span
                    initial={{
                      opacity: 0,
                      x: 200,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      once: "true",
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeIn",
                    }}
                    className="text-center text-3xl sm:text-[50px] text-white leading-none"
                  >
                    {slideImage.caption}
                  </motion.span>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 200,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeIn",
                    }}
                  >
                    <Portfolio />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
};

export default Hero;
