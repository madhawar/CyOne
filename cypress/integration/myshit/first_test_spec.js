describe ('Test Suite 1', function()
{
    it('Test Case 1', function()
    {
        cy.visit('https://www.staysure.co.uk/')
        cy.title().should('eq', 'Staysure™ Travel Insurance - It\'s Worth Doing Right')
    })

    it('Click Get Quote', function()
    {
        cy.get('.btn-get-quote').click()
    })

})