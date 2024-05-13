import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Variant = 'success' | 'secondary' | 'inherit';

export interface LoaderState {
  isVisible: boolean;
  variant?: Variant;
}

const initialLoader: LoaderState = {
  isVisible: false,
  variant: 'inherit',
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState: initialLoader,
  reducers: {
    showLoader: (state, action: PayloadAction<LoaderState>) => {
      const { isVisible, variant = 'inherit' } = action.payload;
      state.isVisible = isVisible;
      state.variant = variant;
    },
  },
});

export const { showLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
