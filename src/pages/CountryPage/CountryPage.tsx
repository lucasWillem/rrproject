import React, { FC } from "react";

import DetailedCountry from "../../components/containers/DetailedCountry";

export const CountryPage: FC = () => {
  return (
    <DetailedCountry data-testid="detailed-country" />
  );
};