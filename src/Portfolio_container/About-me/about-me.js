/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './style-about.css';
import me from '../../media/Photo.jpeg';
import CV from '../../media/CV/MICHAEL Jérance CERGY CODEUR 1ere ANNEE.pdf'

const AboutMe =({element}) => {

    return(

        <div ref={element} className="A_Propos ">
            
            <p id="about" className="title">🧐 À PROPOS DE MOI </p>

            <div className="about_container">

                <div className="left-side">
                    <p>MICHAEL Jerance</p>
                    <img className="photo_2_moi" src={me} alt="Photo"/>
                    <p className="tags-inline"><span className="tag">Developper Front-End</span><span className="tag">Web Designer</span><span className="tag">Monteur</span></p>
                    <p className="container_bio">
                        <p className="boldbio">Âge</p>
                        <p className="bio">18 ans</p>
                    </p>
                    <p className="container_bio">
                        <p className="boldbio">Ville de Naissance</p>
                        <p className="bio">Seine-Saint-Denis (93)</p>
                    </p>
                    <p className="container_bio">
                        <p className="boldbio">Mobilité</p>
                        <p className="bio">Paris, Île De France</p>
                    </p>
                    <p className="container_bio">
                        <p className="boldbio">Mail</p>
                        <p className="bio"> michael.jerance@gmail.com</p>
                    </p>
                </div>

                <div className="right-side">
                    <p className="about-main-text">
                        Actuellement etudiant à la Coding Factory, agée de 18 ans je suis un jeune étudiant très motivé et ambitieux de ma future carrière en tant que développeur Web / mobile.
                    </p>
                </div>
                
                
            </div>

            <div className="d-flex flex-wrap">
                    <a href={CV} download className="primary_button">Télécharger le CV 
                        <i className="fas fa-download"></i></a>
                    <a href="./contact.html#contact" className="secondary_button">Me contacter
                        <i className="fas fa-paper-plane"></i>
                    </a>
            </div>

            

        </div>

    )}

export default AboutMe;
