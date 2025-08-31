// src/routes/PrivateRoute.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = ({ allowedRoles }) => {
  // You can add logic here later for role-based access
  return <Outlet />;
};

export default PrivateRoute;
