import React, { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useCheckIfLoggedIn } from "../hooks/useCheckIfLoggedIn";

const PublicRoutes: FC = () => {
  const isAuthenticated = useCheckIfLoggedIn();

  return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
};

export { PublicRoutes };
