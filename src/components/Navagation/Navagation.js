import logo1 from '../../assests/images/logo1.png'
import logo2 from '../../assests/images/logo2.png'
import { IoIosArrowDown } from "react-icons/io";
import './Navagation.css';
import Menu from '../menu/Menu'
import { Link } from "react-router-dom";
import{Container,Navbar,Nav} from 'react-bootstrap' 


const toggler=()=>{
    document.querySelector('.menu').classList.toggle('active-drop')
}

const lineLink=(e)=>{
  const links=document.querySelectorAll('.nav-link');
  links.forEach(link=>link.classList.remove('active-class'))
  e.target.classList.add('active-class')
}

const Navagation = () => {
  return (
   <>
    <div className='main-nav-bar'>
    <Navbar bg="white" expand="lg" >
    <Container>
      <Navbar.Brand href="#home">
      <img src={logo1} alt='logo' className='logo1'/>
      <img src={logo2} alt='logo' className='logo2'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/" className='link nav-link active-class' onClick={lineLink}>Home</Link>
          <Link to="/ourservices" className='link nav-link' onClick={lineLink}>Services</Link>
          <Nav.Link href="#" className='link programs position-relative' onClick={toggler} >
          Programs<IoIosArrowDown className='ms-1 mb-1'/>
          <Menu/>
          </Nav.Link>
          <Nav.Link href="#ContactUs" className='link' onClick={lineLink}>Contact Us</Nav.Link>
          <Nav.Link href="#AboutUs" className='link' onClick={lineLink}>About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    </div>
    </>
  )
}
export default Navagation

