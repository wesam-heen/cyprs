import React, { useEffect } from "react";
import MobileMenu from "../../../../components/mobileMenu/MobileMenu";
import { Outlet, NavLink } from "react-router-dom";
import "./Dominica.css";
const Portugal = () => {
  useEffect(() => {
    document.title = "Avion Citizenship | Dominica";
  }, []);
  return (
    <>
      <div className="main-programs Dominica">
        <MobileMenu />
        <h2>
          Citizenship By Investment
          <br />
          In Dominica
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

export default Portugal;
