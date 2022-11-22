import MobileMenu from "../../../../components/mobileMenu/MobileMenu";
import { Outlet ,NavLink} from "react-router-dom";
const Saint = () => {
  return (
    <>
    <div className="main-programs">
    <MobileMenu />
    <h2>
      Residency By Investment
      <br />
      In Saint Lucia
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
    investment plan
  </NavLink>
  <NavLink to="Procedures" className="Link" >
    Procedures and time
  </NavLink>
    </nav>
    </div>
  </div>
  <Outlet/>
    </>
  )
}

export default Saint