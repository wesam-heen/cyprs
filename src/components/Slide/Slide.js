import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Slide.css";
import slide from "../../assests/images/slide.png";
import Antigua from "../../assests/images/AntiguaSlide.png";
import Dominica from "../../assests/images/DominicaSlide.png";
import Greece from "../../assests/images/GreeceSlide.png";
import Grenada from "../../assests/images/GrenadaSlide.png";
import Nevis from "../../assests/images/NevisSlide.png";
import SaintLucia from "../../assests/images/SaintLuciaSlide.png";
import Vanuatu from "../../assests/images/VanuatuSlide.png";
import cyprus from "../../assests/images/cypursSlide.png";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


let imageSlide = [
  Dominica,
  Nevis,
  Antigua,
  SaintLucia,
  Grenada,
  Vanuatu,
  Greece,
  cyprus,
];
let textSlide=[
  'Obtain Dominica passport which is under the British Commonwealth League, within a few months, with clear and simple investment plan.',
  'The Saint Kitts and Nevis passport, which is under the British Commonwealth League, benefits the holder from several advantages.',
  'Antigua and Barbuda is an island nation well-known for its reef-lined beaches, rich scenery landscapes, and beautiful lush green forests.',
  'Saint Lucia is located in the Caribbean Sea, with great landscapes overlooking the breathtaking Western Mountains.',
  'Grenada is characterized by the beauty of its green mountains and clear blue beaches. It is about 140 km from the northern coast of Venezuela.',
  'The Republic of Vanuatu is a beautiful nation stretching across the South Pacific Ocean, located in the west of Fiji, four hours by plane from the east coast of Australia.',
  'Greece is located in the southernmost part of the Balkans. Its topography combines the high mountains in the interior of the country and more than 1,400 islands.',
  'Cyprus is ideally located in the Eastern Mediterranean and is renowned for its rich heritage and vibrant culture. Many leading companies operate in its attractive and fast-growing capital.'
]
let country=[
  'Commonwealth of Dominica',
  'Saint Christopher and Nevis',
  'Antigua and Barbuda',
  'Saint Lucia',
  'Grenada',
  'Vanuatu',
  'Greece',
  'Cyprus'
]
let LinksCountry=[
  '/programs/Dominica/about',
  '/programs/Nevis/about',
  '/programs/Antigua/about',
  '/programs/Saint/about',
  '/programs/Grenada/about',
  '/programs/Vanuatu/about',
  '/programs/Greece/about',
  '/programs/cyprs/about'
]
const Slide = () => {
  const [index,setIndex]=useState(0)
  return (
    <>
      <div className="slide">
        <Container>
          <div className="row">
            <div className="col-2 arrow arrow-web-left" onClick={() =>{ 
            index>0 &&setIndex(index-1)
            
            }}>
              <MdKeyboardArrowLeft/>
            </div>
            <div className="col-md-8 box">
              <div className="row">
                <div className="col-md-6">
                  {
                    <img
                      src={imageSlide[index]}
                      alt="slide"
                      className="mw-100 slide-photo"
                    />
                  }
                  <div className="bullts">
                   {index===0?<span className="active"></span>:<span></span>} 
                   {index===1?<span className="active"></span>:<span></span>} 
                   {index===2?<span className="active"></span>:<span></span>} 
                   {index===3?<span className="active"></span>:<span></span>} 
                   {index===4?<span className="active"></span>:<span></span>} 
                   {index===5?<span className="active"></span>:<span></span>} 
                   {index===6?<span className="active"></span>:<span></span>} 
                   {index===7?<span className="active"></span>:<span></span>} 
                  </div>
                </div>
                <div className="col-md-6 info-slide">
                  <h2>{country[index]}</h2>
                  <p>
                   {textSlide[index]}
                  </p>
                  <Link to={LinksCountry[index]} className='show-more-slide'>Show More</Link>
                </div>
              </div>
            </div>
            <div className="col-2 arrow arrow-web-right" onClick={() =>{ 
              index < imageSlide.length-1&&setIndex(index+1)
              
              }}>
              <MdKeyboardArrowRight/>
            </div>
          </div>
        </Container>
      </div>
      <div className="slide-mobile">
      <div className='arrow-left-mobile' onClick={() =>{ 
        index>0 &&setIndex(index-1)
        
        }}>
      <MdKeyboardArrowLeft/>
      </div>
        <div className="mobile-slider">
          <img src={imageSlide[index]} alt="slide" />
          <h2>{country[index]}</h2>
          <p>{textSlide[index]}     </p>
          <button><Link to={LinksCountry[index]}>Show More</Link></button>
        </div>
        <div className='arrow-right-mobile' onClick={() =>{ 
          index < imageSlide.length-1&&setIndex(index+1)
          
          }}>
        <MdKeyboardArrowRight/>
        </div>
      </div>
    </>
  );
};

export default Slide;
