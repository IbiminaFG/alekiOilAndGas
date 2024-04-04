import whatWeDo from "../assets/images/what-we-do-image.png";

const itemsWeDo = [
  "Our services are in both land and marine logistic and construction.",
  "We carry out civil and mechanical engineering works.",
  "We are into provision and sale of vessel for marine logistics.",
];

const WhatWeDo = () => {
  return (
    <div className="p-10 gap-10 flex items-center">
      <img src={whatWeDo} alt="what we do" />
      <div className="text-primary-blue flex flex-col gap-3">
        <h2 className="text-3xl font-bold">What We Do</h2>
        <p className="text-2xl font-semibold">
          We put in our best in all our services because you deserve the best
          always.{" "}
        </p>
        <ul className="text list-disc">
          {itemsWeDo.map((item, index) => (
            <li key={index} className="flex gap-2 text-2xl font-semibold">
              <div className="h-5 w-2 flex items-end">
                <div className="w-2 h-2 rounded-full bg-primary-blue"></div>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatWeDo;
