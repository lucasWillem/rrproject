import React, { FC, ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { UnauthorizedPage } from "../pages/UnauthorizedPage";
import { ListOfCountriesPage } from "../pages/ListOfCountriesPage";
import { CountryPage } from "../pages/CountryPage";
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
          <Route path="/countries" element={<ListOfCountriesPage />} />
          <Route path="/countries/:name" element={<CountryPage/>} />
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
