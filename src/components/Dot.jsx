import React from "react";

const Dot = ({ color }) => {
  return <div className={`w-4 h-4 rounded-full bg-${color}`}></div>;
};

export default Dot;
