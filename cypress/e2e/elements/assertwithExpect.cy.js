/// <reference types="cypress" />

describe("Assertnig with Expect",() => {
    it("use of expect for asserting",()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        // cy.get("#contact-us .section-title h1").should("include.text","CONTACT US")
        cy.get("#contact-us").find(".section-title").then((e)=>{
            expect(e.text()).to.include("CONTACT US")
        })
    })
})