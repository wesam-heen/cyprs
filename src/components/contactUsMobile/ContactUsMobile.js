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
      <IoLocationOutline className='fs-2'/> <span>Office 2209, The Burlington Tower, Dubai, UAE</span>
    </div>
    <div>
      <HiOutlineMail className='fs-2'/> <span>info@avioncitizenship.com</span>
    </div>
    <div>
     <IoCallOutline className='fs-2'/>
     <span>+97143289890</span>
    </div>
    <div>
      <IoLogoWhatsapp className='fs-2'/> <span>+971502678688</span>
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