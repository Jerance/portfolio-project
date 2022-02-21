import React from "react";
import './style-about.css';
import me from '../../media/Photo.jpeg';

const AboutMe =({element}) => {

    return(

        <div ref={element} className="A_Propos ">

            <div id="about"className="about_container">

                <p className="title">🧐 À PROPOS</p>
                <img className="photo_2_moi" src={me} alt="Photo"/>
                <span className="description"> Bon vsy je me présente vite fais en balle tu connais, je m'appelle
                Jerance et je suis quelqu'un de très ambitieux qui peut se donner les moyens pour réussir
                les objectifs qu'il entreprend.</span>
                <br/>
                <div className="d-flex flex-wrap">
                    <a href="" download className="primary_button">Télécharger le CV <i className="fas fa-download"></i>
                    </a>
                    <a href="./contact.html#contact" className="secondary_button">Me contacter
                        <i className="fas fa-paper-plane"></i>
                    </a>
                </div>
                <p className="infos_text">Nom : Michael
                    <br/>Prénom : Jerance
                    <br/>Âge : 18 ans
                    <br/>Ville : La Courneuve (93)
                    <br/>Mobilité : Paris, Île De France</p>

            </div>

        </div>

    )}

export default AboutMe;
