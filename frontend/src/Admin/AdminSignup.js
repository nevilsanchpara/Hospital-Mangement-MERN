import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./adminLogin.css";
import Navbar from "./../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "./../Redux/Services/AdminService";
import Validation from "./../Components/Validation";

const AdminSignup = (props) => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const myObj = {
      name,
      email,
      password,
      phone,
    };
    // axios
    //   .post("/admin/register", {
    //     name,
    //     email,
    //     password,
    //     phone,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //     console.log(response.data.status);
    //     if (response.data.status === 200) {
    //       toast.success("Registration Successfully done. Now do login!");
    //       setTimeout(() => {
    //         console.log("Hello, World!");
    //         nav("/adminlogin");
    //       }, 5000);
    //     } else {
    //       toast.error("Interal Server Error");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const result = await props.signup(myObj);
    if (result) {
      toast.success("Registration Successfully done. Now do login!");
      setTimeout(() => {
        nav("/adminlogin");
      }, 5000);
      // alert("done");
    }
  };

  const { loading, resError = {} } = props.admin;
  // console.log(loading);
  // console.log(resError);
  return (
    <>
      <Navbar />
      <div className="form-div">
        <form>
          <h1>Admin form</h1>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            {/* <label className="form-label">{resError.name}</label> */}
            <Validation error={resError.name} />
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Validation error={resError.email} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Validation error={resError.password} />
            <label className="form-label">Phone</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Validation error={resError.phone} />
            Exisitng user? <a href="/adminlogin">click here</a>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={onSubmit}
            disabled={loading}
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  signup,
})(AdminSignup);

// export default AdminSignup;
