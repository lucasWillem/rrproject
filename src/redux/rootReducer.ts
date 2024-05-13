import { combineReducers } from 'redux';
import userReducer, { UserState } from './userSlice';
import loaderReducer, { LoaderState } from './loaderSlice';
import countryReducer, { CountryState } from './countrySlice';
import snackbarReducer, { SnackBarState } from './snackBarSlice';

export interface RootState {
  user: UserState;
  loader: LoaderState;
  country: CountryState;
  snackbar: SnackBarState;
}

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  country: countryReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
