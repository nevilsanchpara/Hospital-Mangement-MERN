import React, { useState } from "react";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Sidebar";
import { connect } from "react-redux";
import { signup } from "./../Redux/Services/PatientService";
import Validation from "./../Components/Validation";

const AdminAddPatient = (props) => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [symptom, setSymptom] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.table(name, email, password, phone, symptom);
    // axios
    //   .post("/patient/register", {
    // name,
    // email,
    // password,
    // phone,
    // symptom,
    //   })
    //   .then(function (response) {
    //     console.log(response.data.status);
    //     if (response.data.status === 200) {
    //       toast.success("Patient added succesfully!");
    //       setTimeout(() => {
    //         nav("/admin-dashboard");
    //       }, 2500);
    //     } else {
    //       toast.error("Interal Server Error");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const myobj = { name, email, password, phone, symptom };
    let result = await props.signup(myobj);
    if (result) {
      nav("/admin-dashboard");
    }
  };
  const { loading, resError = {} } = props.patient;

  return (
    <>
      <div className="form-div">
        <form>
          <h1>Create Patient Account</h1>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
            />
            <Validation error={resError.name} />

            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Validation error={resError.email} />
          </div>
          <div className="mb-1">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="pass"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Validation error={resError.password} />
          </div>
          <label className="form-label">Phone</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Validation error={resError.phone} />

          <div className="mb-3">
            <label className="form-label">Symptoms</label>
            <input
              type="text"
              className="form-control"
              id="symptoms"
              onChange={(e) => setSymptom(e.target.value)}
            />
            <Validation error={resError.symptom} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Admit
          </button>
          <ToastContainer autoClose={2000} />
        </form>
      </div>
    </>
  );
};

// export default AdminAddPatient;
const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  signup,
})(AdminAddPatient);
