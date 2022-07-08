import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { setCommonType } from "./../Redux/Actions/CommonAction";
import AdminNavigation from "./AdminNavigation";
import PatientNavigation from "./PatientNavigation";
import DoctorNavigation from "./DoctorNavigation";
import AuthNavigation from "./AuthNavigation";
const IndexNavigation = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  useEffect(() => {
    let type = localStorage.getItem("type");
    // setCommonType;
    dispatch(setCommonType(type));
  }, [dispatch]);
  const { type } = props.common;
  console.log("type", type);
  return type === "admin" ? (
    <AdminNavigation />
  ) : type === "patient" ? (
    <PatientNavigation />
  ) : type === "doctor" ? (
    <DoctorNavigation />
  ) : (
    <AuthNavigation />
  );
};

const mapStateToProps = (state) => ({
  // admin: state.admin,
  common: state.common,
});

export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // login,
})(IndexNavigation);
