import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import MyProfile from "../components/MyProfile";

const PublicRoute = ({ children }) => {
  const { loading, logedInuser } = useContext(AuthContext);
  if (loading) return <Loading></Loading>;
  if (logedInuser) return <MyProfile></MyProfile>;
  return children;
};

export default PublicRoute;
