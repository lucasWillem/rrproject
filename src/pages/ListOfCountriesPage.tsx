import React, { FC } from "react";

import CountryList from "../components/containers/CountryList";

export const ListOfCountriesPage: FC = () => {
  return (
    <CountryList limit={10} />
  );
};


