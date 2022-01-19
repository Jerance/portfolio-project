import React from "react";
import logo from "../media/depositphotos_359808764-stock-illustration-initial-mj-letter-logo-vector.jpeg";
import './navbar.css';

const Navbar = () => {
    return ( 

        <nav id="nav" className="barre_nav">

            <ul className="navbar-nav">

                <a href="../App.js"><img className="logo_Accueil" src={logo} alt="logo"/></a>

                <li>
                    <a className="nav-link" href="./About-me/about-me.js.#about">À Propos</a>
                </li>
                <li>
                    <a className="nav-link" href="#skills">Compétences</a>
                </li>
                <li>
                    <a className="nav-link" href="#path">Parcours</a>
                </li>
                <li>
                    <a className="nav-link" href="#projects">Projets</a>
                </li>
                <li>
                    <a className="nav-link" href="#passion">Centre D'intérets </a>
                </li>
                <li>
                    <a className="nav-link" href="http://localhost:5000/">Contact</a>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar