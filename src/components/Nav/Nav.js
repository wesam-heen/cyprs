import React from 'react'
import { Container } from 'react-bootstrap'
import './Nav.css'
import Flag from '../../assests/images/flag.jpg'
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
const Nav = () => {
  return (
    <>
    <Container>
    <section className="head-one">
      <div className="contact-item">
        <div className="item">
          <div className='clock'>
          <AiOutlineClockCircle/>
          </div>
          <span>Office Hours 09:00AM - 06:00 PM </span>
        </div>
        <div className="item">
        <div className='call'>
        <IoCallOutline/>
        </div>
          <span>+971502678688</span>
        </div>
      </div>
      <span className="language">
        <img src={Flag} className="flag" alt="" />
      </span>
    </section>
    </Container>
    </>
  )
}

export default Nav