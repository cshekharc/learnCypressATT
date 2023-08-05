/// <reference types="cypress" />

describe(".each use",() => {
    it("click on the text using .each",()=>{
        cy.visit("https://automationteststore.com/")
        cy.get(".fixed_wrapper .prdocutname").should("have.length", 16)// validation of no of product
        // let ab = cy.get(".fixed_wrapper .prdocutname")
        cy.get(".fixed_wrapper .prdocutname").as("productName")
        cy.get("@productName").each((ele)=>{
            if(ele.text().includes("Absolue Eye Precious Cells")){
                cy.wrap(ele).click()
            }
        })
    })
})