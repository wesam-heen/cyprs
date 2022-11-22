import React, { useEffect } from "react";
import MobileMenu from "../../../../components/mobileMenu/MobileMenu";
import { Outlet, NavLink } from "react-router-dom";
import "./Antigua .css";
const Antigua = () => {
  useEffect(() => {
    document.title = "Avion Citizenship | Antigua";
  }, []);
  return (
    <>
      <div className="main-programs antigua">
        <MobileMenu />
        <h2>
          Citizenship By Investment
          <br />
          Antigua and Barbuda
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

export default Antigua;
