import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Portfolio_container/Home/Navbar";
import Header from "./Portfolio_container/Home/Header";
import Footer from "./Portfolio_container/Home/Footer/Footer";
import AboutMe from "./Portfolio_container/Home/About-me/about-me";
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
                              value_area: 900,
                          },
                      },
                      shape:{
                          type:"star",
                          stroke:{
                              width:6,
                              color:"#009BFF"
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
          <AboutMe/>
          <Footer/>
      </div>
  );
}

export default App;
