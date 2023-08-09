/// <reference types="cypress" />

describe("data tables validation", () => {
    it("calculating ages of all the entries in table", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#data-table").invoke("removeAttr", "target").click()
        let userDetails = []
        let age = 0
        cy.get("#thumbnail-1 td").each((ele, index) => {
            userDetails[index] = ele.text()
        }).then(() =>{
            for(let i = 0; i < userDetails.length; i++){
                if(Number(userDetails[i])){
                    age += Number(userDetails[i])
                }
                //cy.log("Total age :" + age)
            } 
            cy.log(age)
            expect(age).to.eq(322) 
        })
    })
    it.only("calculating ages of all the entries in table", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#data-table").invoke("removeAttr", "target").click()
        cy.get("#t01 td:nth-child(1)").each((ele, index)=>{
            let ageOfUser = ele.text()
            // cy.log(ageOfUser)
            if(ageOfUser.includes("Michael")){
                // cy.log(ageOfUser)
                cy.get("#t01 td:nth-child(1)").eq(index).next().next().then((age) => {
                    let userAge = age.text()
                    expect(userAge).to.eq("20")
                })
            }
        })
    })
})
  