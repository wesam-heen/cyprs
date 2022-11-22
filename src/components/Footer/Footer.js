import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF ,FaInstagram,FaTiktok,FaLinkedinIn} from "react-icons/fa";
import "./Footer.css";
import SearchInput from "../searchinput/SearchInput";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-1 pe-2">
            <p style={{ color: "var(--secondary-color)",fontSize:'19px',letterSpacing:'2px',fontWeight:'bold'}}>
              Programs
            </p>
          </div>
          <div className="col-md-2" style={{paddingLeft:'10px'}}>
            <ul>
              <li><Link to='/programs/Dominica/about'>Commonwealth of Dominica</Link></li>
              <li><Link to='/programs/Nevis/about'>Saint Christopher and Nevis </Link></li>
              <li><Link to='/programs/Antigua/about'>Antigua and Barbuda</Link></li>
              <li><Link to='/programs/Saint/about'>Saint Lucia</Link></li>
              <li><Link to='/programs/Grenada/about'>Grenada</Link></li>
              <li><Link to='/programs/Vanuatu/about'>Vanuatu</Link></li>
            </ul>
          </div>
          <div className="col-md-1">
            <ul>
              <li><Link to='/programs/Greece/about'>Greece</Link></li>
              <li><Link to='/programs/cyprs/about'>Cyprus</Link></li>
            </ul>
          </div>
          <div className="col-md-1 ps-2">
            <p style={{ color: "var(--secondary-color)",fontSize:'19px',letterSpacing:'2px',fontWeight:'bold'}} className="">
              Categories
            </p>
          </div>
          <div className="col-md-2" style={{paddingLeft:'35px'}}>
            <ul className="important-links">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/ourservices'>Services</Link></li>
              <li><Link to='/programs/cyprs/about'>Programs</Link></li>
              <li><Link to='/'>Contact Us</Link></li>
              <li><Link to='/'>About Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4 pt-5">
            <p style={{ color: "var(--secondary-color)",fontSize:'18px',letterSpacing:'2px',textAlign:'center'}} className="">
              Search
            </p>
            <SearchInput />
            <div className="social-icons-footer">
            <a href='https://www.facebook.com/avioncitizenship1/' className="social-icon facebook"><FaFacebookF/></a>
            <a href='https://www.instagram.com/avioncitizenship1/' className="social-icon instagram "><FaInstagram/></a>
            <a href='https://www.tiktok.com/@avioncitizenship?is_from_webapp=1&sender_device=pc' className="social-icon tiktok "><FaTiktok/></a>
            <a href='https://www.linkedin.com/company/avion-citizenship2020/' className="social-icon linkedin "><FaLinkedinIn/></a>
            </div>
          </div>
        </div>
      </Container>
      <div className="copyRight pt-4">
      Copyright © 2022 Avion Citizenship | Powered by <br/>Just Try
    </div>
    </div>

    
  );
};

export default Footer;
