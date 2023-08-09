/// <reference types="cypress" />

describe("Uplaoding File validation", () => {
    it("file uploading", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#file-upload").invoke("removeAttr", "target").click()
        cy.get("[id='myFile']").selectFile("cypress/fixtures/cypress_folder-structure_below_10v.png")
        cy.get("#submit-button").click()
    })
})