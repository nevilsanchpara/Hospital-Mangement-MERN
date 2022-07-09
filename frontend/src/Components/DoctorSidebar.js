import React from "react";
import "../Sidebar.css";
import { Link } from "react-router-dom";
const DoctorSidebar = () => {
  return (
    <div class="sidebar">
      <div className="imageWrapper mb-3">
        <img
          src="https://picsum.photos/200"
          id="profile-image"
          className="img-fluid"
          alt="profile"
        />
      </div>
      <Link to="/doctor-dashboard">
        <i class="fa fa-fw fa-home"></i> Dashboard
      </Link>
      <Link to="/doctor-patient">
        <i class="fa fa-fw fa-user"></i> Patient
      </Link>
    </div>
  );
};

export default DoctorSidebar;
