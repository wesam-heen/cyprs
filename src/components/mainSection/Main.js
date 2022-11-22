import { useEffect } from "react";
import { Container } from "react-bootstrap";
import MobileMenu from "../mobileMenu/MobileMenu";
import SearchInput from "../searchinput/SearchInput";
import SocialIcons from "../socialIcons/SocialIcons";
import "./main.css";



const Main = () => {
  useEffect(()=>{
    document.title='Avion Citizenship'
  },[])
  return (
    <>
      <div className="main ">
        <MobileMenu/>
        <SocialIcons/>
        <Container>
          <div className="row">
            <div className="col-12">
              <div className="info p-0">
                <h2>
                  <span>Residency</span>
                  <br /> By Investment
                </h2>
                <p>
                  Our programs offer you a chance to obtain a second passport
                  that gives you freedom of movement.
                </p>
                <SearchInput className='search'/>
              </div>
              <button>Your Vision, Our Method</button>
            </div>
          </div>
          
        </Container>
      </div>
    </>
  );
};

export default Main;
