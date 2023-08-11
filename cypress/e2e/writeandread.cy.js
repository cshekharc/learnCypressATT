/// <reference types="cypress" />

describe("write and read",function(){
    it("write and reads file using cypress", function(){
        cy.writeFile("./cypress/fixtures/dataFile.json", {fname: "shekhar"})
        cy.writeFile("./cypress/fixtures/textFile.txt", "This is text file from cypress")
    })
    it("read a file",() => {
        cy.readFile('./cypress/fixtures/textFile.txt').should('contains', 'This is text file from cypress')
        cy.readFile('./cypress/fixtures/dataFile.json').its("fname").should("eq", "shekhar")
    })
})