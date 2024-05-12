import React, { FC, ReactNode, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import Loader from "../components/library/Loader";


import { useCheckIfLoggedIn } from "../hooks/useCheckIfLoggedIn";

interface RouterProps {
  NavBar: ReactNode;
}

const LoginPage = lazy(() =>
  import('../pages/LoginPage').then((module) => ({ default: module.LoginPage }))
);

const UnauthorizedPage = lazy(() =>
  import('../pages/UnauthorizedPage').then((module) => ({ default: module.UnauthorizedPage }))
);

const ListOfCountriesPage = lazy(() =>
  import('../pages/ListOfCountriesPage').then((module) => ({ default: module.ListOfCountriesPage }))
);

const CountryPage = lazy(() =>
  import('../pages/CountryPage').then((module) => ({ default: module.CountryPage }))
);


export const Router: FC<RouterProps> = ({ NavBar }) => {
  const isAuthenticated = useCheckIfLoggedIn();

  return (
    <BrowserRouter>
      {NavBar}
      <Suspense fallback={<Loader isVisible />}>
        <Routes>
          <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="/countries" element={<ListOfCountriesPage />} />
            <Route path="/countries/:name" element={<CountryPage />} />
          </Route>
          <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to="/login" replace />} />
          </Route>
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
