import { styled, Box } from "@mui/material";

const StyledScreenContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
  height: "70%",
}));

export { StyledScreenContainer };
