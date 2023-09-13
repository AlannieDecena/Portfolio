import { Routes, Route } from "react-router-dom";
import React from "react";

import Projects from "../pages/Projects";
import HomePage from "../pages/HomePage";
import CapStone from "../pages/CapStone";
import AnimeProject from "../pages/AnimeProject";
import CalculatorProject from "../pages/CalculatorProject";

import About from "../pages/About";
import UxUiRedesign from "../pages/UxUiRedesign";


function AppRoutes() {
  return (
    <Routes>
       <Route path="/" element={<HomePage/>} />  
    
      
     <Route path="/capstone" element={<CapStone />} />
     <Route path="/animeproject" element={<AnimeProject />} />
     <Route path="/calculatorproject" element={<CalculatorProject />} />
     {/* <Route path="/calculator" element={<Calculator />} /> */}
     <Route path="/about" element={<About />} />
     <Route path="/projects" element={<Projects />} />

     <Route path="/redesign" element={<UxUiRedesign />} />
     


    </Routes>
  );
}

export default AppRoutes;
