import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import { StyledAppLayout } from './styles';
import SnackBar from '../../library/SnackBar';
import LoaderWithOverlay from '../../library/LoaderWithOverlay';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const { isVisible, variant } = useSelector(
    (state: RootState) => state.loader,
  );
  const { isOpen, message, severity } = useSelector(
    (state: RootState) => state.snackbar,
  );

  return (
    <StyledAppLayout>
      <LoaderWithOverlay isVisible={isVisible} variant={variant} />
      <SnackBar message={message} isOpen={isOpen} severity={severity} />
      {children}
    </StyledAppLayout>
  );
};

export { AppLayout };
