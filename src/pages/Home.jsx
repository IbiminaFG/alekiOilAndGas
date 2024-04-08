import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import slide6 from "../assets/images/slide6.png";

const Home = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>

      <div>
        <Hero />
      </div>

      <div>
        <Services />
      </div>

      <div className="p-3 lg:p-[100px]">
        <div className="flex flex-col max-md:justify-center md:flex-row gap-10 items-center">
          <div className="rounded-lg max-md:w-64 overflow-hidden">
            <img
              src={slide6}
              alt="about us diagram"
              className="h-full w-full"
            />
          </div>
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
            className="w-full"
          >
            <p className="w-auto text-justify">
              ALEKI OIL AND GAS LTD. is a Nigerian company established in 2018,
              specializing in providing a wide range of services to the oil and
              gas industry. Their offerings include land and marine logistics,
              construction, engineering, manpower supply, procurement, and
              environmental management. They excel in on-shore and off-shore
              projects, pipeline construction, chemical and petrochemical
              plants, and major civil works. The company prioritizes using local
              resources, minimizing environmental impact, and ensuring safety.
              They maintain 24-hour communication facilities, provide
              recreational amenities for their crew, and have a robust health,
              safety, and environment manual. ALEKI OIL AND GAS LTD. also values
              positive relationships with host communities.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full">
        <Companies />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
