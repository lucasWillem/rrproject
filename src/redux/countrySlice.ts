import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CountryState {
  countryName?: string;
}

const initialCountry: CountryState = {
  countryName: undefined,
};

const countrySlice = createSlice({
  name: 'country',
  initialState: initialCountry,
  reducers: {
    storeCountryName: (state, action: PayloadAction<CountryState>) => {
      const { countryName } = action.payload;
      state.countryName = countryName;
    },
    clearCountry: () => {
      return initialCountry;
    },
  },
});

export const { storeCountryName, clearCountry } = countrySlice.actions;
export default countrySlice.reducer;
