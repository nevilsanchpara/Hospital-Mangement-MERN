import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
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
      <Link to="/admin-dashboard">
        <i class="fa fa-fw fa-home"></i> Dashboard
      </Link>
      <Link to="/admin-doctor">
        <i class="fa fa-fw fa-wrench"></i> Doctor
      </Link>
      <Link to="/admin-patient">
        <i class="fa fa-fw fa-user"></i> Patient
      </Link>
      <Link to="/admin-appointment">
        <i class="fa fa-fw fa-envelope"></i> Appointment
      </Link>
    </div>
  );
};

export default Sidebar;
