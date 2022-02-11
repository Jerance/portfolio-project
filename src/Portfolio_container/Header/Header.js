import React from "react";
import Typed from "react-typed";
import me_photo from "../../media/photo_2_moi.jpeg"
import './header.css'
const Header = () => {

    return(

        <div className="presentation">
            <div className="main-info">
                <Typed
                    className="typed-text"
                    strings={["👋 Bonjour à tous !","Je m'appelle Jerance MICHAEL 😁"]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                />
                <img className="photo_accueil" src={me_photo} alt="photo_2_moi"/>
                <div className="space-icones">
                    <div className="item skill-box animated fadeInUp">
                        <i className="fas fa-laptop-code"></i>
                        <p className="txt_icons">Front-end</p>
                    </div>
                    <div className="item skill-box animated fadeInUp">
                        <i className="fas fa-terminal"></i>
                        <p className="txt_icons">Programmation</p>
                    </div>
                    <div className="item skill-box animated fadeInUp">
                        <i className="fas fa-mobile-alt"></i>
                        <p className="txt_icons">Mobile</p>
                    </div>
                    <div className="item skill-box animated fadeInUp">
                        <i className="fas fa-cogs"></i>
                        <p className="txt_icons">Back-end</p>
                    </div>
                    <div className="item skill-box animated fadeInUp">
                        <i className="fas fa-users"></i>
                        <p className="txt_icons">Agile</p>
                    </div>
                </div>
            </div>
        </div>
    )}

export default Header;