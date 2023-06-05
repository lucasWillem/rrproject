import React, { FC, ReactNode } from "react";
import { StyledScreenContainer } from "./styles";

interface ScreenContainerProps {
  children: ReactNode;
}

const ScreenContainer: FC<ScreenContainerProps> = ({ children }) => {
  return <StyledScreenContainer>{children}</StyledScreenContainer>;
};

export { ScreenContainer };
