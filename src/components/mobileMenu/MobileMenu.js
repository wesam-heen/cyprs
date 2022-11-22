import React from "react";
import "./mobileMenu.css";
import { Container } from "react-bootstrap";
import logo1 from "../../assests/images/logo1.png";
import logo2 from "../../assests/images/logo2.png";
import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const toggle = (e) => {
  document.querySelector(".mobile-menu").classList.toggle("active");
};
const togglePrograms = (e) => {
  document.querySelector(".mobile-menu").classList.toggle("active");
  document.querySelector(".program-menu").classList.toggle("active");
};

const MobileMenu = () => {
  return (
    <div className="nav-bar-mobile">
      <Container>
        <img src={logo1} alt="logo" className="logo1 mw-25" />
        <img src={logo2} alt="logo" className="logo2 mw-25 " />
        <BsSearch className="search-btn text-white search-icon-mobile" />
        <div className="toggle-mobile" onClick={toggle}>
          <GiHamburgerMenu className="fs-2" />
          <ul className="mobile-menu ">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/ourservices'>Services</Link></li>
            <li style={{ position: "relative" }} onClick={togglePrograms}>
              Programs
              <ul className="program-menu">
                <li><Link to='/programs/Antigua/about'>Antigua & Barbuda</Link></li>
                <li><Link to='/programs/cyprs/about'>Cyprus</Link></li>
                <li><Link to='/programs/Greece/about'>Greece</Link></li>
                <li><Link to='/programs/Nevis/about'>Saint kitts</Link></li>
                <li><Link to='/programs/Saint/about'>Saint lucia</Link> </li>
              </ul>
            </li>
            <li><a href='#AboutUs'>AboutUs</a></li>
            <li><a href='#ContactUs'>Contact Us</a></li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default MobileMenu;
