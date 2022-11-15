import React from 'react'
import Frame from '../../../../components/frame/Frame'
import Paragraph from '../../../../components/Paragraph/Paragraph'
import { Link } from "react-router-dom";
import MobileMenu from "../../../../components/mobileMenu/MobileMenu";
import Table from '../Table/Table'
import './Cyprs.css'
const spans = document.querySelectorAll(".program-sections span");
spans.forEach((span) => {
  span.addEventListener("click", () => {
    spans.forEach((span) => span.classList.remove("active"));
    span.classList.toggle("active");
  });
});
const Cyprs = () => {
  return (
    <>
    <div className="main-programs">
    <MobileMenu />
    <h2>
      Residency By Investment
      <br />
      In Cyprus
    </h2>
    <div className="program-sections">
      <Link to="/programs/cyprs" className="Link active">
        About the country
      </Link>
      <Link to="/programs/benefits" className="Link">
        benefits
      </Link>
      <Link to="/programs/investment" className="Link">
        investment plan
      </Link>
      <Link to="/programs/Procedures " className="Link">
        Procedures and time
      </Link>
    </div>
  </div>
    <Frame text='&emsp; &emsp; About Cyprus'/>
    <Paragraph text='Cyprus is ideally located in the Eastern Mediterranean and is renowned for its rich 
    heritage and vibrant culture. Many leading companies operate in its attractive
     and fast-growing capital, Nicosia, and gives Cyprus the option to obtain 
    permanent residency quickly within a period of two months.'/>
    <Table/>
    </>
  )
}

export default Cyprs