import React from "react";
import './footer.css';
import mail_logo from '../../../media/email_icon-icons.com_50400.png';

const Footer= () => {
    return(

        <footer>
            <a className="adresse_mail" href="mailto:michael.jerance@gmail.com">
                <img src={mail_logo} alt="logo_mail"/>michael.jerance@gmail.com</a>
            <p>&copy; Jerance Michael - 2021</p>

        </footer>
    )}

export default Footer;