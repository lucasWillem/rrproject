import React, { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button, TextField, Typography } from "@mui/material";

import { StyledLoginForm, StyledTextContainer } from "./styles";
import { emailPattern, passwordPattern } from "../../../constants/regex";

import { isAuthenticatedUser } from "../../../utils/isAuthenticatedUser";
import { useDispatch } from "react-redux";
import { showLoader } from "../../../redux/loaderSlice";
import { storeUser } from "../../../redux/userSlice";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleLoader = () => {
    dispatch(showLoader({ isVisible: true, variant: "success" }));

    setTimeout(() => dispatch(showLoader({ isVisible: false })), 2000);
  };

  const onLogin = (data: LoginFormInputs) => {
    const isAuthenticated = isAuthenticatedUser(data);

    setIsFormSubmitted(true);
    setIsAuthenticated(isAuthenticated);

    if (!isAuthenticated) return;

    toggleLoader();

    dispatch(storeUser(data));

    navigate("/home");
  };

  const handleChange = (name: keyof LoginFormInputs) => {
    trigger(name);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onLogin)}>
      <Typography variant="h6">Please Login</Typography>
      <StyledTextContainer>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              onChange={(e) => {
                field.onChange(e);
                handleChange("email");
              }}
              label="Email"
              placeholder="Email"
              error={Boolean(errors.email)}
            />
          )}
          rules={{
            required: "Email is required",
            pattern: {
              value: emailPattern,
              message: "Please provide a valid email address",
            },
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              onChange={(e) => {
                field.onChange(e);
                handleChange("password");
              }}
              label="Password"
              placeholder="Password"
              type="password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          )}
          rules={{
            required: "Password is required",
            pattern: {
              value: passwordPattern,
              message: "8+ chars, 1 uppercase, 1 special char, 1 number",
            },
          }}
        />
      </StyledTextContainer>
      <Button disabled={!isValid} type="submit" variant="outlined">
        Submit
      </Button>

      {isFormSubmitted && !isAuthenticated && (
        <Typography paragraph>
          Credentials incorrect. Please try again.
        </Typography>
      )}
    </StyledLoginForm>
  );
};
