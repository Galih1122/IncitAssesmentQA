// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-downloadfile/lib/downloadFileCommand';
import 'cypress-file-upload';


Cypress.Commands.add('selectDropdown', (option) => {
    cy.get(':nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox').select(option);
  });
  
  Cypress.Commands.add('CItextboxName', () => {
    return cy.get(':nth-child(1) > .secondColumn > .gwt-TextBox');
  });

  Cypress.Commands.add('CItextboxCompany', () => {
    return cy.get(':nth-child(2) > .secondColumn > .gwt-TextBox');
  });

  Cypress.Commands.add('CItextboxTitle', () => {
    return cy.get(':nth-child(3) > .secondColumn > .gwt-TextBox');
  });

  Cypress.Commands.add('CItextboxPhone', () => {
    return cy.get(':nth-child(4) > .secondColumn > .gwt-TextBox');
  });

  Cypress.Commands.add('CItextboxEmail', () => {
    return cy.get(':nth-child(5) > .secondColumn > .gwt-TextBox');
  });

  Cypress.Commands.add('CItextboxAddress', () => {
    return cy.get(':nth-child(6) > .secondColumn > .gwt-TextBox');
  });

  Cypress.Commands.add('CItextboxAddress2', () => {
    return cy.get(':nth-child(7) > .secondColumn > .gwt-TextBox');
  });
  
  Cypress.Commands.add('CItextboxWebsite', () => {
    return cy.get(':nth-child(8) > .secondColumn > .gwt-TextBox');
  });

  Cypress.Commands.add('CItextboxMemo', () => {
    return cy.get(':nth-child(9) > .secondColumn > .gwt-TextBox');
  });

  Cypress.Commands.add('selectDropdownEncoding', (option) => {
    cy.get(':nth-child(10) > .secondColumn > .gwt-ListBox').select(option);
  });

  Cypress.Commands.add('selectDropdownBCSize', (option) => {
    cy.get(':nth-child(4) > :nth-child(1) > table > tbody > :nth-child(1) > .secondColumn > .gwt-ListBox').select(option);
  });

  Cypress.Commands.add('selectDropdownEC', (option) => {
    cy.get(':nth-child(2) > .secondColumn > .gwt-ListBox').select(option);
  });

  Cypress.Commands.add('selectDropdownCE', (option) => {
    cy.get(':nth-child(3) > .secondColumn > .gwt-ListBox').select(option);
  });

  Cypress.Commands.add('CIGenerateButton', () => {
    return cy.get('.gwt-Button')
  });


  


  

 
  

  