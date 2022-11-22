import React from 'react'
import './contactUsMobile.css'
import { IoCallOutline ,IoLogoWhatsapp ,IoLocationOutline} from "react-icons/io5";
import { FaFacebookF ,FaInstagram,FaTiktok,FaLinkedinIn} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const ContactUsMobile = () => {
  return (
    <div className='contact-us-mobile'>
    <h2>Contact Us</h2>
   
    <div className="info-form-mobile">
    <div>
      <a href="https://www.google.com/maps/place/The+Burlington+Tower/@25.1850035,55.2645222,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f697129e73c31:0x689d4a578720d6aa!8m2!3d25.1850035!4d55.2645222">
        <IoLocationOutline className="fs-2 me-1" />{" "}
        <span>Office 2209, The Burlington Tower, Dubai, UAE</span>
      </a>
    </div>
    <div>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@avioncitizenship.com">
        <HiOutlineMail className="fs-2 me-1" />
        <span>info@avioncitizenship.com</span>
      </a>
    </div>
    <div>
      <a href="tel:+97143289890">
        <IoCallOutline className="fs-2 me-1" />{" "}
        <span>+97143289890</span>
      </a>
    </div>
    <div>
      <a href="https://wa.me/00971502678688?text=I'm%20interested%20to%20communicate%20with%20the%20work%20team">
        <IoLogoWhatsapp className="fs-2 me-1" />{" "}
        <span>+971502678688</span>
      </a>
    </div>
   </div>
   <div className="social-icons-footer">
   <a href='https://www.facebook.com/avioncitizenship1/' className="social-icon facebook"><FaFacebookF/></a>
   <a href='https://www.instagram.com/avioncitizenship1/' className="social-icon instagram "><FaInstagram/></a>
   <a href='https://www.tiktok.com/@avioncitizenship?is_from_webapp=1&sender_device=pc' className="social-icon tiktok "><FaTiktok/></a>
   <a href='https://www.linkedin.com/company/avion-citizenship2020/' className="social-icon linkedin "><FaLinkedinIn/></a>
   </div>
    </div>
  )
}

export default ContactUsMobile