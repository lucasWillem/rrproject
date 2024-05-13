import React, { FC, useMemo } from 'react';

import CountryList from '../../components/containers/CountryList';

export const ListOfCountriesPage: FC = () => {
  const limit = useMemo(() => 10, []);

  return <CountryList limit={limit} data-testid="country-list" />;
};
