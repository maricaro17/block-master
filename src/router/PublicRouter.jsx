import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRouter = ({ children }) => {
  const user = useSelector((state) => state.auth);
  return user?.isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRouter;
