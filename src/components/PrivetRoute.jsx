import React, { use, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "./Loading";

const PrivetRoute = ({ children }) => {
  const { setLogedInUser, loading, logedInuser } = useContext(AuthContext);
  // console.log(loading);
  const location = useLocation();
  // console.log(location);
  // console.log(location.pathname);

  if (loading) {
    return <Loading></Loading>;
  }

  if (logedInuser && logedInuser?.email) {
    return children;
  }
  return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
};

export default PrivetRoute;
