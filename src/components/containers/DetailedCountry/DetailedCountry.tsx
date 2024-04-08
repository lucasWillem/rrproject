import React, { FC, useEffect } from "react";

import { Box } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { showLoader } from "../../../redux/loaderSlice";
import CountryCard from "../../library/CountryCard";
import { useFetchCountryByName } from "../../../hooks/useFetchCountryByName";
import { RootState } from "../../../redux/rootReducer";
import { showSnackBar } from "../../../redux/snackBarSlice";
import { CardVariant } from "../../library/CountryCard/CountryCard";
import { AlertSeverity } from "../../library/SnackBar/SnackBar";


interface DetailedCountryProps { }

export const DetailedCountry: FC<DetailedCountryProps> = () => {

  const { countryName } = useSelector((state: RootState) => state.country);

  const dispatch = useDispatch();

  const {data: country, isFetching: isFetchingCountryData, error: errorFetchingCountryData } = useFetchCountryByName(countryName ?? "United States");

  useEffect(() => {
    dispatch(showLoader({ isVisible: isFetchingCountryData, variant: "inherit" }));
  }, [isFetchingCountryData])


  useEffect(() => {
    if (errorFetchingCountryData) {
      dispatch(showSnackBar({
        isOpen: true,
        message: errorFetchingCountryData.message,
        severity: AlertSeverity.Error
      }));
    }
  }, [errorFetchingCountryData, dispatch]);

  
  return (  
    <Box>
      {
        country && <CountryCard cardVariant={CardVariant.Detailed} containerStyle={{ width: 300 }} raised country={country} />
      }
    </Box>
  );
};
