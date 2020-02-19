describe ('TStaysure Webe', function()
{
    it('Goto URL', function()
    {
        cy.visit('https://travelinsurance.staysure.co.uk/quote/policy-details')
        cy.title().should('eq', 'Travel Insurance Quote |Over 50s holiday insurance |Staysure')
    })

    it('cover_type_single', function()
    {
        cy.get('#fld-cover-singletrip').click()
    })


    

})