/// <reference types="cypress" />

describe("Dropdwon, checkboxes and radio buttons",function(){
    beforeEach(() => {
       cy.visit("http://www.webdriveruniversity.com")
       cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click() 
    })
    it("drop-down", function(){
        // cy.visit("http://www.webdriveruniversity.com")
        // cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click()
        cy.get("#dropdowm-menu-1").select("python").should("have.value", "python")
        cy.get("#dropdowm-menu-2").select("Maven").contains("Maven")
        // cy.contains("clickbutton").click()
        // cy.get("#dropdowm-menu-2").select("Maven").should("include.text", "Maven")
    })
    it("chekboxes", function(){
        // cy.visit("http://www.webdriveruniversity.com")
        // cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click()
        cy.get("#checkboxes [value='option-1']").should("not.be.checked").check().should("be.checked")
        // cy.get("#checkboxes [value='option-1']").should("be.checked")
        cy.get("#checkboxes [value='option-3']").should("be.checked").uncheck()
        cy.get("#checkboxes [value='option-3']").should("not.be.checked")
    })
    it("radio buttons", function(){
        // cy.visit("http://www.webdriveruniversity.com")
        // cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click()
        cy.get("#radio-buttons [value='blue']").check().should("be.checked")
        cy.get("#radio-buttons [value='yellow']").should("not.be.checked")
    })
    it("selction and disabled buttons", function(){
        // cy.visit("http://www.webdriveruniversity.com")
        // cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click()
        cy.get("[value='pumpkin']").should("be.checked")
        cy.get("[value='lettuce']").check().should("be.checked")
        cy.get("[value='pumpkin']").should("not.be.checked")
        cy.get("[value='cabbage']").should("be.disabled")

    })
})