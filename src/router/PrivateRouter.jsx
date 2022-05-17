import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRouter = ({children}) => {
  const user = useSelector((state) => state.auth);
  return user?.isAuthenticated ? children :  <Navigate to="/login" />
};