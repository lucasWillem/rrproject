import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { Loader } from "../../library/Loader";
import { StyledAppContainer } from "./styles";

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer: FC<AppContainerProps> = ({ children }) => {
  const {isVisible,variant} = useSelector((state: RootState) => state.loader);

  return (
    <StyledAppContainer>
      <Loader
        isVisible={isVisible}
        variant={variant}
      />
      {children}
    </StyledAppContainer>
  );
};

export { AppContainer };
