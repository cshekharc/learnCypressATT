/// <reference types="cypress" />

describe("Read Xcel file",function(){
    it("Get data from xcel file", function(){
        const filePath = "C:/Users/Shekar/Downloads/testData.xlsx"

        cy.task("exeltoJson", filePath).then((readFile) => {
            console.log(readFile);
            cy.log(readFile)
            cy.get(readFile.Sheet1[0].A).should("include.text", "firstName")
            // cy.log(readFile.Sheet1[1].A + readFile.Sheet1[1].B)
            // cy.log(readFile.Sheet1[2].A + readFile.Sheet1[2].B)
            // cy.log(readFile.Sheet1[3].A + readFile.Sheet1[3].B)
        })
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.url().should('include', 'contactus')
        // cy.title().should('include', 'WebDriver | Contact Us')
        // cy.get("[name='first_name']").type("Shekhar").should("be.enabled").and("be.visible")
        // cy.get("[placeholder='Last Name']").should("exist").and('be.visible').clear()
        // cy.get("[placeholder='Last Name']").type("Choudhari")
        // cy.get("[name='email']").type("c@example.com")
        // cy.get("[placeholder='Comments']").should('have.class', 'feedback-input').type("i like this website")
        // cy.get("[value='SUBMIT']").should("be.enabled").click()
        // cy.get("h1").should("include.text", "Thank You for your Message!")
    })
})