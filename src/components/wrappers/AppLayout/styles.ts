import { styled, Box } from "@mui/material";

const StyledAppLayout = styled(Box)(({ theme }) => ({
  margin: theme.spacing(10),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export { StyledAppLayout };
