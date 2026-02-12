import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Locations from "./Components/Locations.jsx";
import DestinationDetails from "./Components/DestinationDetails.jsx";


function App() {
  const testimonialsRef = useRef(null);

  return (
    <Routes>
      <Route path="/" element={<Home testimonialsRef={testimonialsRef} />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/locations/:id" element={<DestinationDetails />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
