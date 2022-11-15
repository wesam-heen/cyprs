import React from "react";
import "./aboutUs.css";
import Paragraph from "../Paragraph/Paragraph";
import { Container } from "react-bootstrap";
import Frame from "../frame/Frame";
import about1 from "../../assests/images/about1.png";
import about2 from "../../assests/images/about2.png";
const AboutUs = () => {
  return (
    <div className="about-us" id="AboutUs">
      <Container>
        <h2>
          About<span>Us</span>
        </h2>
        <Paragraph
          text="Avion Citizenship is a company established in year 2020 which is located in Dubai,
    United Arab Emirates. We are licensed by a various Government represented.
    We provide Residency and Citizenship by Investment and other services for
    Middle Eastern families and high-net-worth individual who pursued to 
   relocate, change and improve their lives. We strive to be the best
    and serve you with pleasure."
        />
        <Frame text="Your Vision, Our Method" />
        <div className="row m-auto mt-4">
          <div className="col-md-3"></div>
          <div className="col-md-3 mt-3">
            <div className="box-card">
              <img src={about1} alt="image1" className="about-image" />
              <div className="card-title-about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="50"
                  viewBox="0 0 332.171 54.505"
                >
                  <g
                    id="Group_74"
                    data-name="Group 74"
                    transform="translate(-496 -1144)"
                  >
                    <path
                      id="Path_238"
                      data-name="Path 238"
                      d="M5735.188,1194l-27.253,27.253,27.253,27.252h277.665l27.253-27.252L6012.854,1194H5725.018"
                      transform="translate(-5211.936 -50)"
                      fill="#c6a270"
                    />
                    <text
                      id="Our_Vision"
                      data-name="Our Vision"
                      transform="translate(578 1179)"
                      fill="#fff"
                      fontSize="30"
                      fontFamily="Sitka Heading"
                      fontWeight="600"
                      letterSpacing="0.1em"
                    >
                      <tspan x="0" y="0">
                        Our Vision
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
              <div className="card-info">
                <p>
                  We aim to be one of the highest quality services in our
                  industry and achieve to provide our clients with smooth
                  services based on trust and reliability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="box-card">
              <img src={about2} alt="image1" className="about-image" />
              <div className="card-title-about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="50"
                  viewBox="0 0 332.171 54.505"
                >
                  <g
                    id="Group_75"
                    data-name="Group 75"
                    transform="translate(-1093 -1144)"
                  >
                    <path
                      id="Path_238"
                      data-name="Path 238"
                      d="M5735.188,1194l-27.253,27.253,27.253,27.252h277.665l27.253-27.252L6012.854,1194H5725.018"
                      transform="translate(-4614.936 -50)"
                      fill="#c6a270"
                    />
                    <text
                      id="Our_Method"
                      data-name="Our Method"
                      transform="translate(1166 1179)"
                      fill="#fff"
                      fontSize="30"
                      fontFamily="Sitka Heading"
                      fontWeight="600"
                      letterSpacing="0.1em"
                    >
                      <tspan x="0" y="0">
                        Our Method
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
              <div className="card-info">
                <p>
                  To lead better lives for clients and their family and making
                  global citizenship a reality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
