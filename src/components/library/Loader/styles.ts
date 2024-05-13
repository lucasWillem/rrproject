import { CircularProgress, styled } from '@mui/material';

const StyledLoader = styled(CircularProgress)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export { StyledLoader };
