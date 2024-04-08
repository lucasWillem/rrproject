import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

/**
 * A custom React hook to check if the user is logged in.
 * 
 * This hook uses the `useSelector` hook from `react-redux` to access the user state from the Redux store.
 * It then checks if all values within the user object are not empty strings, indicating that the user is logged in.
 * 
 * @returns {boolean} - Returns `true` if the user is logged in (i.e., all user object values are not empty strings), otherwise `false`.
 * 
 * @example
 * // Usage in a component
 * const isLoggedIn = useCheckIfLoggedIn();
 * if (isLoggedIn) {
 *   // User is logged in, perform actions accordingly
 * } else {
 *   // User is not logged in, redirect or show login prompt
 * }
 */


const useCheckIfLoggedIn = () => {
  const user = useSelector((state: RootState) => state.user);

  return Object.values(user).every((value) => !!value);
};

export { useCheckIfLoggedIn };