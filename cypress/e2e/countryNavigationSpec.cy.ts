describe('Country Navigation', () => {
  describe('Unauthorized Access', () => {
     it('redirects to Unauthorized page when trying to access countries without signing in', () => {
       cy.visit('http://localhost:3000/countries');
       cy.contains('Unauthorized');
     });
  });
 
  describe('Authenticated User', () => {
     beforeEach(() => {
       cy.visit('http://localhost:3000/login');
       cy.get('[data-testid="email"]').type('testUser@geo-app.com');
       cy.get('[data-testid="password"]').type('P@55w0rd@1');
       cy.get('[data-testid="submit-login"]').click();
     });
 
     it('navigates to ListOfCountriesPage after successful login', () => {
       cy.url().should('include', '/countries');
     });
 
     describe('Country Selection', () => {
       it('navigates to CountryPage and displays fetched country details when a country is clicked', () => {
         cy.get('[data-testid="country-item"]').first().then(($countryItem) => {
           const countryName = $countryItem.find('[data-testid="country-name"]').text().split(" ")[0].trim();
           cy.wrap($countryItem).click();
           cy.url().should('include', `/countries/:${countryName}`);
           cy.get('[data-testid="country-name"]').should('contain', countryName);
         });
       });
     });
  });
 });