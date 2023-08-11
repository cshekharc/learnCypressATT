/// <reference types="cypress" />

describe("Contact page of WebdriverUniversity website",function(){
    let dataContact
    before(()=>{
        cy.fixture("example.json").then((testData)=>{
            dataContact = testData;
        })
    })
    it("Contage us page smoke test", function(){
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.url().should('include', 'contactus')
        cy.title().should('include', 'WebDriver | Contact Us')
        // cy.get(".locator").click({force : true}) // if the locator is hidden
        cy.wait(1000)
        // cy.firstNameonContactUspage("Shekhar")
        // cy.lastNameonContactUspage("Choudhari")
        // cy.emailonContactUspage('abc@example.com')
        // cy.commentandSubmit("This is a good websit")
        cy.contactUsForm(dataContact.fname, dataContact.lname, dataContact.email, dataContact.comment)
    })
    it("Conatact us page smoke test", function(){
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.url().should('include', 'contactus')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.contactUsForm(dataContact.comment)
    })
})