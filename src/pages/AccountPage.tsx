import React, { FC } from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { ScreenContainer } from "../components/layouts/ScreenContainer";

export const AccountPage: FC = () => {
  const { email } = useSelector((state: RootState) => state.user);
  return (
    <ScreenContainer>
      <Typography variant="overline">Email Address: {email}</Typography>
    </ScreenContainer>
  );
};
