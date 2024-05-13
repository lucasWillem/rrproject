/// <reference types="cypress" />

import { CountryPage } from './CountryPage';
import { render } from '../../../cypress/test_utils/wrapper';

describe('CountryPage', () => {
  beforeEach(() => {
    render(<CountryPage />, {});
  });
  it('renders the default selected country', () => {
    cy.contains('United States');
  });
});
