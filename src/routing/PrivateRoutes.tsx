import React, { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useCheckIfLoggedIn } from "../hooks/useCheckIfLoggedIn";

const PrivateRoutes: FC = () => {
  const isAuthenticated = useCheckIfLoggedIn();

  return isAuthenticated ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export { PrivateRoutes };
