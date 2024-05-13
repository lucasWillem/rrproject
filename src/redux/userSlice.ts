import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  password: string;
  jwtToken: string;
}

const initialUser: UserState = {
  email: '',
  password: '',
  jwtToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    storeUser: (state, action: PayloadAction<UserState>) => {
      const { email, password, jwtToken } = action.payload;
      state.email = email;
      state.password = password;
      state.jwtToken = jwtToken;
    },
    clearUser: () => {
      return initialUser;
    },
  },
});

export const { storeUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
