import MobileMenu from "../../../../components/mobileMenu/MobileMenu";
import { Outlet, NavLink } from "react-router-dom";
import "./Greece.css";
import { useEffect } from "react";
const Greece = () => {
  useEffect(() => {
    document.title = "Avion Citizenship | Greece";
  }, []);
  return (
    <>
      <div className="main-programs Greece">
        <MobileMenu />
        <h2>
          Residency By Investment <br />
          In Greece
        </h2>
        <div className="program-sections">
          <nav>
            <NavLink to="about" className="Link ">
              About the country
            </NavLink>
            <NavLink to="benefits" className="Link">
              Advantages
            </NavLink>
            <NavLink to="investment" className="Link">
              Investment plan
            </NavLink>
            <NavLink to="Procedures" className="Link">
              Procedures and time
            </NavLink>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Greece;
