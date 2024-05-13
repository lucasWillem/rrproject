import React, { FC, memo } from 'react';
import { Variant } from '../../../redux/loaderSlice';
import { StyledLoader } from './styles';

interface LoaderProps {
  isVisible: boolean;
  variant?: Variant;
}

const Loader: FC<LoaderProps> = ({ isVisible, variant = 'inherit' }) => {
  return isVisible ? <StyledLoader color={variant} /> : null;
};

export default memo(Loader);
