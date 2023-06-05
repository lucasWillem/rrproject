import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string;
  password: string;
}

const initialUser: UserState = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    storeUser: (state, action: PayloadAction<UserState>) => {
      const {email,password} = action.payload;
      state.email=email;
      state.password=password;
    },
    clearUser: () => {
      return initialUser;
    },
  },
});

export const { storeUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
