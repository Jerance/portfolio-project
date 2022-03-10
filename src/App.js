/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Portfolio_container/navBar/Navbar";
import Slideshow from "./Portfolio_container/HomePage/Slide";
import Footer from "./Portfolio_container/Footer/Footer";
import AboutMe from "./Portfolio_container/About-me/about-me";
import useSticky from '../src/Portfolio_container/navBar/useSticky'
import {BrowserRouter, Routes} from "react-router-dom";
import Skills from "./Portfolio_container/Skills/skills"


function App() {

    const { isSticky, element } = useSticky()

    return (
        
      <div className="App">
          <BrowserRouter>
              <Navbar sticky={isSticky}/>
              <Slideshow/>
              <AboutMe element={element}/>
              <Skills/>
              <Routes>
                  {/*mettre en href dans la NavBar le path pour ainsi utiliser le rooter*/}
                  {/*<Route path="/contact" element={<Contact />}/> */}
              </Routes>
              <Footer/>
          </BrowserRouter>
          <a className="scroll_button" href="#"><i className="fas fa-chevron-up"></i></a>
      </div>
  );
}
export default App;
