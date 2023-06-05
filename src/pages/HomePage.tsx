import React, { FC } from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { ScreenContainer } from "../components/layouts/ScreenContainer";

export const HomePage: FC = () => {
  const { email } = useSelector((state: RootState) => state.user);

  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const userName = email.split("@")[0];

  return (
    <ScreenContainer>
      <Typography variant="body1">
        Welcome back {capitalizeFirstLetter(userName)}!
      </Typography>
    </ScreenContainer>
  );
};
