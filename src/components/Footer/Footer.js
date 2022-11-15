import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF ,FaInstagram,FaTiktok,FaLinkedinIn} from "react-icons/fa";
import "./Footer.css";
import SearchInput from "../searchinput/SearchInput";
import SocialIcons from "../socialIcons/SocialIcons";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-1 pe-2">
            <p style={{ color: "var(--secondary-color)",fontSize:'20px',letterSpacing:'2px'}}>
              Programs
            </p>
          </div>
          <div className="col-md-2" style={{paddingLeft:'10px'}}>
            <ul>
              <li>Commonwealth of Dominica</li>
              <li>Saint Christopher and Nevis </li>
              <li>Antigua and Barbuda</li>
              <li>Saint Lucia</li>
              <li>Grenada</li>
              <li>Vanuatu</li>
            </ul>
          </div>
          <div className="col-md-1">
            <ul>
              <li>Portugal</li>
              <li>Cyprus</li>
            </ul>
          </div>
          <div className="col-md-1 ps-2">
            <p style={{ color: "var(--secondary-color)",fontSize:'20px',letterSpacing:'2px'}} className="">
              Categories
            </p>
          </div>
          <div className="col-md-2" style={{paddingLeft:'35px'}}>
            <ul className="important-links">
              <li>Home</li>
              <li>Services</li>
              <li>Programs</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="col-md-4 pt-5">
            <p style={{ color: "var(--secondary-color)",fontSize:'18px',letterSpacing:'2px',textAlign:'center'}} className="">
              Search
            </p>
            <SearchInput />
            <div className="social-icons-footer">
            <a href='/#' className="social-icon facebook"><FaFacebookF/></a>
            <a href='/#' className="social-icon instagram "><FaInstagram/></a>
            <a href='/#' className="social-icon tiktok "><FaTiktok/></a>
            <a href='/#' className="social-icon linkedin "><FaLinkedinIn/></a>
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
