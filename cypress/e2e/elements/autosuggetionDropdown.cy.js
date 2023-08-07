/// <reference types="cypress" />

describe("Auto suggetions",function(){
    it("Select fron dynamic dropdown", function(){
        cy.visit("http://www.webdriveruniversity.com/index.html")
        cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click()
        // cy.reload()
        cy.get("[name='food-item']").type("d")
        cy.get(".autocomplete-items > *").each((foodItem)=>{
            // let foodItem.text = "Celery"
            if(foodItem.text()==="Duck"){
                // cy.log(foodItem)
                cy.wrap(foodItem).click()
                cy.get('#submit-button').click()
                cy.url().should("include", "Duck")
            }
            
        })
    })
})