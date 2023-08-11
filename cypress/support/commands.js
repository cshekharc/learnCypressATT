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
//this is imp for framework



// Cypress.Commands.add("firstNameonContactUspage",(firstName)=>{
//     cy.get("[name='first_name']").type(firstName).should("be.enabled").and("be.visible")
// })

// Cypress.Commands.add("lastNameonContactUspage",(lastName)=>{
//     cy.get("[placeholder='Last Name']").should("exist").and('be.visible').clear()
//     cy.get("[placeholder='Last Name']").type(lastName)
// })

// Cypress.Commands.add("emailonContactUspage",(email)=>{
//     cy.get("[name='email']").type(email)
// })

// Cypress.Commands.add("commentandSubmit",(comment)=>{
//     cy.get("[placeholder='Comments']").should('have.class', 'feedback-input').type(comment)
//     cy.get("[value='SUBMIT']").should("be.enabled").click()
//     cy.get("h1").should("include.text", "Thank You for your Message!")
// })

Cypress.Commands.add("contactUsForm",(fname, lname, email, comment)=>{
    cy.get("[name='first_name']").type(fname).should("be.enabled").and("be.visible")
    cy.get("[placeholder='Last Name']").should("exist").and('be.visible').clear()
    cy.get("[placeholder='Last Name']").type(lname)
    cy.get("[name='email']").type(email)
    cy.get("[placeholder='Comments']").should('have.class', 'feedback-input').type(comment)
    cy.get("[value='SUBMIT']").should("be.enabled").click()
    cy.get("h1").should("include.text", "Thank You for your Message!")
})