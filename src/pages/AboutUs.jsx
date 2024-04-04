import About from "../components/About";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mission from "../components/Mission";
import Staff from "../components/Staff";

const AboutUs = () => {
  return (
    <div className="">
      <div>
        <Header />
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
