import React from "react";
import "./navbar.css";
import Logo from "../../media/Capture d’écran 2022-02-12 à 09.56.40.png";

const Navbar = ({ sticky }) => {
    return (
        <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
            <div className="navbar--logo-holder">
                {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
            </div>
            <ul className="navbar--link">
                <li className="navbar--link-item">
                    <a className="nav-link" href="../About-me/about-me.js#about" >À Propos</a>
                </li>
                <li className="navbar--link-item">
                    <a className="nav-link" href="#skills">Compétences</a>
                </li>
                <li className="navbar--link-item">
                    <a className="nav-link" href="#path">Parcours</a>
                </li>
                <li className="navbar--link-item">
                    <a className="nav-link" href="#projects">Projets</a>
                </li>
                <li className="navbar--link-item">
                    <a className="nav-link" href="#passion">Centre D'intérets </a>
                </li>
                <li className="navbar--link-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li className="navbar--link-item">EN</li>
                <li className="navbar--link-item">FR</li>
            </ul>
        </nav>
    )};
export default Navbar;
