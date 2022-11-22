import React, { useEffect } from 'react'
import './Cyprs.css'
import MobileMenu from "../../../../components/mobileMenu/MobileMenu";
import { Outlet ,NavLink} from "react-router-dom";

const Cyprs = () => {
  useEffect(()=>{
    document.title='Avion Citizenship | Cyprus'
  },[])
  return (
    <>
   <>
   <div className="main-programs Cyprus">
   <MobileMenu />
   <h2>
     Residency By Investment
     <br />
     In Cyprus
   </h2>
   <div className="program-sections">
   <nav>
   <NavLink to="about" className="Link ">
   About the country
 </NavLink>
 <NavLink to="benefits" className="Link" >
 Advantages
 </NavLink>
 <NavLink to="investment" className="Link" >
   Investment plan
 </NavLink>
 <NavLink to="Procedures" className="Link" >
   Procedures and time
 </NavLink>
   </nav>
   </div>
 </div>
 <Outlet/>
   </>
    </>
  )
}

export default Cyprs