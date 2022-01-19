import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Portfolio_container/Navbar";
import Header from "./Portfolio_container/Header";
import Footer from "./Portfolio_container/Footer/Footer";
import AboutMe from "./Portfolio_container/About-me/about-me";
import Particles from "react-particles-js";


function App() {
  return (
      <div>
          <Particles
              params={{
                  particles: {
                      number: {
                          value:25,
                          density: {
                              enable: true,
                              value_area: 500,
                          },
                      },
                      shape:{
                          type:"star",
                          stroke:{
                              width:6,
                              color:"#00000"
                          },
                      },
                  },
                  interactivity: { //**
                      "detect_on": "window"
                  },
              }}
          />
          <Navbar/>
          <Header/>
          <AboutMe>

          </AboutMe>
          <Footer/>
          <a className="scroll_button" href="#"><i className="fas fa-chevron-up"></i></a>
      </div>
  );
}

export default App;
