/// <reference types="cypress" />

describe('Element Catcher', function()
{
    it('Goto URL', function()
    {
        cy.visit('https://travelinsurance.staysure.co.uk/quote/policy-details')
    })


    it('Select Travel Details', function()
    {
        cy.get('#cover > div:nth-child(2) > div:nth-child(2) > label:nth-child(1)').click()
        cy.get('#going-cruise > div:nth-child(2) > div:nth-child(3) > label:nth-child(1)').click()
        //cy.get('#fld-travel-UK3').click()
        //cy.get('#destinationSingle > option:nth-child(5)').click()
        
    })

    
})