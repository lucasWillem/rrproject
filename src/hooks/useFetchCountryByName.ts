import { UseQueryResult, useQuery } from 'react-query';

export type SpecificCountry = {
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
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    [key: string]: number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
};

interface FetchError {
  message: string;
}

const fetchCountryByName = async (
  countryName: string,
): Promise<SpecificCountry | null> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`,
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const countries = await response.json();
  // Return the first country in the array or null if the array is empty
  return countries.length > 0 ? countries[0] : null;
};

const useFetchCountryByName = (
  countryName: string,
): UseQueryResult<SpecificCountry | null, FetchError> & {
  isLoading: boolean;
} =>
  useQuery<SpecificCountry | null, FetchError>(['country', countryName], () =>
    fetchCountryByName(countryName),
  );

export { useFetchCountryByName };
