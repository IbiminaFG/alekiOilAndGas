import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Companies from "../components/Companies";
import Footer from "../components/Footer";

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

      <div className="p-3 md:p-10">
        <About />
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
