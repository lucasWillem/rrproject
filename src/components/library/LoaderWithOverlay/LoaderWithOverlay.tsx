import React, { FC, memo } from "react";
import { Box } from "@mui/material";
import Loader from "../Loader";
import { Variant } from "../../../redux/loaderSlice";

interface LoaderWithOverlayProps {
  isVisible: boolean;
  variant?: Variant;
}

const LoaderWithOverlay: FC<LoaderWithOverlayProps> = ({ isVisible, variant = 'inherit' }) => {
 return isVisible ? <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }}
  >
    <Loader isVisible={isVisible} />
  </Box> : null
}

export default  memo(LoaderWithOverlay);
