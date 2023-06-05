import { isEqual } from "lodash";

const isAuthenticatedUser = (userInput: {
  email: string;
  password: string;
}) => {
  const authenticatedUser = {
    email: "darryn@randrtechsa.com",
    password: "P@55w0rd@1",
  };

  return isEqual(authenticatedUser, userInput);
};

export { isAuthenticatedUser };
