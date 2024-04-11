import React, { useEffect, useState } from "react";
import logo1 from "../assets/svgs/logo-1.svg";
import logo2 from "../assets/svgs/logo-2.svg";
import logo3 from "../assets/svgs/logo-3.svg";
import logo4 from "../assets/svgs/logo-4.svg";
import logo5 from "../assets/svgs/logo-5.svg";
import logo6 from "../assets/svgs/logo-6.svg";
import logo7 from "../assets/svgs/logo-7.svg";
import logo8 from "../assets/svgs/schlumberger.svg";
import logo9 from "../assets/svgs/first_e_p.svg";

const companies = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
];

const Companies = () => {
  const [position, setPosition] = useState(-90);
  const [direction, setDirection] = useState(1); // 1 for moving right, -1 for moving left
  const [distanceMoved, setDistanceMoved] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (direction === 1 && distanceMoved < 100) {
        setPosition((prevPosition) => prevPosition + 1);
        setDistanceMoved((prevDistance) => prevDistance + 1);
      } else if (direction === 1 && distanceMoved === 100) {
        setDirection(-1); // Change direction to move left
      } else if (direction === -1 && distanceMoved > 0) {
        setPosition((prevPosition) => prevPosition - 1);
        setDistanceMoved((prevDistance) => prevDistance - 1);
      } else if (direction === -1 && distanceMoved === 0) {
        setDirection(1); // Change direction to move right
      }
    }, 150); // Adjust the interval for desired speed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [direction, distanceMoved]);

  return (
    <div className="px-10 py-5 overflow-auto hide-scroll w-full">
      <h1 className="text-center text-4xl text-[#FF1400] font-bold">
        Our clients
      </h1>
      <div
        className="w-full flex items-center gap-10"
        style={{ transform: `translateX(${position}%)` }}
      >
        {companies.map((company, index) => (
          <img key={index} src={company} alt="company logo" className="w-32" />
        ))}
      </div>
    </div>
  );
};

export default Companies;
