// ***********************************************************
// This example support/e2e.js (OLD: support/index.js) is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// runs once before all tests in the block if condition is true
before(() => {
  if (Cypress.env('applyRules')) {
    cy.visit('/scripts/catalogrules/apply_rules.php ')
  }
})

// now these commands run prior to every test
// across all files if condition is true
beforeEach(() => {

  if (Cypress.env('ignore_JS_Errors')) { // is this is true js errors will be ignored
    cy.on('uncaught:exception', (err, runnable) => {
      // return false to prevent the error from
      // failing this test
      return false
    })
  }



  // **************************************   JS FILES **********************************************

  cy.intercept({
    method: 'GET',
    url: Cypress.env('js_files_url'),
    hostname: Cypress.env('js_files_hostname'),
  }).as('configurator-js-files')

  // **************************************   JS FILES **********************************************
  cy.intercept('POST', '/checkout/onepage/savePayment').as('savePayment')
  cy.intercept('POST', '/checkout/onepage/saveBilling').as('saveBilling')
  cy.intercept('GET', '/checkout/onepage/progress?prevStep=payment').as('bestelluebersicht')

  // **************************************   INTERCPTION FOR PAYMENTS **********************************************

  cy.intercept({
    method: 'POST',
    url: Cypress.env('p2_url'),
    hostname: Cypress.env('pp_hostname'),
  }).as('p2')
})