import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

const useCheckIfLoggedIn = () => {
  const user = useSelector((state: RootState) => state.user);

  return Object.values(user).every((value) => !!value);
};

export { useCheckIfLoggedIn };
