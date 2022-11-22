import MobileMenu from "../../../../components/mobileMenu/MobileMenu";
import { Outlet, NavLink } from "react-router-dom";
import "./Saint.css";
import { useEffect } from "react";
const Saint = () => {
  useEffect(() => {
    document.title = "Avion Citizenship | Saint Lucia";
  }, []);
  return (
    <>
      <div className="main-programs Lucia">
        <MobileMenu />
        <h2>
          Citizenship By Investment
          <br />
          In Saint Lucia
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

export default Saint;
