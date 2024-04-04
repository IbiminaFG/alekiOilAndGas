import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import DynamicService from "./components/DynamicService";

import { constructionData, oilAndGasData, marineData } from "./data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/construction"
          element={<DynamicService serviceData={constructionData} />}
        />
        <Route
          path="/oil-and-gas"
          element={<DynamicService serviceData={oilAndGasData} />}
        />
        <Route
          path="/marine"
          element={<DynamicService serviceData={marineData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
