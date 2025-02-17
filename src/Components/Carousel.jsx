import { useState, useRef } from 'react'
import roy from '../images/roy-4.png'
import coolmex from '../images/coolmex-1.png'
import wineweb from '../images/wineweb.png'
import workoutsweb from '../images/workoutsweb.png'
import app from '../images/app.png'

function Carousel() {

    const [slides, setSlides] = useState([
        { img: roy, title: "ROY", des: "RueJS+NuxtJS" },
        { img: coolmex, title: "COOLMEX", des: "React+NodeJS" },
        { img: wineweb, title: "WINEWEB", des: "React+NodeJS" },
        { img: workoutsweb, title: "WORKOUTS", des: "React+NodeJS" },
        { img: app, title: "WINE NOTES", des: "React Native" }
      ]);

    const slideRef = useRef(null);

    const nextSlide = () => setSlides((prev) => [...prev.slice(1), prev[0]]);

    const prevSlide = () => setSlides((prev) => [ prev[prev.length - 1], ...prev.slice(0, -1) ]);

    return (
      <div className="container">
        <div id="slide" ref={slideRef}>
          {slides.map((slides, index) => (
            <div key={index} className="item" style={{ backgroundImage: `url(${slides.img})` }}>
              <div className="content">
                <div className="name">{slides.title}</div>
                <div className="des">{slides.des}</div>
                <button className='btn--filled'>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
        <button onClick={prevSlide}><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={nextSlide}><i className="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
    );

}

export default Carousel