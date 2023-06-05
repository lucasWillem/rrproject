import { combineReducers } from "redux";
import userReducer, { UserState } from "./userSlice";
import loaderReducer, { LoaderState } from "./loaderSlice";

export interface RootState {
  user: UserState;
  loader: LoaderState;
}

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
});

export default rootReducer;
