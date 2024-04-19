import React from "react";
import Header from "../components/Header";

import Companies from "../components/Companies";
import Footer from "../components/Footer";
import slide1 from "../assets/images/gallery-1.jpg";
import slide2 from "../assets/images/gallery-6.jpg";
import slide3 from "../assets/images/gallery-8.jpg";
import slide4 from "../assets/images/gallery-9.jpg";
import slide5 from "../assets/images/gallery-11.jpg";
import slide6 from "../assets/images/gallery-5.jpg";
import slide7 from "../assets/images/gallery-2.jpg";
import slide8 from "../assets/images/gallery-4.jpg";
import slide9 from "../assets/images/gallery-7.jpg";
import slide10 from "../assets/images/gallery-13.jpg";
import slide11 from "../assets/images/gallery-14.jpg";
import slide12 from "../assets/images/gallery-15.jpg";

const Gallery = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>

      <div className="p-5 md:p-[100px]">
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
            <img src={slide5} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden">
            <img src={slide2} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden">
            <img src={slide7} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden">
            <img src={slide8} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden">
            <img src={slide9} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden">
            <img src={slide10} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden">
            <img src={slide11} alt="" className="w-full" />
          </div>

          <div className="rounded overflow-hidden">
            <img src={slide12} alt="" className="w-full" />
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
