import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transformation from "./pages/Transformation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transformation" element={<Transformation />} />
      </Routes>
    </Router>
  );
}

export default App;
