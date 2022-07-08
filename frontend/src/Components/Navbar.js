import React, { useEffect, useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { FaHospitalUser, FaHospitalAlt } from "react-icons/fa";
import { MdOutlineSick } from "react-icons/md";
import logo from "../images/logo.png";

import "../Css/navbar.css";
const Navbar = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("user")));
  }, []);
  if (data) {
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Hospital Management
      </a>
      <a className="navbar-brand" href="/">
        Name
      </a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/patientlogin">
            Logout
          </a>
        </div>
      </div>
    </nav>;
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Hospital Management
      </a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/adminlogin">
            Admin <RiAdminLine className="admin-icon" />
          </a>
          <a className="nav-item nav-link" href="/doctorlogin">
            Doctor <FaHospitalUser />
          </a>
          <a className="nav-item nav-link" href="/patientlogin">
            Patient
            <MdOutlineSick />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
