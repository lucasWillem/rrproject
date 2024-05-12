import { styled, Box, Button } from "@mui/material";

const StyledFallbackRenderer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  background: theme.palette.background.default,
}));


const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1)
}));

export { StyledFallbackRenderer, StyledButton };

