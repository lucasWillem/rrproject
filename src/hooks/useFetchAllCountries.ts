import { UseQueryResult, useQuery } from 'react-query';

export type BasicCountry = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca2: string;
};

interface FetchError {
  message: string;
}

const fetchAllCountries = async (limit: number): Promise<BasicCountry[]> => {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,cca2',
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const countries = await response.json();
  // Limit the results dynamically
  return countries.slice(0, limit);
};

const useFetchAllCountries = (
  limit: number,
): UseQueryResult<BasicCountry[], FetchError> & { isLoading: boolean } =>
  useQuery<BasicCountry[], FetchError>('countries', () =>
    fetchAllCountries(limit),
  );

export { useFetchAllCountries };
