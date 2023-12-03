import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import "./App.css";
import Companies from "./component/Companies/Companies";
import Residencies from "./component/Residencies/Residencies";
import Values from "./component/Values/Values";
import React, { useEffect, useState } from "react";
import FloatingCircle from "./component/FloatingCircle";
import FixedNavbar from "./component/FixedNavbar";
import Contact from "./component/Contact/Contact";
import GetStarted from "./component/GetStarted/GetStarted";
import Footer from "./component/Footer/Footer";

function App() {
  const [isFixed, setIsFixed] = useState(false);

  //Handing scroll

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  return (
    <div className={`App ${isFixed ? "fixed" : ""}`}>
      <div>
        <div className="white-gradient" />
        <Header className={isFixed ? "fixed" : ""} />
        <Hero />
      </div>
       <Companies />
      <Residencies />
      <Values />
      <FixedNavbar onScroll={handleScroll} />
      <Contact />
      <GetStarted/>
      <Footer/> 
      {/* <FloatingCircle /> */}
    </div>
  );
}

export default App;
