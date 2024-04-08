import { motion } from "framer-motion";

import about_img1 from "../assets/images/about-1.png";
import about_img2 from "../assets/images/about-2.png";

const About = () => {
  return (
    <section className="">
      <div className="px-0 lg:px-10 flex flex-col gap-10">
        <div className="overflow-hidden flex items-center gap-10 about_img_card">
          <img src={about_img1} alt="a vessel" className="hidden lg:block" />
          <motion.div
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="p-2"
          >
            <p className="text-sm md:text-lg text-justify">
              <span className="text-base lg:text-3xl font-bold">
                ALEKI OIL AND GAS LTD.
              </span>{" "}
              is a registered private limited liability company incorporated
              under the Nigeria Law, since 9th, August, 2018. and commenced
              business operations immediately. ALEKI OIL AND GAS LTD. is an
              indigenous diversified company that renders services in land and
              marine logistics and construction, engineering services and
              construction, manpower supply, procurement and materials
              distribution, environmental management and waste disposal to the
              oil and gas industry. ALEKI OIL AND GAS LTD. also provides
              specialized services in Engineering, procurement, construction,
              commissioning, start-up and maintenance for on-shore and off-shore
              Oil and gas projects, Flow line and pipeline construction,
              chemical Petrochemical plants, flow stations, terminals,
              industrial installations and major Civil works.
            </p>
            {/* <button>Read more</button> */}
          </motion.div>
        </div>

        <div className="overflow-hidden flex items-center gap-10 about_img_card">
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="p-2"
          >
            <p className="text-sm md:text-lg text-justify">
              Our unique selling point is our ability to harness local resources
              to provide quality Engineering service in the safest possible
              manner with minimal impact on the environment. We are able to
              achieve quick reaction time to our work. Our Operational sites are
              equipped with good communication facilities on 24-hour bases and
              our accommodation bases have adequate recreation facilities for
              the crew on-board The Company has numerous construction equipment
              for both land and marine operations at its disposal. Our health,
              safety and environment manual are available for verification and
              we intend to abide by the laid down procedures and plans therein
              stated, so also is our relationship with host communities where we
              shall be executing our projects.
            </p>
            {/* <button>Read more</button> */}
          </motion.div>

          <img src={about_img2} alt="a vessel" className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default About;
