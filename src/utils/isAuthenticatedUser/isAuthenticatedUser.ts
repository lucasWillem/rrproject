import { isEqual } from "lodash";

/**
 * Checks if the provided user input matches the predefined authenticated user credentials.
 * 
 * This function compares the input user's email and password against a hardcoded authenticated user's credentials.
 * It uses the `isEqual` function from `lodash` to perform a deep comparison of the objects.
 * 
 * @param {Object} userInput - An object containing the email and password to be checked.
 * @param {string} userInput.email - The email of the user to be authenticated.
 * @param {string} userInput.password - The password of the user to be authenticated.
 * 
 * @returns {boolean} - Returns `true` if the user input matches the authenticated user's credentials, otherwise `false`.
 * 
 * @example
 * // Usage
 * const isAuthenticated = isAuthenticatedUser({ email: 'testUser@geo-app.com', password: 'P@55w0rd@1' });
 * if (isAuthenticated) {
 *   console.log('User is authenticated');
 * } else {
 *   console.log('User is not authenticated');
 * }
 */

const isAuthenticatedUser = (userInput: {
  email: string;
  password: string;
}) => {
  const authenticatedUser = {
    email: "testUser@geo-app.com",
    password: "P@55w0rd@1",
  };

  return isEqual(authenticatedUser, userInput);
};
  
export { isAuthenticatedUser };
