import React, { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import WhatILearned from "./WhatILearned";
import FuturePlans from "./FuturePlans";
import EthereumVsSolana from "./EthereumVsSolana";
import Home from "./Home";

function App() {
  const bitcoins = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 4, // Random duration between 4s - 7s
    }));
  }, []);

  return (
    <Router>
      <div className="layout-container">
        <Sidebar /> {/* ✅ Sidebar is now part of the main layout */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home bitcoins={bitcoins} />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/learned" element={<WhatILearned />} />
            <Route path="/future" element={<FuturePlans />} />
            <Route path="/ethereum-vs-solana" element={<EthereumVsSolana />} /> {/* ✅ New Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;