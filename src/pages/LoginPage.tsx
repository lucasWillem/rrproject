import React, { FC } from "react";
import { LoginForm } from "../components/containers/LoginForm";
import { ScreenContainer } from "../components/layouts/ScreenContainer";

export const LoginPage: FC = () => {
  return (
    <ScreenContainer>
     <LoginForm />
    </ScreenContainer>
  );
};
