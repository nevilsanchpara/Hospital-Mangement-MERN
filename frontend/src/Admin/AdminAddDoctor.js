import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./../Sidebar";
import "./form.css";

const AdminAddDoctor = () => {
  const nav = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [graduation, setGraduation] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [department, setDepartment] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/doctor/register", {
        name,
        email,
        password,
        graduation,
        department,
        mobile,
        address,
        isVerified: "approved",
      })
      .then(function (response) {
        console.table(response.data);
        if (response.data.status === 200) {
          toast.success("Doctor Account Created Successfully!!");
          nav("/admin-dashboard");
        } else {
          toast.error("Internal Server Error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("iside hiii");
  };
  return (
    <>
      <AdminNavbar />
      <Sidebar />
      <div className="form-div">
        <form>
          <h1>Doctor Register form</h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="exampleInputEmail1" class="form-label">
              Graduation
            </label>
            <input
              type="grduation"
              class="form-control"
              id="graduation"
              onChange={(e) => setGraduation(e.target.value)}
            />
            <label for="inputMobile" class="form-label">
              Mobile
            </label>
            <input
              type="number"
              class="form-control"
              id="mobile"
              onChange={(e) => setMobile(e.target.value)}
            />
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="mobile"
              onChange={(e) => setAddress(e.target.value)}
            />
            <label for="inputDepartment" class="form-label">
              Department
            </label>
            <input
              type="text"
              class="form-control"
              id="mobile"
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <p>
            Exisitng user? <a href="/doctorlogin">click here</a>
          </p>
          <button type="submit" class="btn btn-primary" onClick={onSubmit}>
            Add
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default AdminAddDoctor;
