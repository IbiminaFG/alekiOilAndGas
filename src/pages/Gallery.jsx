import React from "react";
import Header from "../components/Header";

import Companies from "../components/Companies";
import Footer from "../components/Footer";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.png";
import slide6 from "../assets/images/slide6.png";

const Gallery = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>

      <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="rounded overflow-hidden sm:col-span-2 md:col-span-3">
            <img src={slide1} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden">
            <img src={slide4} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden">
            <img src={slide3} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden sm:row-span-2">
            <img src={slide6} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden">
            <img src={slide2} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden">
            <img src={slide5} alt="" className="w-full" />
          </div>
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

export default Gallery;
