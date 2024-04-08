import React, { FC } from "react";
import { StyledSnackBar } from "./styles";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { SnackBarState, resetSnackBar } from "../../../redux/snackBarSlice";

export enum AlertSeverity {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}

const SnackBar: FC<SnackBarState> = ({ message, isOpen, severity = AlertSeverity.Info }) => {

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(resetSnackBar());
  };

  return (<StyledSnackBar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
    <Alert severity={severity} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </StyledSnackBar>)
};

export { SnackBar };
