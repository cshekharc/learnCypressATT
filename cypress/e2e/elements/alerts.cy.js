/// <reference types="cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get("#button1").click()
        cy.on("window:alert",(str)=>{
            expect(str).to.include("I am an alert box!")
        })
    })

    it("Confirm js alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get("#button4").click()
        cy.on("window:confirm",()=>{
            return true
        })
        cy.get("#confirm-alert-text").should("include.text", "You pressed OK!")
    })
    it.only("Confirm js alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get("#button4").click()
        cy.on("window:confirm",()=>{
            return false
        })
        cy.get("#confirm-alert-text").should("include.text", "You pressed Cancel!")
    })
})