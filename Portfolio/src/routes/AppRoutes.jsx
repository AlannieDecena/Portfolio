import { Routes, Route } from "react-router-dom";
import React from "react";
import App from "../App";
import Projects from "../pages/Projects";
import HomePage from "../pages/HomePage";
import CapStone from "../pages/CapStone";
import AnimeHome from "../components/AnimeHome";
import AnimeArrived from "../components/AnimeArrived";
import AnimeLoading from "../components/AnimeLoading";
import AnimeProject from "../pages/AnimeProject";
import CalculatorProject from "../pages/CalculatorProject";
import Calculator from "../components/Calculator";
import About from "../pages/About";



function AppRoutes() {
  return (
    <Routes>
       <Route path="/" element={<HomePage/>} />  
    
      
     <Route path="/capstone" element={<CapStone />} />
     <Route path="/animeproject" element={<AnimeProject />} />

     <Route path="/animehome" element={<AnimeHome />} />
     <Route path="/animeloading" element={<AnimeLoading />} />
     <Route path="/animearrived" element={<AnimeArrived />} />
     <Route path="/calculatorproject" element={<CalculatorProject />} />
     <Route path="/calculator" element={<Calculator />} />
     <Route path="/about" element={<About />} />
     <Route path="/projects" element={<Projects />} />

     

     
     {/*  <Route path="/logout" element={<LogOut {...props} />} />
      <Route path="/signup" element={<Signup {...props} />} />
 <Route path="/entryMoods" element={<EntryMoodsPage {...props} />} />

      <Route path="/user" element={<UserPage {...props}  goals={goals} setGoals={setGoals} />} />
  
      <Route path="/changemood" element={<MoodPage {...props} />} />
      <Route path="/displaymoods" element={<DisplayMoods {...props} />} />

      <Route path="/notes" element={<JournalPage {...props} />} />
      <Route path="/goals" element={<GoalsPage {...props}  goals={goals} setGoals={setGoals}/>} />
      <Route path="/about" element={<AboutPage {...props} />} />
  
       */}

    </Routes>
  );
}

export default AppRoutes;
