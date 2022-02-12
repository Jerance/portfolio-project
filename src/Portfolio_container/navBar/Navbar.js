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
                <li className="navbar--link-item">Home</li>
                <li className="navbar--link-item">About</li>
                <li className="navbar--link-item">Contact us</li>
                <li className="navbar--link-item">Blog</li>
            </ul>
        </nav>
    )};
export default Navbar;
