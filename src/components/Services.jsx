import React from "react";
import service1 from "../assets/images/service-1.png";
import service2 from "../assets/images/service-2.png";
import service3 from "../assets/images/service-3.png";
import engineering from "../assets/svgs/engineering.svg";
import vessel from "../assets/svgs/vessel.svg";
import construction from "../assets/svgs/construction.svg";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

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
      <div className="flex flex-wrap justify-center p-3 gap-14 md:p-10">
        {services.map((service, index) => (
          <Link key={index} to={service.route}>
            {" "}
            {/* Wrap service with Link component */}
            <div className="flex flex-col gap-5 items-center justify-center">
              <img
                src={service.image}
                alt={service.text}
                className="max-w-[245px]"
              />
              <div className="flex gap-3 items-center">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <p className="lg:text-[25px] font-semibold">{service.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-end gap-1 px-10 md:px-28">
        <h1 className="text-2xl font-light">Services</h1>
        <div className="h-1 w-64 bg-primary-blue rounded-md"></div>
      </div>

      <div className="px-3 md:px-28 py-10">
        <h2 className="text-5xl font-bold text-primary-blue">What We Do</h2>
        <p className="font-medium">
          We put in our best in all our services because you deserve the best
          always.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-10">
          {whatWeDo.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
