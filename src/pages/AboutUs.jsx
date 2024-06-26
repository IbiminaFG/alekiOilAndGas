import About from "../components/About";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mission from "../components/Mission";
import Staff from "../components/Staff";

import service4 from "../assets/images/gallery-6.jpg";
import service5 from "../assets/images/gallery-1.jpg";
import service6 from "../assets/images/gallery-8.jpg";
import service7 from "../assets/images/gallery-9.jpg";
import portfolio from "../assets/ALEKIOILANDGAS2023.pdf";

const image = [service4, service5, service6, service7];

const Portfolio = () => {
  return (
    <div className="">
      <a
        href={portfolio}
        target="_blank"
        rel="noreferrer"
        className="download_btn px-5 py-2 rounded-lg duration-300 text-white hover:bg-transparent hover:text-primary-red border border-solid border-primary-red"
      >
        Download Portfolio
      </a>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>

      <div className="p-3 md:p-10">
        <div className="flex items-end gap-1 ">
          <h1 className="text-2xl font-Medium">About Us</h1>
          <div className="h-1 w-64 bg-primary-red rounded-md"></div>
        </div>
      </div>

      <div className="p-3 md:px-20">
        <div className="flex gap-10 items-center overflow-auto py-2">
          {image.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="about us diagrams"
              className="w-80"
            />
          ))}
        </div>
      </div>

      <div className="my-5 px-3 md:px-20">
        <Portfolio />
      </div>

      <div className="p-3 md:p-10">
        <About />
      </div>

      <div>
        <Mission />
      </div>

      <div>
        <Staff />
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

export default AboutUs;
