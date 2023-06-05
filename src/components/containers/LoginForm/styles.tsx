import { Box, styled } from "@mui/material";

const StyledLoginForm = styled("form")(({ theme }) => ({
  color: theme.palette.primary.main,
  width: "50%",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: theme.spacing(2),

  [theme.breakpoints.down("lg")]: {
    width: "60%",
  },

  [theme.breakpoints.down("md")]: {
    width: "70%",
  },

  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const StyledTextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "70%",

  [theme.breakpoints.down("lg")]: {
    width: "80%",
  },

  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

export { StyledLoginForm, StyledTextContainer };
