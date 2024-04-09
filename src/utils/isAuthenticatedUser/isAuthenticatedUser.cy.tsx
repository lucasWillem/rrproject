import { isAuthenticatedUser } from "./isAuthenticatedUser";

describe('isAuthenticatedUser Utility', () => {
 it('returns true for correct credentials', () => {
    const userInput = {
      email: 'testUser@geo-app.com',
      password: 'P@55w0rd@1',
    };

    expect(isAuthenticatedUser(userInput)).to.be.true;
 });

 it('returns false for incorrect credentials', () => {
    const userInput = {
      email: 'wrongUser@geo-app.com',
      password: 'wrongPassword',
    };

    expect(isAuthenticatedUser(userInput)).to.be.false;
 });
});