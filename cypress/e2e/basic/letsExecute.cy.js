/// <reference types="cypress" />

describe("it is first test suite", function(){
    it("visit website", function(){
        cy.visit("https://www.cypress.io/") // .visit() .get()
        //https://www.cypress.io/
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('test with studio', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://www.cypress.io/');
        cy.get('.mt-\\[32px\\] > .text-indigo-500').click();
        cy.get(':nth-child(2) > .menu__list-item-collapsible > .menu__link').click();
        cy.get(':nth-child(2) > .menu__list > :nth-child(1) > .menu__link').click();
        cy.get(':nth-child(2) > .menu__list > :nth-child(1) > .menu__link').click();
        cy.get('[href="/api/table-of-contents"]').click();
        /* ==== End Cypress Studio ==== */
    });
})