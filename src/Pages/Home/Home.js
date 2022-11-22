
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutUs from '../../components/Aboutus/AboutUs';
import ContactUs from '../../components/Contactus/ContactUs';
import Main from '../../components/mainSection/Main';

import OurServices from '../../components/ourservices/OurServices';
import Slider from '../../components/slider/Slider'

//hide popUp search when click any where in page
window.addEventListener('click',(e)=>{
  const viewProgram=document.querySelector('.view-programs-when-search');
  const viewProgramFooter=document.querySelector('.view-programs-when-search-footer');
  if(e.target!==viewProgram || e.target!==viewProgramFooter){
    viewProgramFooter.value='';
    viewProgram.value='';
    viewProgram.style.display='none';
    viewProgramFooter.style.display='none';

  }else{
    viewProgram.style.display='block'
    viewProgramFooter.style.display='block'
  }
})

const Home = () => {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <Wrapper>
    <Main/>
    <OurServices/>
    <Slider/>
    <AboutUs/>
    <ContactUs/>
    </Wrapper>
  )
}

export default Home