import React from 'react';
import { Slide } from 'react-slideshow-image';
import img1 from '../HomePage/HomePageSliderImage/Accueil.png';
import img2 from '../HomePage/HomePageSliderImage/Front End.png';
import img3 from '../HomePage/HomePageSliderImage/Back-end.png';
import img4 from '../HomePage/HomePageSliderImage/Agile.png';
import 'react-slideshow-image/dist/styles.css'
import './Slide.css';

const proprieties = {
    duration : 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true,
}


const Slideshow = () => {

    return (

        <div className="containerSlide">
            <Slide {...proprieties}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;