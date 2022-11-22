import React, { useEffect } from "react";
import MobileMenu from "../../../../components/mobileMenu/MobileMenu";
import { Outlet, NavLink } from "react-router-dom";
import "./Nevis.css";
const Nevis = () => {
  useEffect(() => {
    document.title = "Avion Citizenship | St.Kitts and Nevis";
  }, []);
  return (
    <>
      <div className="main-programs Nevis">
        <MobileMenu />
        <h2>
          Citizenship By Investment
          <br />
          St.Kitts and Nevis
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

export default Nevis;
