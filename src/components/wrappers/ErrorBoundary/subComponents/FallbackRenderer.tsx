import React, { FC } from "react";
import { Typography } from "@mui/material";
import { useErrorBoundary } from "react-error-boundary";

import { StyledButton, StyledFallbackRenderer } from "./styles";

interface FallbackRendererProps { }

const FallbackRenderer: FC<FallbackRendererProps> = () => {

  const { resetBoundary } = useErrorBoundary();

  return (
    <StyledFallbackRenderer>
      <Typography variant="body1">
        Something went wrong:
      </Typography>
      <Typography variant="body1">
        Please try again.
      </Typography>
      <StyledButton variant="outlined" onClick={resetBoundary}>
        Refresh
      </StyledButton>
    </StyledFallbackRenderer>
  );
};

export { FallbackRenderer };
