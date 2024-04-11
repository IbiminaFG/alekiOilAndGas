import React, { useState } from "react";
import service1 from "../assets/images/service-1.png";
import service2 from "../assets/images/service-2.png";
import service3 from "../assets/images/service-3.png";
import engineering from "../assets/svgs/engineering.svg";
import vessel from "../assets/svgs/vessel.svg";
import construction from "../assets/svgs/construction.svg";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";

const services = [
  {
    image: service1,
    text: "Construction Services",
    route: "/construction",
  },
  {
    image: service2,
    text: "Oil and Gas Services",
    route: "/oil-and-gas",
  },
  {
    image: service3,
    text: "Marine Services",
    route: "/marine",
  },
];

const whatWeDo = [
  {
    icon: engineering,
    text: "We carry out civil and mechanical engineering works.",
  },
  {
    icon: vessel,
    text: "We are into provision and sale of vessel for marine logistics.",
  },
  {
    icon: construction,
    text: "Our services are in both land and marine logistic and construction.",
  },
];
const Services = () => {
  return (
    <section className="">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6 my-14 px-[100px]"> */}

      <div className="flex flex-wrap justify-center gap-6 my-14 px-5 sm:px-10 xl:px-[100px]">
        {services.map((service, index) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeIn",
              }}
              key={index}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={service.image}
                alt=""
                className="w-full max-w-[250px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{service.text}</h1>
                    {/* <Fade cascade damping={0.05}>
                      <p>See what we have for you!</p>
                    </Fade> */}
                    <div>
                      <Link
                        to={service.route}
                        className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300"
                      >
                        View
                      </Link>
                    </div>
                  </Slide>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-end gap-1 px-10 md:px-28">
        <h1 className="text-2xl font-light">Services</h1>
        <div className="h-1 w-64 bg-[#FF1400] rounded-md"></div>
      </div>

      <div className="px-3 md:px-28 py-10">
        <h2 className="text-4xl min-[1450px]:text-5xl text-[#FF1400] font-bold">
          What We Do
        </h2>
        <p className="font-medium">
          We put in our best in all our services because you deserve the best
          always.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-10">
          {whatWeDo.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeIn",
              }}
              key={index}
            >
              <ServiceCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
