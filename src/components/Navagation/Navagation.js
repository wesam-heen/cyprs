import logo1 from '../../assests/images/logo1.png'
import logo2 from '../../assests/images/logo2.png'
import { IoIosArrowDown } from "react-icons/io";
import './Navagation.css';
import Menu from '../menu/Menu'
import { Link } from "react-router-dom";
import{Container,Navbar,Nav} from 'react-bootstrap' 
import { HashLink } from 'react-router-hash-link';


const toggler=()=>{
  const menu= document.querySelector('.menu');
   menu.classList.toggle('active-drop')
    
}
window.addEventListener("mouseup", (e) => {
  const menu= document.querySelector('.menu');
  if (e.target !== menu) {
    menu.classList.remove("active-drop");
  }
});
const lineLink=(e)=>{
  const links=document.querySelectorAll('.nav-link');
  links.forEach(link=>link.classList.remove('active-class'))
  e.target.classList.add('active-class')
}
//when click logo hide underline from other line in nav
const homeLineLink=()=>{
  const links=document.querySelectorAll('.nav-link');
  const Home=document.querySelector('.Home');
  links.forEach(link=>link.classList.remove('active-class'))
  Home.classList.add('active-class')
}

//when click logo hide underline from other line in nav
export const programLineLink=()=>{
  const links=document.querySelectorAll('.nav-link');
  links.forEach(link=>link.classList.remove('active-class'))
}
const Navagation = () => {
  return (
   <>
    <div className='main-nav-bar'>
    <Navbar bg="white" expand="lg" >
    <Container>
      <Navbar.Brand href="#home">
      <Link to='/' onClick={homeLineLink}>
      <img src={logo1} alt='logo' className='logo1'/>
      <img src={logo2} alt='logo' className='logo2'/>
      </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/" className='link nav-link Home active-class' onClick={lineLink}>Home</Link>
          <Link to="/ourservices" className='link nav-link Services' onClick={lineLink}>Services</Link>
          <Link to="#" className='link programs position-relative nav-link' onClick={()=>{
            toggler();
            programLineLink();
          }} >
          Programs<IoIosArrowDown className='ms-1 mb-1'/>
          <Menu/>
          </Link>
          <HashLink to="/#ContactUs" className='link nav-link' onClick={lineLink}>Contact Us</HashLink>
          <HashLink to="/#AboutUs" className='link nav-link' onClick={lineLink}>About Us</HashLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    </div>
    </>
  )
}
export default Navagation

