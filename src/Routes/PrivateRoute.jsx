import React from "react";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <TbFidgetSpinner className="mt-10 mx-auto  animate-spin" />;
  }
  // if (user) {
  //   return children;
  // }
  if (!loading && !user?.email) {
    return <Navigate to={"/login"} state={{ from: location }} replace="true" />;
  }
  return children;
};

PrivateRoute.propTypes = {};

export default PrivateRoute;
