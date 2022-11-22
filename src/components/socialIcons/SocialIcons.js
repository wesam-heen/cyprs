import React from 'react'
import { FaFacebookF ,FaInstagram,FaTiktok,FaLinkedinIn} from "react-icons/fa";
import './socialIcons.css'
const SocialIcons = () => {
  return (
    <div className="social-icons-main">
    <a href='https://www.facebook.com/avioncitizenship1/' className="social-icon facebook"><FaFacebookF/></a>
    <a href='https://www.instagram.com/avioncitizenship1/' className="social-icon instagram "><FaInstagram/></a>
    <a href='https://www.tiktok.com/@avioncitizenship?is_from_webapp=1&sender_device=pc' className="social-icon tiktok "><FaTiktok/></a>
    <a href='https://www.linkedin.com/company/avion-citizenship2020/' className="social-icon linkedin "><FaLinkedinIn/></a>
    </div>
  )
}

export default SocialIcons