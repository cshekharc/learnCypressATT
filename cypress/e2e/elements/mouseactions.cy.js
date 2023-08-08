/// <reference types="cypress" />

describe("hover and dragnddrop",function(){
    it("drag and drop", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").invoke("removeAttr", "target").click()
        cy.get("#draggable").trigger("mousedown",{which : 1})
        cy.get("#droppable").trigger("mousemove").trigger("mouseup", {force : true})
    })

    it.only("hover on the element", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").invoke("removeAttr", "target").click()
        cy.get(".dropdown-content").eq(0).invoke("show").click()
        // cy.get(".dropdown-content").eq(0).click({force : true})
        // cy.contains("Link 1").click()
    })
})