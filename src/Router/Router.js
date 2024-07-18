import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Sharemodules/Navbar/Navbar";
import Footer from "../Sharemodules/Footer/Footer";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Education from "../Components/Education/Education";
import Techskill from "../Components/Techskill/Techskill";
import Project from "../Components/Project/Project";
import Contact from "../Components/Contact/Contact";

export default function Rout() {
  return (
    <Suspense fallback={<h2>Loading.....</h2>}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edu" element={<Education />} />
          <Route path="/techskill" element={<Techskill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}
