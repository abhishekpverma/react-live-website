import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Routes} from "react-router";
import { RedirectFunction } from "react-router";

const App = () => {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="*" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
