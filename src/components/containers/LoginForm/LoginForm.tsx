import React, { FC, useState, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, TextField, Typography } from '@mui/material';

import { StyledLoginForm, StyledTextContainer } from './styles';
import { emailPattern, passwordPattern } from '../../../constants/regex';

import { isAuthenticatedUser } from '../../../utils/isAuthenticatedUser';
import { useDispatch } from 'react-redux';
import { showLoader } from '../../../redux/loaderSlice';
import { storeUser } from '../../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const jwtToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5';

  const toggleLoader = () => {
    dispatch(showLoader({ isVisible: true, variant: 'success' }));
  };

  const onLogin = (data: LoginFormInputs) => {
    const isAuthenticated = isAuthenticatedUser(data);

    setIsFormSubmitted(true);
    setIsAuthenticated(isAuthenticated);

    if (!isAuthenticated) return;

    toggleLoader();

    dispatch(storeUser({ ...data, jwtToken }));

    navigate('/countries');
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
              data-testid="email"
              onChange={(e) => {
                field.onChange(e);
                handleChange('email');
              }}
              label="Email"
              placeholder="Email"
              error={Boolean(errors.email)}
            />
          )}
          rules={{
            required: 'Email is required',
            pattern: {
              value: emailPattern,
              message: 'Please provide a valid email address',
            },
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              data-testid="password"
              onChange={(e) => {
                field.onChange(e);
                handleChange('password');
              }}
              label="Password"
              placeholder="Password"
              type="password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          )}
          rules={{
            required: 'Password is required',
            pattern: {
              value: passwordPattern,
              message: '8+ chars, 1 uppercase, 1 special char, 1 number',
            },
          }}
        />
      </StyledTextContainer>
      <Button
        data-testid="submit-login"
        disabled={!isValid}
        type="submit"
        variant="outlined"
      >
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

export default memo(LoginForm);
