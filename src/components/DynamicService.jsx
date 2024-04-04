import Companies from "../components/Companies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceDetail from "./ServiceDetail";

const DynamicService = ({ serviceData }) => {
  return (
    <div className="">
      <div>
        <Header />
      </div>

      <div className="px-3 md:px-28">
        <ServiceDetail serviceData={serviceData} />
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

export default DynamicService;
