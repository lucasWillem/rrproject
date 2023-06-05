import { Typography } from "@mui/material";
import React, { FC } from "react";
import { ScreenContainer } from "../components/layouts/ScreenContainer";

export const UnauthorizedPage: FC = () => {
  return (
    <ScreenContainer>
      <Typography variant="body1">Unauthorized</Typography>
    </ScreenContainer>
  );
};
