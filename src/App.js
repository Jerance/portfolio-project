import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Portfolio_container/navBar/Navbar";
import Header from "./Portfolio_container/Header/Header";
import Footer from "./Portfolio_container/Footer/Footer";
import AboutMe from "./Portfolio_container/About-me/about-me";
import Particles from "react-particles-js";
import useSticky from '../src/Portfolio_container/navBar/useSticky'
import {BrowserRouter, Routes} from "react-router-dom";


function App() {
    const { isSticky, element } = useSticky()
    return (

      <div>
          <BrowserRouter>
              <Navbar sticky={isSticky}/>
              <Header element={element} />
              <AboutMe/>
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
