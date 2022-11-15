import React from 'react'
import { FaFacebookF ,FaInstagram,FaTiktok,FaLinkedinIn} from "react-icons/fa";
import './socialIcons.css'
const SocialIcons = () => {
  return (
    <div className="social-icons-main">
    <a href='/#' className="social-icon facebook"><FaFacebookF/></a>
    <a href='/#' className="social-icon instagram "><FaInstagram/></a>
    <a href='/#' className="social-icon tiktok "><FaTiktok/></a>
    <a href='/#' className="social-icon linkedin "><FaLinkedinIn/></a>
    </div>
  )
}

export default SocialIcons