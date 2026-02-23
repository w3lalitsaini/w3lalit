import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  if (adminOnly && user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
