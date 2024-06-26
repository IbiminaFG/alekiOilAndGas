import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";

import hero1 from "../assets/images/gallery.jpg";
import hero3 from "../assets/images/gallery-12.jpg";
import hero2 from "../assets/images/construction-3.jpg";
import hero4 from "../assets/images/gallery-16.jpg";

const slideImages = [
  {
    url: hero2,
    caption: "We’re Here To Make A Long-term Difference..",
  },
  {
    url: hero3,
    caption: "We’re Here To Make A Long-term Difference..",
  },
  {
    url: hero1,
    caption: "We’re Here To Make A Long-term Difference..",
  },
  {
    url: hero4,
    caption: "We’re Here To Make A Long-term Difference..",
  },
];

const Hero = () => {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    // height: "100svh",
  };

  return (
    <section>
      <Slide className="h-full">
        {slideImages.map((slideImage, index) => (
          <div key={index} className="h-full">
            <div
              className="h-[300px] md:h-screen"
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
                  ></motion.div>
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
