import React, { FC, useEffect, memo } from "react";

import { Box } from "@mui/material";

import { BasicCountry, useFetchAllCountries } from "../../../hooks/useFetchAllCountries";
import { useDispatch } from "react-redux";
import { showLoader } from "../../../redux/loaderSlice";
import CountryCard from "../../library/CountryCard";
import { useNavigate } from "react-router-dom";
import { storeCountryName } from "../../../redux/countrySlice";
import { showSnackBar } from "../../../redux/snackBarSlice";
import { CardVariant } from "../../library/CountryCard/CountryCard";
import { AlertSeverity } from "../../library/SnackBar/SnackBar";
 
interface CountryListProps {
  limit: number;
}

const CountryList: FC<CountryListProps> = ({ limit }) => {

  const { data: listOfCountries, isFetching: isFetchingListOfCountries, error: errorFetchingCountryList } = useFetchAllCountries(limit);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showLoader({ isVisible: isFetchingListOfCountries, variant: "inherit" }));
  }, [isFetchingListOfCountries])


  useEffect(() => {
    if (errorFetchingCountryList) {
      dispatch(showSnackBar({
        isOpen: true,
        message: errorFetchingCountryList.message,
        severity: AlertSeverity.Error
      }));
    }
  }, [errorFetchingCountryList, dispatch]);


  const handleCountryClick = (countryName: string) => {
    dispatch(storeCountryName({ countryName }));
    navigate(`/countries/:${countryName}`);
  }

  const renderItem = (country: BasicCountry, i: number) => <CountryCard key={i} cardVariant={CardVariant.Basic} raised country={country} onClick={() => handleCountryClick(country.name.common)} />;

  return (
    <Box>
      {
        listOfCountries?.map((country: BasicCountry, i) => renderItem(country, i))
      }
    </Box>
  );
};

export default memo(CountryList);

