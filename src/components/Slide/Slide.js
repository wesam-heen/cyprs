import React from "react";
import { Container } from "react-bootstrap";
import "./Slide.css";
import slide from "../../assests/images/slide.png";
const Slide = () => {
  return (
    <>
      <div className="slide">
        <Container>
          <div className="row">
            <div className="col-2 arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 97.893 97.893"
              >
                <path
                  id="Vector"
                  d="M48.947,0A48.947,48.947,0,1,0,97.893,48.947,49.027,49.027,0,0,0,48.947,0Zm8.761,63.631a3.693,3.693,0,0,1,0,5.188,3.663,3.663,0,0,1-5.188,0L35.242,51.541a3.693,3.693,0,0,1,0-5.188L52.52,29.074a3.669,3.669,0,1,1,5.188,5.188L43.024,48.947Z"
                  fill="#1a2d40"
                />
              </svg>
            </div>
            <div className="col-md-8 box">
              <div className="row">
                <div className="col-md-6">
                  <img src={slide} alt="slide" className="mw-100 slide-photo" />
                  <div className="bullts">
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="col-md-6 info-slide">
                  <h2>Republic of Cyprus</h2>
                  <p>
                    Cyprus is ideally located in the Eastern Mediterraneanand is
                    renowned for its richheritage andvibrant culture.
                  </p>
                  <button>Show More</button>
                </div>
              </div>
            </div>
            <div className="col-2 arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 97.704 97.704"
              >
                <path
                  id="Vector"
                  d="M48.852,0A48.852,48.852,0,1,0,97.7,48.852,48.932,48.932,0,0,0,48.852,0Zm13.63,51.441L45.237,68.686a3.656,3.656,0,0,1-5.178,0,3.686,3.686,0,0,1,0-5.178L54.714,48.852,40.058,34.2a3.662,3.662,0,1,1,5.178-5.178L62.481,46.263A3.6,3.6,0,0,1,62.481,51.441Z"
                  fill="#1a2d40"
                />
              </svg>
            </div>
          </div>
        </Container>
      </div>
      <div className="slide-mobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 97.893 97.893"
          
        >
          <path
            id="Vector"
            d="M48.947,0A48.947,48.947,0,1,0,97.893,48.947,49.027,49.027,0,0,0,48.947,0Zm8.761,63.631a3.693,3.693,0,0,1,0,5.188,3.663,3.663,0,0,1-5.188,0L35.242,51.541a3.693,3.693,0,0,1,0-5.188L52.52,29.074a3.669,3.669,0,1,1,5.188,5.188L43.024,48.947Z"
            fill="#1a2d40"
          />
        </svg>
        <div className="mobile-slider">
        <img src={slide} alt='slide' />
          <h2>Republic of Cyprus</h2>
          <p>
            Cyprus is ideally located in the Eastern Mediterraneanand is
            renowned for its richheritage andvibrant culture.
          </p>
          <button>Show More</button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 97.704 97.704"
        >
          <path
            id="Vector"
            d="M48.852,0A48.852,48.852,0,1,0,97.7,48.852,48.932,48.932,0,0,0,48.852,0Zm13.63,51.441L45.237,68.686a3.656,3.656,0,0,1-5.178,0,3.686,3.686,0,0,1,0-5.178L54.714,48.852,40.058,34.2a3.662,3.662,0,1,1,5.178-5.178L62.481,46.263A3.6,3.6,0,0,1,62.481,51.441Z"
            fill="#1a2d40"
          />
        </svg>
      </div>
    </>
  );
};

export default Slide;
