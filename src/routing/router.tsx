import React, { FC, ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { AccountPage } from "../pages/AccountPage";
import { UnauthorizedPage } from "../pages/UnauthorizedPage";
import { useCheckIfLoggedIn } from "../hooks/useCheckIfLoggedIn";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

interface RouterProps {
  NavBar: ReactNode;
}

export const Router: FC<RouterProps> = ({ NavBar }) => {
  const isAuthenticated = useCheckIfLoggedIn();

  return (
    <BrowserRouter>
      {NavBar}
      <Routes>
        <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
        <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Route>
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
      </Routes>
    </BrowserRouter>
  );
};
