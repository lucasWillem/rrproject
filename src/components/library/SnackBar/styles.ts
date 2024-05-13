import { Snackbar, styled } from '@mui/material';

const StyledSnackBar = styled(Snackbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export { StyledSnackBar };
