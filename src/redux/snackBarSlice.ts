import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertColor } from "@mui/material";
import { AlertSeverity } from "../components/library/SnackBar/SnackBar";



export interface SnackBarState {
  message: string;
  isOpen: boolean;
  severity: AlertColor
}

const initialSnackBar: SnackBarState = {
  message: '',
  isOpen: false,
  severity: AlertSeverity['Error']
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: initialSnackBar,
  reducers: {
    showSnackBar: (state, action: PayloadAction<SnackBarState>) => {
      const { isOpen, message, severity } = action.payload;
      state.isOpen = isOpen;
      state.message = message;
      state.severity = severity;
    },
    resetSnackBar: () => {
      return initialSnackBar;
    },
  },
});

export const { showSnackBar, resetSnackBar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
