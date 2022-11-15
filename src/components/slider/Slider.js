import React from "react";
import "./slider.css";
import Square from "../squareframe/Square";
import Paragraph from "../Paragraph/Paragraph";
import Slide from "../Slide/Slide";
const Slider = () => {
  return (
    <div className="slider">
      <Square text="Citizenship & Residency By Investment" />
      <Paragraph
        text="Citizenship by investment programs Will
    grant immediate dual citizenship and qualification for a passport
    to our clients and their family by investing in the economy of the 
   selected country. These programs offer visa free access to over
    125 countries and it gives the ability to travel without Borders
   Programs that we provide are:"
      />
      <Slide />
      
    </div>
  );
};

export default Slider;
