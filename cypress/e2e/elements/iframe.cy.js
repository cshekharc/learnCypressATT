/// <reference types="cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})
        cy.get("#frame").then((iframe)=>{
            const iFrame = iframe.contents().find("body")
            cy.wrap(iFrame).as("frame")
            cy.get("@frame").find("#button-find-out-more").click()
            cy.get("@frame").find(".modal-body > p")
            .should("include.text", "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles")
        })
        
    })
})