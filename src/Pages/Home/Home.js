import React from 'react'
import AboutUs from '../../components/Aboutus/AboutUs';
import ContactUs from '../../components/Contactus/ContactUs';
import Main from '../../components/mainSection/Main';
import MobileMenu from '../../components/mobileMenu/MobileMenu';

import OurServices from '../../components/ourservices/OurServices';
import Slider from '../../components/slider/Slider'
const Home = () => {
  return (
    <>
    <Main/>
    <OurServices/>
    <Slider/>
    <AboutUs/>
    <ContactUs/>
    </>
  )
}

export default Home