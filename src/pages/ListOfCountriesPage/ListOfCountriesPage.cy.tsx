/// <reference types="cypress" />

import { ListOfCountriesPage } from './ListOfCountriesPage';
import { render } from '../../../cypress/test_utils/wrapper';

describe('<ListOfCountriesPage />', () => {
   beforeEach(() => {
      render(<ListOfCountriesPage />, {});
   });
   it('renders the <CountryList/> container containing 10 <CountryCard/> items', () => {
      cy.get('[data-testid="country-name"]').should('have.length', 10);
   });
});