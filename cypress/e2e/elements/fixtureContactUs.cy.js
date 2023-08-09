/// <reference types="cypress" />

describe("Contact page of WebdriverUniversity website",function(){
    let data
    before(() => {
        cy.fixture("example.json").then((testData)=>{
            data = testData
        })
    })
    it("Contage us page smoke test", function(){
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.url().should('include', 'contactus')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.get("[name='first_name']").type(data.fname).should("be.enabled").and("be.visible")
        cy.get("[placeholder='Last Name']").should("exist").and('be.visible').clear()
        cy.get("[placeholder='Last Name']").type(data.lname)
        cy.get("[name='email']").type(data.email)
        cy.get("[placeholder='Comments']")
        .should('have.class', 'feedback-input').type(data.comment)
        cy.get("[value='SUBMIT']").should("be.enabled").click()
        cy.get("h1").should("include.text", "Thank You for your Message!")
    })
})