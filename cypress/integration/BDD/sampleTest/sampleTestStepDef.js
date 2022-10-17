/// <reference types="Cypress" />
import { Given,Then } from "cypress-cucumber-preprocessor/steps"; // have to import these, so that cypress can recognise cucumber keywords

Given("We visit Xendit Website", function(){ // we can make an anonymus function as well here, use "()=>" instead of function() 
cy.visit("https://dashboard.xendit.co/login")
})

Then("Assert Login title",()=>{
    cy.wait(2000)
    cy.get('.login-title').then(val =>{
        expect(val.text()).to.equal('Login to your Dashboard')
    })
})
